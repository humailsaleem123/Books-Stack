import React from 'react'
import { Grid, Typography } from '@mui/material'
import Image from 'next/image'
import courses from '../Images/courses.png';
import { Button, Spacer } from '@nextui-org/react';
import Link from 'next/link';

function AboutCourses() {
  return (

    <>
      <Grid item xs={1} sm={2} md={4}>


        <Image
          src={courses}
          alt='courses'
          height='500'
          width='500'
          style={{ width: 'auto', height: 'auto' }}
          priority={true}

        />

      </Grid>

      <Grid item xs={1} sm={4} md={4}>

        <Typography variant='h4' lineHeight='2'>TAKE THE WORLD&apos;S BEST COURSES LEARN WITH US</Typography>


        <Spacer y={2} />
        <Typography variant='body1' lineHeight='2.5'>You can trust us for any kind of services and some of the world class companies have also trusted us.So have faith and keep in touch with us .</Typography>
        <Spacer y={1} />

        <Button as={Link}
          css={{
            width: 150,
            '&:hover': {
              color: "#fff"
            }
          }}
          href='/books' style={{ textDecoration: "none" }}
          shadow color='warning' auto ghost size='md'>
          View All Courses
        </Button>
        <Spacer y={1} />
      </Grid>

    </>

  )
}

export default AboutCourses