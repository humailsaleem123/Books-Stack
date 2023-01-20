import { Container, Box, Grid, Typography, InputLabel } from '@mui/material';
import React, { useRef, useContext, useEffect, useState } from 'react'
import TextfieldWrapper from '../Fields/TextField';
import SubmitButtonWrapper from '../Fields/Submit';
import { Button } from '@nextui-org/react';
import { Formik, Form } from "formik";
import * as Yup from 'yup'
import TextBoxWrapper from '../Fields/TextBox';
import emailjs from '@emailjs/browser';
import { AnimatePresence, motion, useAnimation } from "framer-motion";
import Check from '../Fields/Check';
import { makeStyles } from '@mui/styles';
import Link from 'next/link';
import { Spacer } from '@nextui-org/react';

// const useStyles = makeStyles((theme: any) => ({

//     subTitle: {
//         // marginBottom: "16px",
//         fontSize: "30px !important",
//         [theme.breakpoints.down("md")]: {
//             fontSize: "25px !important",
//         },
//         [theme.breakpoints.down("sm")]: {
//             fontSize: "20px !important",
//         },
//         [theme.breakpoints.down("xs")]: {
//             fontSize: "20px !important",
//         },
//     },
//     captionClass: {
//         fontSize: "14px"
//     }
// }))


const Contact = () => {

    const controls = useAnimation();

    // const classes = useStyles();

    const [sending, setSending] = React.useState(false);
    const [sendEmailSuccess, setSendEmailSuccess] = React.useState(false);

    type users = {
        fullname: string;
        email: string;
    };

    const [getUserInfo, setGetUserInfo] = useState<users[]>([]);

    useEffect(() => {

        const session = JSON.parse(sessionStorage.getItem("userInfo") as any);

        if (session !== null) {
            setGetUserInfo(Object.values(session));
        }



    }, [])



    // const initialFormState = {
    //     user_email: "",
    //     user_name: "",
    //     message: "",


    // };


    const formFillState = {
        user_email: getUserInfo[1] || '',
        user_name: getUserInfo[0] || '',
        message: "",


    };


    const formValidation = Yup.object().shape({

        user_name: Yup.string()
            .max(25, '*Must be 25 characters or less')
            .required('*Required'),

        user_email: Yup.string().email('Invalid email address').required('*Required'),

        message: Yup.string()
            // .min(8 , '*Minimum 8 characters')
            .min(10, '*Minimum 8 characters !!')
            .required('*Required'),

    })



    const sendEmail = (values: any) => {

        emailjs.send('service_6f9kgre', 'template_gtj8a6n', values, 'eqLDTcvgYbpD8z6jv')
            .then((result) => {
                console.log(result.text);
                setSendEmailSuccess(true);
                setSending(false);
            }, (error) => {
                setSending(false);
                console.log(error.text);
            });
        // console.log("FFFORMRR", form.current.values);
    }






    return (
        <React.Fragment>


            <Container maxWidth='lg' style={{ marginTop: "6rem", textAlign: "center" }}>


                <Box
                    sx={{
                        alignItems: 'center',
                        justifyContent: "center",
                        p: 1,
                        m: 1,
                    }}
                >
                    <Typography variant='h4' style={{ fontVariantCaps: 'petite-caps' }}>contact us ?</Typography>
                    <Spacer y={1} />
                    <Typography variant='subtitle1'>
                        <Typography variant='overline' fontSize={14}>Have any questions or query ?</Typography>
                        <Spacer y={1} />
                        We would love to respond to your queries, so dont hesitate to contact us, but you need to register your account to our application
                        <Spacer y={1} />
                        Feel free to get in touch with us
                        {/* If you have any query regarding this application, so dont hesitate to contact me, but you need to register your account to my application and then send me a message */}
                    </Typography>

                    <br />
                    <br />
                    <br />

                    <Formik

                        initialValues={{ ...formFillState }}
                        validationSchema={formValidation}
                        enableReinitialize={true}
                        // innerRef={form}
                        onSubmit={(values, { resetForm }: any) => {
                            console.log(values);
                            sendEmail(values);
                            setSendEmailSuccess(true);

                            resetForm({ values: '' });
                        }}




                    >

                        <Form>
                            {/* sx={{ flexDirection: { xs: "column", md: "row" } }} */}
                            <AnimatePresence>
                                {!sendEmailSuccess && (
                                    <Grid container direction="column" justifyContent="center" columns={{ xs: 1.5, sm: 4, md: 10, lg: 3 }} >
                                        <motion.div custom={2}>
                                            <Typography component={motion.h4}
                                                initial={{ opacity: 0, y: 10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ delay: 1.5, duration: 1 }} textAlign='center' variant='h4' style={{ fontVariantCaps: 'petite-caps' }}>Send a Message :</Typography>
                                        </motion.div>


                                        <Grid item xs={2} md={5}>
                                            <motion.div custom={3}
                                                initial={{ opacity: 0, y: 10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ delay: 2, duration: 1 }}
                                            >
                                                <motion.div custom={3}>
                                                    <InputLabel sx={{ color: "#FFF" }}>Full Name : </InputLabel>
                                                    <TextfieldWrapper

                                                        disabled
                                                        label='Your FullName' name='user_name' />
                                                </motion.div>
                                            </motion.div>
                                        </Grid>

                                        <Grid item xs={2} md={5}>
                                            <motion.div initial={{ opacity: 0, y: 10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ delay: 2.5, duration: 1 }}
                                                custom={4}>
                                                <motion.div custom={4}>
                                                    <InputLabel sx={{ color: "#FFF" }}>Email : </InputLabel>

                                                    <TextfieldWrapper
                                                        disabled
                                                        label='Your Email' name='user_email' />
                                                </motion.div>
                                            </motion.div>
                                        </Grid>

                                        <Grid item xs={2} md={5}>
                                            <motion.div initial={{ opacity: 0, y: 10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ delay: 3.0, duration: 1 }} custom={5}>

                                                <motion.div animate={controls} custom={5}>
                                                    <InputLabel sx={{ color: "#FFF" }}>Message : </InputLabel>

                                                    <TextBoxWrapper
                                                        label='Your Message' name='message' />
                                                </motion.div>
                                            </motion.div>
                                        </Grid>
                                        <Grid item xs={10} md={5} style={{ marginTop: '20px' }}>
                                            <motion.div
                                                initial={{ opacity: 0, y: 10 }}
                                                animate={{ opacity: 1, y: 0 } as any}
                                                transition={{ delay: 3.5, duration: 1 }} custom={6}>
                                                <motion.div animate={controls} custom={6}>

                                                    <SubmitButtonWrapper>Send Message

                                                    </SubmitButtonWrapper>
                                                </motion.div>
                                            </motion.div>

                                        </Grid>

                                        <br />

                                    </Grid>


                                )}
                            </AnimatePresence>
                            <AnimatePresence>
                                {sendEmailSuccess && (
                                    <Box
                                        component={motion.div}
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ delay: 0.9 }}

                                    >
                                        <Grid container direction='column'
                                            alignItems='center' justifyContent="center" spacing={1} columns={{ xs: 6, sm: 10, md: 3 }}

                                        >

                                            <Spacer y={8} />

                                            <Box m={2} >
                                                <Check width="150" />
                                            </Box>

                                            <Typography
                                                component={motion.h4}
                                                initial={{ opacity: 0, y: 10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ delay: 1.5, duration: 1 }}
                                                variant="caption"

                                            >
                                                Your message has been successfully sent, well reply as soon as possible.
                                            </Typography>
                                            <Spacer y={2} />
                                            <motion.div animate={controls} custom={2}>
                                                <Link href='/' style={{ textDecoration: "none" }}><Button color="warning" auto ghost>BACK TO HOMEPAGE</Button></Link>
                                            </motion.div>

                                            <Spacer y={2} />

                                        </Grid>
                                    </Box>

                                )}
                            </AnimatePresence>

                        </Form>


                    </Formik>
                </Box>


            </Container>


        </React.Fragment >
    )
}

export default Contact;