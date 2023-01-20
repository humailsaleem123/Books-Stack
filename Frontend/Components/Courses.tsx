import React from 'react'
import { Grid, Typography } from '@mui/material'
import Image from 'next/image'
import courses from './Images/courses.png';
import { Button, Spacer } from '@nextui-org/react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useAlert } from 'react-alert';

function Courses() {

  const router = useRouter();
  const alertShow = useAlert();


  const triggerBtn = () => {

    const chkUser = JSON.parse(sessionStorage.getItem('userInfo') as any);

    if (chkUser !== null) {
      return alertShow.show("User Already Login !!!");
    }
    else {
      router.push('/register');
    }

  }


  return (

    <>
      <Grid item xs={1} sm={2} md={6} lg={4}>


        <Image
          src={courses}
          alt='courses'
          height='500'
          width='500'
          style={{ width: 'auto', height: 'auto' }}

        />

      </Grid>

      <Grid item xs={2} sm={4} md={6} lg={4}>

        <Typography variant='h4' style={{ lineHeight: '2.5' }} >Developer for Beginners to Advanced Training</Typography>


        <Spacer y={2} />
        <Typography variant='body1' style={{ lineHeight: 2.5 }}>You can trust us for any kind of services and some of the world class companies have also trusted us. So have faith and keep in touch with us .</Typography>
        <Spacer y={1} />

        <Button
          css={{
            width: 150,
            '&:hover': {
              color: "#fff"
            }
          }}
          onPress={triggerBtn}
          style={{ textDecoration: "none" }}
          shadow color='warning' auto ghost size='md'>
          Register Now
        </Button>
        <Spacer y={1} />
      </Grid>

    </>

  )
}

export default Courses