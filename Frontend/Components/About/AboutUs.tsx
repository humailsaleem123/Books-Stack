import React from 'react'
import { Grid, Typography } from '@mui/material';
import Image from 'next/image';
import About1 from '../Images/about1.jpg';
import { Spacer } from '@nextui-org/react';

function AboutUs() {

  return (

    <>

      <Grid item xs={2} sm={4} md={5}>

        <Typography variant='h4' style={{ fontFamily: 'Poppins-Medium' }}>Learn Anything Online</Typography>

        <Spacer y={2} />
        <Typography variant='body1' lineHeight='2.5' style={{ fontFamily: 'Poppins-Medium' }}>
          The course is aimed at anyone who wants to create websites on their own, and possibly work as a freelancer or employee in the field of web design and development. We cover everything, so even if you&apos;ve never seen HTML code in your life, you&apos;ll be able to quickly jump in.
        </Typography>


      </Grid>

      <Grid item xs={1} sm={4} md={5}>

        <Image
          src={About1}
          width='700'
          height='500'
          alt='about'
          priority={true}
          style={{ width: 'auto', height: 'auto' }}
        />

      </Grid>

    </>
  )
}

export default AboutUs;