import React, { useRef, useEffect } from 'react'
import '../styles/globals.css'
import '@coreui/coreui/dist/css/coreui.min.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import '@fortawesome/fontawesome-svg-core/styles.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "react-confirm-alert/src/react-confirm-alert.css";
import { config } from '@fortawesome/fontawesome-svg-core'
import type { AppProps } from 'next/app'
import Layout from '../Components/Layout'
import { NextUIProvider } from '@nextui-org/react';
import { ThemeProvider, createTheme, responsiveFontSizes } from '@mui/material/styles';
import { UserContext } from '../Components/Context/UserContext';
import { positions, Provider } from "react-alert";
import AlertMUITemplate from "react-alert-template-mui";
import { ContextUserInfo } from '../Components/Context/UserInfoContext';
import { useRouter } from 'next/router';


// const theme = createTheme();

let THEME = createTheme({
  typography: {
    allVariants: {
      "fontFamily": `Poppins-Medium !important`,
      // "fontSize": 14,
      // "fontWeightLight": 300,
      // "fontWeightRegular": 400,
      // "fontWeightMedium": 500
    }

  },
});

THEME = responsiveFontSizes(THEME);

config.autoAddCss = false

const options = {
  position: positions.MIDDLE
};



export default function App({ Component, pageProps }: AppProps) {



  return (
    <ThemeProvider theme={THEME}>
      <NextUIProvider >
        <Provider template={AlertMUITemplate as any} {...options}>
          <UserContext>
            <ContextUserInfo>
              <Layout>
                <Component {...pageProps} />
              </Layout>
            </ContextUserInfo>
          </UserContext>
        </Provider>
      </NextUIProvider>

    </ThemeProvider>

  )
}
