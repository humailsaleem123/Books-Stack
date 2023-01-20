import React, { useContext, useState, useEffect, useRef } from 'react';
import { Navbar, Button, Link, Text } from "@nextui-org/react";
import NextLink from 'next/link'
import { useRouter } from 'next/router';
import { Typography } from '@mui/material';
import { ContextUser } from "../Context/UserContext";
import LogoutIcon from '@mui/icons-material/Logout';



function NavBar() {


    const contextValue = useContext(ContextUser);


    const [windowDimension, setWindowDimension] = useState<any | null>(null);

    // const getUser = typeof window !== "undefined" ? localStorage.getItem('user') : false;


    const [user, getUser] = useState<any | null>(null);

    useEffect(() => {

        const session = JSON.parse(sessionStorage.getItem('userInfo') as any);

        if (session !== null) {
            getUser(session);
        }

        // getUser(JSON.parse(sessionStorage.getItem("userInfo") as any));



    }, [])

    // React.useEffect(() => {
    //     setWindowDimension(window.innerWidth);
    // }, []);

    // React.useEffect(() => {
    //     function handleResize() {
    //         setWindowDimension(window.innerWidth);
    //     }

    //     window.addEventListener("resize", handleResize);
    //     return () => window.removeEventListener("resize", handleResize);
    // }, []);

    // const isMobile = windowDimension <= 640;

    const [scroll, setScroll] = React.useState<Boolean>(false);

    React.useEffect(() => {
        window.addEventListener("scroll", () => {
            setScroll(window.scrollY > 50);
        });
    }, []);



    // const collapseItems = [
    //     "Home",
    //     "Books",
    //     "About Us",
    //     "Contact Us",

    // ]

    const collapseItems = [

        {
            title: "Home",
            link: "/",
        },
        {
            title: "Books",
            link: "/books",
        },
        {
            title: "About",
            link: "/about",
        },
        {
            title: "Contact",
            link: "/contact",
        }

    ]

    const navigation = [

        {
            title: "Home",
            link: "/",
        },
        {
            title: "Books",
            link: "/books",
        },
        {
            title: "About",
            link: "/about",
        },
        {
            title: "Contact",
            link: "/contact",
        }

    ]

    const { asPath } = useRouter();

    //     css = {{
    //         $$navbarBackgroundColor: "transparent",
    //             $$navbarBlurBackgroundColor: "transparent",
    //                 position: 'fixed',
    //             }
    // }

    const [isHidden, setIsHidden] = useState<Boolean>(false);


    const myRef = useRef<any | null>(null);

    const clickElement = (ref: any) => {

        ref.current.dispatchEvent(
            new MouseEvent('click', {
                view: window,
                bubbles: true,
                cancelable: true,
                buttons: 1,
            }),
        );


    };
    return (
        <>

            <Navbar isBordered variant="sticky" css={{ position: "fixed" }} style={scroll ? { backgroundColor: "#FFF" } : { backgroundColor: "transparent" }} >


                <Navbar.Brand >

                    <Navbar.Toggle aria-label="toggle navigation" ref={myRef} />

                    {/* <AcmeLogo /> */}
                    <NextLink href='/' style={{ textDecoration: "none", "color": "#000" }}>
                        <Text b color="inherit" hideIn="xs">
                            Books - Stack
                        </Text>
                    </NextLink>
                </Navbar.Brand>
                <Navbar.Content activeColor='warning' enableCursorHighlight hideIn="xs" variant="underline">
                    {navigation.map((item, index) => (
                        <Navbar.Link isActive={asPath === item.link} as={NextLink} href={item.link} key={index}
                            css={{
                                '&:hover': {
                                    color: "#f5a524"
                                }
                            }}
                        >
                            {item.title}

                        </Navbar.Link>
                    ))}

                </Navbar.Content>

                {user === null ?
                    (
                        <>
                            <Navbar.Content >

                                <Navbar.Link as={NextLink} href='/login' color="inherit"
                                    css={{
                                        '&:hover': {
                                            color: "#f5a524"
                                        }
                                    }}
                                >
                                    Login
                                </Navbar.Link>


                                <Navbar.Item>

                                    <Button as={NextLink} href='/register' auto flat color="warning"
                                        css={{
                                            textDecoration: 'none',
                                            '&:hover': {
                                                color: "#f5a524"
                                            }
                                        }}
                                    >
                                        Sign Up
                                    </Button>
                                </Navbar.Item>

                            </Navbar.Content>
                        </>
                    )
                    :
                    (
                        <Navbar.Content >

                            <Navbar.Item>
                                <Typography variant='caption' style={{ textTransform: "capitalize" }}>
                                    welcome&nbsp;
                                    <span style={{ fontWeight: "bold" }}>{user.fullname}</span>
                                </Typography>
                            </Navbar.Item>
                            <Navbar.Item>
                                <Button auto flat color="warning"
                                    css={{
                                        textDecoration: 'none',
                                        '&:hover': {
                                            color: "#f5a524"
                                        }
                                    }}
                                    onPress={contextValue.logout}
                                >
                                    Logout&nbsp;&nbsp;<LogoutIcon />
                                </Button>
                            </Navbar.Item>
                        </Navbar.Content>
                    )
                }




                <Navbar.Collapse >
                    {collapseItems.map((item, index) => (
                        <Navbar.CollapseItem key={item.title}>
                            <Link
                                as={NextLink}
                                color="inherit"
                                css={{
                                    textDecoration: 'none',
                                    '&:hover': {
                                        color: "#f5a524"
                                    }
                                }}
                                href={item.link}
                                onClick={() => clickElement(myRef)}
                            >
                                {item.title}
                            </Link>
                        </Navbar.CollapseItem>
                    ))}
                </Navbar.Collapse>
            </Navbar>



        </>

    );
}

export default NavBar;
