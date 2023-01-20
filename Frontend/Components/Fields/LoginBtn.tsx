import React from 'react';
import { useFormikContext } from 'formik';
import { Button } from "@nextui-org/react";
import { Typography } from '@mui/material';

const LoginSubmitBtn = ({ children, ...otherprops }: any) => {
  const { submitForm } = useFormikContext();

  const handleSubmit = () => {
    submitForm();
  }


  return (

    <Button
      onPress={handleSubmit}
      auto
      as="a"
      rel="noopener noreferrer"
      target="_blank"
      css={{
        minWidth: "120px",
        textDecoration: "none",
        fontSize: "14px !important",
        fontFamily: "Poppins-Medium",
        // maxWidth: '$13',
        borderRadius: '$xs',
        border: '$space$1 solid transparent',
        background: '$gray800',
        color: '$gray100',
        height: '45px',
        boxShadow: '$md',
        '&:hover': {
          background: '$gray100',
          color: '$gray800',
        },
        '&:active': {
          background: '$gray200',
        },
        '&:focus': {
          borderColor: '$gray400',
        },
      }}

    >
      <Typography variant="overline">

        {children}
      </Typography>

    </Button>
    // <Button
    //     {...configButton}
    // // fullWidth
    // >
    //     {children}
    // </Button>
  );
}
export default LoginSubmitBtn;