import React, { createContext, useState, useRef, useEffect, useCallback } from "react";
import {
  createUserWithEmailAndPassword, onAuthStateChanged,
  signInWithEmailAndPassword, signOut, sendPasswordResetEmail, sendEmailVerification
} from 'firebase/auth';
import { auth, db } from '../Firebase/firebase';
import { doc, setDoc, getDoc } from "firebase/firestore";
import { useAlert } from "react-alert";
import { useRouter } from "next/router";
import { confirmAlert } from "react-confirm-alert";
import validator from 'validator';
import Cookies from "js-cookie";



export const ContextUser = createContext<any | null>(null);


export const UserContext = (props: any) => {

  const alertShow = useAlert();
  const router = useRouter();

  // console.log("routess", router.asPath);

  const [activeUser, setActiveUser] = useState<string | null>(null);

  const [status, setStatus] = useState<string | null>(null);
  const [alertError, setAlertError] = useState<string | null>(null);

  const [RouteHistory, setRouteHistory] = useState<any | null>(null);





  const [open, setOpen] = React.useState<Boolean>(false);


  const handleClick = () => {
    setOpen(true);
  };


  const forgetPass = useRef<any | null>(null);






  useEffect(() => {


    let prevRoute: any;
    let currentRoute: any;

    currentRoute = router.pathname

    const handleRouteChange = (url: any, { shallow }: any) => {
      prevRoute = currentRoute
      currentRoute = url

      console.log('routess', prevRoute, currentRoute)
      setRouteHistory(prevRoute);
    }
    router.events.on('routeChangeStart', handleRouteChange)

    return () => {
      router.events.off('routeChangeStart', handleRouteChange)
    }

  }, [router.events, router.pathname])



  const register = async (values: any) => {

    console.log("values", values);

    try {

      await createUserWithEmailAndPassword(auth, values.email, values.password).then(async () => {
        if (!auth.currentUser?.emailVerified) {
          sendEmailVerification(auth.currentUser as any).then(() => {

            console.log("currentUser", auth.currentUser?.uid);
            alertShow.show("Verification Email is sent, Please check your Email !!");


          }).catch((err) => {
            alert(err.message);
          })
        }
        await setDoc(doc(db, "Users", auth.currentUser?.uid as any), {
          id: auth.currentUser?.uid,
          FullName: values.fullname,
          Email: values.email,
        })

        setTimeout(() => {
          router.push('/login');
        }, 3000)
      })
      handleClick();
      setAlertError("success");
      setStatus("User Registered Successfull !!");


    }
    catch (err) {
      handleClick();
      setAlertError("error");
      setStatus("This Email is Already In Use !!!");
      // alertShow.show("This Email is Already In Use !!");
      console.log("showing errors", err);

    }

  }


  const login = async (values: any) => {


    try {
      const res = await signInWithEmailAndPassword(auth, values.email, values.password);
      const user = res.user;
      const docRef = doc(db, "Users", user.uid);
      const docSnap = await getDoc(docRef);
      // console.log("user", user.emailVerified);

      if (user.emailVerified === false) {
        alertShow.show("This User is not verify their Email, Please Verify the email then try again !!");
        await signOut(auth);
      }
      else {
        if (docSnap.exists()) {
          console.log("docSnap", docSnap.data());
          const dataInfo = docSnap.data();
          Cookies.set("loggedIn", true as any);
          sessionStorage.setItem("userInfo", JSON.stringify({ fullname: dataInfo.FullName, email: dataInfo.Email }));

          console.log("RouteHistory in LOGIN", RouteHistory);


          setTimeout(() => {

            if (RouteHistory === '/register') {
              router.push('/');
            }
            else {
              router.back();
            }




          }, 3000)
        }
        else {
          console.log("No such document!");
        }

        handleClick();
        setAlertError("success");
        setStatus("Login Successfull !!");

      }


    }
    catch (err) {
      console.log("showing ERRORS", err);

      handleClick();
      setAlertError("error");
      setStatus("Invalid Credentials !!");
      // alertShow.show("This User is not Registered !!");

    }

  }
  const TriggerYesBtn = async () => {
    const emailValue = forgetPass.current.value;
    try {
      await sendPasswordResetEmail(auth, emailValue);
      alertShow.show("The Reset Password Link is Sent to Your Email !!!");
    }
    catch (err) {
      alertShow.error("This User Is Not Registered !!!!");
    }

  }

  const ForgetPassword = async () => {

    const emailValue = forgetPass.current.value;

    console.log("emailValue", emailValue);

    if (emailValue !== "" && validator.isEmail(emailValue)) {
      confirmAlert({
        title: "Are You Sure ?",
        message: "Are You Sure You Want To Reset Your Password ?",
        buttons: [
          {
            label: "Yes",
            onClick: () => TriggerYesBtn()
          },
          {
            label: "No"
          }
        ]
      });

    }
    else {
      alertShow.show("Please Enter Valid Email Address !!!");
    }




  }

  useEffect(() => {

    const getInfo = JSON.parse(sessionStorage.getItem('userInfo') as any);

    if (getInfo === null) {
      Cookies.remove("loggedIn");
    }
    else {
      Cookies.set("loggedIn", true as any);
    }

  }, [])

  const logout = async () => {

    await signOut(auth);
    sessionStorage.clear();
    Cookies.remove("loggedIn");
    router.reload();
    // window.location.reload();

  }


  return (

    <ContextUser.Provider
      value={{
        register,
        login,
        logout,
        forgetPass,
        ForgetPassword,
        handleClick,
        setOpen,
        open,
        alertError,
        status,

      }}
    >

      {props.children}

    </ContextUser.Provider>
  )

}