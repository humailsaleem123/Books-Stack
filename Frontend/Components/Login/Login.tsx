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
import LoginSubmitBtn from '../Fields/LoginBtn';
import EmailTextFieldWrapper from "../Fields/EmailTextField";
import PassTextFieldWrapper from "../Fields/PassTextField";
import { ContextUser } from "../Context/UserContext";
import Alert from '@mui/material/Alert';
import Snackbar from "@mui/material/Snackbar";

function Login() {


    const value = useContext<any>(ContextUser);

    const initialFormState = {
        email: "",
        password: "",
    }

    const formValidation = Yup.object().shape({


        email: Yup.string().email('Invalid email address').required('*Required'),
        password: Yup.string()
            .min(3, '*Must be 3 characters long ')
            .max(30, '*Must be 30 characters long')
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
                                value.login(values);
                                resetForm({ values: "" });
                            }}

                        >


                            <Form className={loginStyles['login100-form']}>

                                <span className={loginStyles['login100-form-logo']}>
                                    <i className={`${loginMaterialStyles['zmdi']} ${loginMaterialStyles['zmdi-landscape']}`}></i>
                                </span>

                                <span className={`${loginStyles['login100-form-title']} ${loginUtils['p-t-27']} ${loginUtils['p-b-34']}`}>
                                    Log in
                                </span>

                                <EmailTextFieldWrapper
                                    type='text'
                                    name='email'
                                    label="Email"
                                    inputRef={value.forgetPass}
                                />

                                <Spacer y={1} />

                                <PassTextFieldWrapper
                                    type='password'
                                    name='password'
                                    label="Password"
                                />
                                <Spacer y={2} />


                                <div className={loginStyles['container-login100-form-btn']}>

                                    <LoginSubmitBtn>Login</LoginSubmitBtn>
                                </div>

                                <div className={`${loginUtils['text-center']} ${loginUtils['p-t-40']}`}>
                                    <Text>
                                        <Link color="text" css={{
                                            display: "inline-block",
                                            color: 'rgb(201, 201, 201)',
                                            '&:hover': {
                                                // background: 'transparent',
                                                color: '#FFF',
                                            },

                                        }}>
                                            <Typography onClick={value.ForgetPassword} variant="overline"> Forgot Password ?</Typography>

                                        </Link>

                                    </Text>

                                </div>
                                <div className={`${loginUtils['text-center']} ${loginUtils['p-t-20']}`}>
                                    <Typography variant="overline" style={{ color: "#FFF" }}>Dont Have An Account ? <br />
                                        <Link as={NextLink} href='/register' color="text" css={{
                                            display: "inline-block",
                                            color: 'rgb(201, 201, 201)',
                                            '&:hover': {

                                                color: '#FFF',
                                            },
                                        }}>
                                            <Typography variant="overline" style={{ fontSize: "14px" }}>Register</Typography>
                                        </Link>
                                    </Typography>

                                </div>

                            </Form>


                        </Formik>
                    </div>
                </div >

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
        </>
    );
}

export default Login;
