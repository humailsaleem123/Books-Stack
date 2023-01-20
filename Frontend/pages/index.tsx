import React, { useState, useEffect } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faServer, faLanguage } from '@fortawesome/free-solid-svg-icons'
import { faStar, faFileCode } from '@fortawesome/free-regular-svg-icons'
import { Box, Container, Grid, Typography } from '@mui/material'
import Cards from '../Components/Cards/Card'
import { Button, Spacer } from "@nextui-org/react";
import Carousel from '../Components/Carousel'
import NextLink from 'next/link'
import Courses from '../Components/Courses'
import { loadData } from '../lib/load_data'
import Skeleton from '@mui/material/Skeleton';

const inter = Inter({ subsets: ['latin'] })


export const getStaticProps = async () => {

  // const res = await fetch(`http://localhost:4000/booksApi/`);
  // const data = await res.json();
  const data = await loadData();

  return {
    props: {
      data,
    },
  };
};

export default function Home({ data }: any) {


  const [isLoading, setIsLoading] = useState<Boolean>(false);

  useEffect(() => {

    setIsLoading(true);

    setTimeout(() => {

      setIsLoading(false);

    }, 4000)

  }, [])




  return (
    <>


      <Carousel />


      <main className={styles.main}>



        <h2>Learning Online Becomes Easier</h2>
        <br />
        <br />
        <br />



        <Container maxWidth='md' sx={{ textAlign: "center" }}>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignContent: 'center',
              alignItems: 'center',
              p: 1,
              m: 1,
              borderRadius: 1,
            }}>
            <Grid container spacing={{ xs: 0, md: 0 }} rowGap={10} columnGap={12} justifyContent='center' alignItems="center" columns={{ xs: 1.5, sm: 2, md: 10, lg: 20 }} sx={{ flexDirection: { xs: "column", md: "row" } }}>

              <Grid item xs={0.5} sm={0.5} md={2} lg={4} style={{ cursor: 'pointer' }} className='fa-spin-hoverText' >
                <NextLink href='/books/business' style={{ textDecoration: "none", color: "#000" }}>

                  <div className={`fa-5x div-spin-hover ${styles.iconsPadding}`} style={{ background: 'rgb(255, 236, 239)' }} >

                    <FontAwesomeIcon style={{ cursor: 'pointer' }} className="small-icons fa-spin-hover fa-spin-hoverColor-star" icon={faStar} />

                  </div>

                  <Typography textAlign='center'
                    variant='h5'
                    style={{ color: "#ff4361" }}> Business & Management</Typography>
                </NextLink>

              </Grid>


              <Grid item xs={0.5} sm={0.5} md={2} lg={4} style={{ cursor: 'pointer' }} className='fa-spin-hoverText' >
                <NextLink href='/books/coding' style={{ textDecoration: "none", color: "#000" }}>

                  <div className={`fa-5x div-spin-hover ${styles.iconsPadding}`} style={{ background: 'rgb(244, 244, 255)' }} >

                    <FontAwesomeIcon style={{ cursor: 'pointer' }} className="small-icons fa-spin-hover fa-spin-hoverColor-code" icon={faFileCode} />

                  </div>

                  <Typography textAlign='center' variant='h5' style={{ color: '#5856d6' }}>Tech & Coding</Typography>
                </NextLink>
              </Grid>


              <Grid item xs={0.5} sm={0.5} md={2} lg={4} style={{ cursor: 'pointer' }} className='fa-spin-hoverText'>
                <NextLink href='/books/culture' style={{ textDecoration: "none", color: "#000" }}>

                  <div className={`fa-5x div-spin-hover ${styles.iconsPadding}`} style={{ background: 'rgb(255, 246, 211)' }}>

                    <FontAwesomeIcon style={{ cursor: 'pointer' }} className="small-icons fa-spin-hover fa-spin-hoverColor-lang" icon={faLanguage} />

                  </div>

                  <Typography textAlign='center' variant='h5' style={{ color: "#d6ab00" }}>Cultures & Languages</Typography>
                </NextLink>

              </Grid>

            </Grid>

          </Box>
          <br />
          <br />
          <br />
          <br />
        </Container>

        <Container maxWidth='lg' sx={{ textAlign: "center" }}>
          <Typography textAlign='center' variant='body1' fontWeight='bold'>MOST POPULAR COURSES</Typography>
          <br />

          <Typography textAlign='center' variant='h4' fontWeight='bold'>LEARN ANYTHING ONLINE</Typography>

          <br />
          <br />
          <br />

          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignContent: 'center',
              alignItems: 'center',
              p: 1,
              m: 1,
              borderRadius: 1,
            }}>
            <Grid container spacing={{ xs: 5, md: 12 }} justifyContent='center' alignItems="center" columns={{ xs: 1.5, sm: 1.2, md: 12 }} >

              {isLoading ?
                (
                  <>
                    <Grid item xs={1} md={4}>
                      <Skeleton variant="rectangular" width='100%' height={150} />
                      <Skeleton />
                      <Skeleton width="100%" />
                    </Grid>
                    <Grid item xs={1} md={4}>
                      <Skeleton variant="rectangular" width='100%' height={150} />
                      <Skeleton />
                      <Skeleton width="100%" />
                    </Grid>
                    <Grid item xs={1} md={4}>
                      <Skeleton variant="rectangular" width='100%' height={150} />
                      <Skeleton />
                      <Skeleton width="100%" />
                    </Grid>
                    <Grid item xs={1} md={4}>
                      <Skeleton variant="rectangular" width='100%' height={150} />
                      <Skeleton />
                      <Skeleton width="100%" />
                    </Grid>
                    <Grid item xs={1} md={4}>
                      <Skeleton variant="rectangular" width='100%' height={150} />
                      <Skeleton />
                      <Skeleton width="100%" />
                    </Grid>
                    <Grid item xs={1} md={4}>
                      <Skeleton variant="rectangular" width='100%' height={150} />
                      <Skeleton />
                      <Skeleton width="100%" />
                    </Grid>
                  </>
                )
                :
                (
                  <Cards data={data} />

                )
              }

            </Grid>

          </Box>

        </Container>
        <br />
        <br />
        <br />
        <NextLink href="/books" style={{ textDecoration: "none" }}>
          <Button shadow color="warning" auto ghost size='lg'>
            View All Books
          </Button>
        </NextLink>

        <Spacer y={4} />

        <Container maxWidth={false} style={{ background: "#fdefd8", color: "#b97509" }}>
          <Grid minHeight={550} container spacing={{ xs: 0, md: 0 }} rowGap={10} columnGap={12} justifyContent='center' alignItems="center" columns={{ xs: 1.5, sm: 4, md: 10, lg: 15 }} sx={{ flexDirection: { xs: "column", md: "row" } }}>
            <Courses />
          </Grid>
        </Container>
      </main>
      <Spacer y={5} />
    </>
  )
}
