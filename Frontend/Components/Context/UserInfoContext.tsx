import React, { createContext, useState } from "react";
import { auth, db } from '../Firebase/firebase';
import { doc, setDoc, getDoc, addDoc, collection } from "firebase/firestore";
import { useAlert } from "react-alert";
import { useRouter } from "next/router";


export const UserInfoContext = createContext<any | null>(null);

export const ContextUserInfo = (props: any) => {

  const showAlert = useAlert();

  const router = useRouter();

  const [userInfo, setUserInfo] = useState<any | null>(null);

  type users = {
    fullname: string,
    email: string
  }



  const bookDownload = async () => {

    const getName = JSON.parse(sessionStorage.getItem("userInfo") as any);

    if (getName === null) {
      showAlert.show("Please Login then try again !!!");
    }


    else {

      console.log("hellooo", userInfo);
      await setDoc(doc(db, `bookDownload/${auth.currentUser?.uid}/BooksName`, userInfo.bookId), {
        user_Id: auth.currentUser?.uid,
        user_FullName: getName.fullname,
        book_Id: userInfo.bookId,
        book_Name: userInfo.bookName,

      })

      window.open(userInfo.bookDownload, '_blank')

      // router.push(userInfo.bookDownload);

    }



  }





  return (
    <UserInfoContext.Provider
      value={{
        bookDownload,
        setUserInfo,

      }}>

      {props.children}

    </UserInfoContext.Provider>
  )


}