import React from 'react';
import TextField from '@mui/material/TextField'
import { useField } from 'formik';
import { color } from '@mui/system';
import { styled } from "@mui/material/styles";

const StyledTextField = styled(TextField)({
    "& label": {
        color: "gray"
    },
    "&:hover label": {
        fontWeight: 700
    },
    "& label.Mui-focused": {
        color: "#b97509"
    },
    "& .MuiInput-underline:after": {
        borderBottomColor: "black"
    },
    "& .MuiOutlinedInput-root": {
        color: "black",
        "& fieldset": {
            borderColor: "#ffb510"
        },
        "&:hover fieldset": {
            borderColor: "black",
            borderWidth: 2
        },
        "&.Mui-focused fieldset": {
            borderColor: "#ffb510"
        }
    }
});


const TextfieldWrapper = ({ name, ...otherProps }: any) => {

    const [field, mata] = useField(name);

    const configTextfield = {
        ...field,
        ...otherProps,
        fullWidth: true,
        variant: 'outlined',
        margin: "normal",
        size: 'small'
    };

    if (mata && mata.touched && mata.error) {
        configTextfield.error = true;
        configTextfield.helperText = mata.error;
    }

    return (

        <StyledTextField

            color='primary'
            autoComplete="off"

            sx={{
                "& .MuiInputBase-root": {
                    height: 45

                },
            }}
            {...configTextfield}
        />

    );
};

export default TextfieldWrapper;