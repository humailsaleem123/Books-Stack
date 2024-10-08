
import { styled } from "@nextui-org/react"
import NavBar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";
import Head from 'next/head'
import { useRouter } from "next/router";

export const Box = styled("div", {
    boxSizing: "border-box",
});

function Layout({ children }: any) {

    const router = useRouter();

    const showHeader = (router.pathname === '/login' || router.pathname === '/register' || router.pathname === '/404') ? false : true;

    return (
        <>
            <Head>
                <title>Create Next App</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Box
                css={{
                    maxW: "100%"
                }}
            >
                {showHeader && <NavBar />}

                <main>{children}</main>

                {showHeader && <Footer />}


            </Box>
        </>
    )

};
export default Layout;

