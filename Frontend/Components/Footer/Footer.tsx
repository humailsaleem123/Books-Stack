import * as React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { Box, Container, Grid, Typography } from '@mui/material'
import { Link, Spacer } from "@nextui-org/react";
import NextLink from 'next/link'
import FacebookIcon from '@mui/icons-material/Facebook';
import GoogleIcon from '@mui/icons-material/Google';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export default function Footer() {
    const [value, setValue] = React.useState(0);

    return (
        <Container maxWidth={false}>
            <footer className="py-3 border-top">

                <Grid container justifyContent='center' rowGap={1} alignItems="center" columns={{ xs: 1.5, sm: 4, md: 10, lg: 15 }} sx={{ flexDirection: { xs: "column", md: "row" } }} >

                    <Grid item xs={2} sm={5} md={3} lg={5} className="nav">
                        <Typography variant='overline'>Books - Stack &copy; 2022 Developed By Humail Saleem</Typography>
                    </Grid>
                    <Grid item xs={1} sm={5} md={3} lg={5} className="nav" justifyContent='center' sx={{ marginTop: 1 }} >
                        <p className="nav-link  text-muted link-dark" style={{ cursor: "pointer" }}><FacebookIcon /></p>
                        <p className="nav-link text-muted link-dark" style={{ cursor: "pointer" }}><GoogleIcon /></p>
                        <p className="nav-link  text-muted link-dark" style={{ cursor: "pointer" }}><LinkedInIcon /></p>

                    </Grid>

                    <Grid item xs={2} sm={5} md={4} lg={5} className='nav' sx={{
                        justifyContent: { xs: 'center', sm: 'center', md: 'flex-end' }
                    }}>

                        <Link as={NextLink} href="/" className="nav-link px-2 text-muted" >
                            Home
                        </Link>
                        <Link as={NextLink} href="/books" className="nav-link px-2 text-muted" >
                            Books
                        </Link>
                        <Link as={NextLink} href="/about" className="nav-link px-2 text-muted" >
                            About
                        </Link>
                        <Link as={NextLink} href="/contact" className="nav-link px-2 text-muted" >
                            Contact
                        </Link>
                    </Grid>

                </Grid>

            </footer>

        </Container >

    );
}
