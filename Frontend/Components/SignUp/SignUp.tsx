import React, { useContext } from "react";
import bg from '../Images/bg-01.jpg';
import loginStyles from '../../styles/login.module.css';
import loginUtils from '../../styles/loginUtils.module.css';
import PersonIcon from '@mui/icons-material/Person';
import loginMaterialStyles from '../../styles/material-design.module.css';
import { Button, Grid } from "@nextui-org/react";
import { Typography } from "@mui/material";
import { Link, Spacer, Text } from "@nextui-org/react";
import NextLink from "next/link";
import * as Yup from 'yup';
import { Formik, Form } from "formik";
import LoginTextFieldWrapper from "../Fields/LoginTextField";
import PassTextFieldWrapper from "../Fields/PassTextField";
import LoginSubmitBtn from "../Fields/LoginBtn";
import EmailTextFieldWrapper from "../Fields/EmailTextField";
import { ContextUser } from "../Context/UserContext";
import { useRouter } from "next/router";
import Alert from '@mui/material/Alert';
import Snackbar from "@mui/material/Snackbar";


function Login() {

    const value = useContext(ContextUser);
    const router = useRouter();


    const initialFormState = {
        fullname: "",
        email: "",
        password: "",
        confirmPassword: ""
    }

    const formValidation = Yup.object().shape({

        fullname: Yup.string()
            .min(3, '*Must be 3 characters long')
            .required('*Required'),
        email: Yup.string().email('Invalid email address').required('*Required'),
        password: Yup.string()
            .min(6, '*Password must be 6 characters long ')
            .matches(/[0-9]/, '*Password must contain at least 1 number')
            .matches(/[a-z]/, '*Password must contain at least 1 lower case letter')
            .matches(/[A-Z]/, '*Password must contain at least 1 upper case letter')
            // .matches(/[^\w]/, 'Password requires a symbol')
            .max(30, '*Must be 30 characters long')
            .required('*Required'),
        confirmPassword: Yup.string()
            .oneOf([Yup.ref('password'), null], '*Password must match')
            .required('*Required')
    })

    const handleClose = (event: any, reason: any) => {
        if (reason === "clickaway") {
            return;
        }

        value.setOpen(false);
    };



    const AlertComponent = React.forwardRef((props: any, ref: any) =>
        <Alert elevation={6} severity={(value.alertError === 'error') ? 'error' : 'success'} variant="filled" {...props} ref={ref} />

    );

    AlertComponent.displayName = 'AlertComponent';



    return (
        <>
            <div className={loginStyles.limiter}>
                <div className={loginStyles['container-login100']} style={{ backgroundImage: `url(${bg.src})` }}>
                    <div className={loginStyles['wrap-login100']}>

                        <Formik
                            initialValues={initialFormState}
                            validationSchema={formValidation}
                            enableReinitialize={true}

                            onSubmit={(values, { resetForm }: any) => {
                                console.log(values);
                                value.register(values);
                                resetForm({ values: "" });

                                // setTimeout(() => {
                                //     router.push('/login');
                                // }, 2000)

                            }}

                        >
                            <Form className={loginStyles['login100-form']}>

                                <span className={loginStyles['login100-form-logo']}>
                                    <i className={`${loginMaterialStyles['zmdi']} ${loginMaterialStyles['zmdi-landscape']}`}></i>
                                </span>

                                <span className={`${loginStyles['login100-form-title']} ${loginUtils['p-t-27']} ${loginUtils['p-b-34']}`}>
                                    Register Account
                                </span>

                                <LoginTextFieldWrapper
                                    name='fullname'
                                    type='text'
                                    label='Fullname'

                                />



                                <EmailTextFieldWrapper
                                    name='email'
                                    type='text'
                                    label='Email'

                                />

                                <PassTextFieldWrapper
                                    name='password'
                                    type='password'
                                    label='Password'

                                />
                                <PassTextFieldWrapper
                                    name='confirmPassword'
                                    type='password'
                                    label='Confirm Password'

                                />

                                <Spacer y={2} />

                                <div className={loginStyles['container-login100-form-btn']}>
                                    {/* <button className={loginStyles['login100-form-btn']} style={{ border: 'none' }}>
                                Login
                            </button> */}
                                    <LoginSubmitBtn>Register</LoginSubmitBtn>
                                </div>

                                {/* <div className={`${loginUtils['text-center']} ${loginUtils['p-t-40']}`}>
                                <Text>
                                    <Link href="#" color="text" css={{
                                        display: "inline-block",
                                        color: 'rgb(201, 201, 201)',
                                        '&:hover': {
                                            // background: 'transparent',
                                            color: '#FFF',
                                        },
                                    }}>
                                        <Typography variant="overline"> Forgot Password ?</Typography>

                                    </Link>

                                </Text>

                            </div> */}
                                <div className={`${loginUtils['text-center']} ${loginUtils['p-t-20']}`}>
                                    <Typography variant="overline" style={{ color: "#FFF" }}>Already Have An Account ? <br />
                                        <Link as={NextLink} href="/login" color="text" css={{
                                            display: "inline-block",
                                            color: 'rgb(201, 201, 201)',
                                            '&:hover': {
                                                // background: 'transparent',
                                                color: '#FFF',
                                            },
                                        }}> <Typography variant="overline" style={{ fontSize: "14px" }}>Login</Typography></Link>
                                    </Typography>

                                </div>

                            </Form>

                        </Formik>
                    </div>
                </div >
                <Snackbar open={value.open} autoHideDuration={3000}
                    onClose={handleClose}
                    // sx={{marginBottom:14}}
                    anchorOrigin={{
                        vertical: "bottom",
                        horizontal: "left"
                    }}
                >

                    <AlertComponent onClose={handleClose}
                    >
                        {value.status}
                    </AlertComponent>


                </Snackbar>
            </div >
        </>
    );
}

export default Login;
