import React from 'react';
import TextField from '@mui/material/TextField'
import { useField } from 'formik';
import loginStyles from '../../styles/login.module.css'
import { AccountCircle } from '@mui/icons-material';
import InputAdornment from '@mui/material/InputAdornment'
import { styled } from "@mui/material/styles";

const StyledTextField = styled(TextField)({
  ".MuiInput-underline:before": {
    borderBottom: "2px solid white"
  },

  "&& .MuiInput-underline: hover: before": {
    borderBottom: "2px solid lightblue"
  },
  ".MuiInput-underline: after": {
    borderBottom: "2px solid #b97509"
  }

});
const LoginTextFieldWrapper = ({ name, ...otherProps }: any) => {

  const [field, mata] = useField(name);

  const configTextfield = {
    ...field,
    ...otherProps,
    fullWidth: true,
    variant: 'standard',
    margin: "normal",
    size: 'small'
  };

  if (mata && mata.touched && mata.error) {
    configTextfield.error = true;
    configTextfield.helperText = mata.error;
  }

  return (

    <>

      <StyledTextField

        color='primary'
        autoComplete="off"
        InputLabelProps={{
          style: { color: "white" },
        }}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <AccountCircle style={{ color: "#FFF" }} />
            </InputAdornment>
          ),


        }}
        sx={{

          "& .MuiInputBase-root": {
            height: 45,
            fontFamily: 'Poppins-Regular',
            color: '#FFF',

          },
          ".css-1d3z3hw-MuiOutlinedInput-notchedOutline": {
            borderColor: "white",
          },
          "&:hover": {
            ".css-1d3z3hw-MuiOutlinedInput-notchedOutline": {
              border: "2px solid white",
            },
          },
        }}
        {...configTextfield}
      />

    </>


  );
};

export default LoginTextFieldWrapper;