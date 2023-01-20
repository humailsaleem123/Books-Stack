import React, { useEffect, useState } from 'react';
// import { Button } from '@mui/material';
import { useFormikContext } from 'formik';
import { Button } from "@nextui-org/react";
import { useAlert } from 'react-alert';
const SubmitButtonWrapper = ({
    children,
    ...otherProps
}: any) => {
    const { submitForm } = useFormikContext();


    const [userName, setUserName] = useState<string | null>(null);
    const alertShow = useAlert();

    useEffect(() => {


        const session = JSON.parse(sessionStorage.getItem('userInfo') as any);

        if (session !== null) {
            setUserName(session.fullname);
        }



    }, [])


    const handleSubmit = () => {
        if (userName !== null) {
            submitForm();
        }
        else {
            alertShow.show("User must be login !!!")
        }
        console.log("userName", userName);
    }

    const configButton = {
        variant: 'contained',
        color: 'warning',
        auto: true,
        size: "md",
        shadow: true,
        onPress: handleSubmit

    }



    return (
        <Button  {...configButton as any} >     {children}</Button>
        // <Button
        //     {...configButton}
        // // fullWidth
        // >
        //     {children}
        // </Button>
    );
};

export default SubmitButtonWrapper;