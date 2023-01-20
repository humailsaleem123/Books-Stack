import React from 'react'
import { Grid, Typography, Paper } from '@mui/material'
import { Button, Spacer } from '@nextui-org/react'
import Image from 'next/image'
import image from '../Images/image.jpg';
import humailPic from '../Images/humail.jpg';
import NextLink from 'next/link';
import { Link } from "@nextui-org/react";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { GitHub } from '@mui/icons-material';
import { Avatar } from "@nextui-org/react";
import { makeStyles } from '@mui/styles';
import { SvgIcon } from '@mui/material';

// const useStyles = makeStyles((theme: any) => ({

//   imgSize: {
//     // marginBottom: "16px",
//     width: "300px !important",
//     height: "400px !important",
//     [theme.breakpoints.down("md")]: {
//       width: "300px !important",
//       height: "350px !important",
//     },
//     [theme.breakpoints.down("sm")]: {
//       width: "200px !important",
//       height: "250px !important",
//     },
//     [theme.breakpoints.down("xs")]: {
//       width: "200px !important",
//       height: "400px !important",
//     },
//   },

// }))


function AboutMe() {

  // const classes = useStyles();


  return (


    <>

      <Grid item xs={2} sm={4} md={6} lg={6}>

        <Paper elevation={12} style={{ padding: '30px', background: "#fdefd8" }}>

          <div style={{ border: "1px solid rgb(32, 33, 36, 0.1)", padding: '20px', color: "#b97509" }}>

            <Typography variant='h5'>ABOUT ME</Typography>

            <Spacer y={2} />

            <Typography lineHeight='2.5' variant='body1'>Hello there, My name is Muhammad Humail Saleem, I&apos;m currently studying as a Software Engineer, I am Mid-level Web developer able to build a Single Web Application, Fast learner, hard worker and I have excellent design & coding skills, as well as an ability to convert requirements into exciting online applications.</Typography>
            <Spacer y={1} />

            <div className='nav'>
              <Link as={NextLink} block color="warning" href="https://www.linkedin.com/in/humail-saleem/"
                target='_blank'
                css={{
                  color: '#b97509',
                  '&:hover': {
                    // background: "#f5a524",
                    color: "#f5a524"
                  }
                }}
              >
                <LinkedInIcon />
              </Link>
              <Link as={NextLink} block color="warning" href="https://github.com/humailsaleem123"
                target='_blank'
                css={{
                  color: '#b97509',
                  '&:hover': {
                    // background: "#f5a524",
                    color: "#f5a524"
                  }
                }}
              >
                <GitHub />
              </Link>
              <Link as={NextLink} block color="warning" href="https://stackoverflow.com/users/19606711/humail-saleem?tab=profile"
                target='_blank'
                css={{
                  color: '#b97509',
                  '&:hover': {
                    // background: "#f5a524",
                    color: "#f5a524"
                  }
                }}
              >
                {/* <GitHub /> */}

                <SvgIcon fontSize="small">
                  <path d="M15 21h-10v-2h10v2zm6-11.665l-1.621-9.335-1.993.346 1.62 9.335 1.994-.346zm-5.964 6.937l-9.746-.975-.186 2.016 9.755.879.177-1.92zm.538-2.587l-9.276-2.608-.526 1.954 9.306 2.5.496-1.846zm1.204-2.413l-8.297-4.864-1.029 1.743 8.298 4.865 1.028-1.744zm1.866-1.467l-5.339-7.829-1.672 1.14 5.339 7.829 1.672-1.14zm-2.644 4.195v8h-12v-8h-2v10h16v-10h-2z" />
                </SvgIcon>

              </Link>


            </div>
            <Spacer y={1} />
            <Grid item xs={1} sm={4} md={4}>
              <NextLink href='https://humailsaleem-portfolio123.web.app/' style={{ textDecoration: "none" }} target='_blank'>
                <Button shadow size='sm' color='warning' auto ghost >View My Profile</Button>
              </NextLink>
            </Grid>
          </div>
        </Paper>

      </Grid>

      <Grid item xs={1} sm={4} md={3} lg={4}>

        {/* <Image
          src={humailPic}
          height='400'
          width='300'
          alt='pic'

        /> */}
        <Avatar
          squared
          zoomed
          src={humailPic.src}
          color="warning"
          bordered
          size='xl'
          // className={classes.imgSize}
          style={{ borderRadius: "0" }}

          css={{
            width: '200px',
            height: '250px',
            '@xs': {
              width: '250px !important',
              height: '300px !important'
            },
            '@sm': {
              width: '280px !important',
              height: '300px !important'
            },
            '@md': {
              width: '300px',
              height: '400px'
            }
          }}

          alt='pic'
        />


      </Grid>

    </>
  )
}

export default AboutMe