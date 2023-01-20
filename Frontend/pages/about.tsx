import React from 'react'
import AboutUs from '../Components/About/AboutUs'
import AboutCourses from '../Components/About/AboutCourses'
import AboutMe from '../Components/About/AboutMe'
import { Container, Grid } from '@mui/material'
import { Spacer } from '@nextui-org/react'

function about() {

  return (


    <div>

      <Spacer y={8} />

      <Container maxWidth='xl'>

        <Grid container spacing={{ xs: 0, md: 0 }} rowGap={10} columnGap={12} justifyContent='center' alignItems="center" columns={{ xs: 1.5, sm: 4, md: 10, lg: 15 }} sx={{ flexDirection: { xs: "column", md: "row" } }}>

          <AboutUs />

        </Grid>
      </Container>

      <Spacer y={5} />
      <Container maxWidth={false} style={{ background: "#fdefd8", color: "#b97509" }}>

        <Grid minHeight={550} container spacing={{ xs: 0, md: 0 }} rowGap={10} columnGap={12} justifyContent='center' alignItems="center" columns={{ xs: 1.5, sm: 4, md: 10, lg: 15 }} sx={{ flexDirection: { xs: "column", md: "row" } }}>

          <AboutCourses />



        </Grid>

      </Container>
      <Spacer y={2} />


      <Container maxWidth='xl'>
        <Grid minHeight={550} container spacing={{ xs: 0, md: 0 }} rowGap={10} columnGap={12} justifyContent='center' alignItems="center" columns={{ xs: 1.5, sm: 4, md: 10, lg: 15 }} sx={{ flexDirection: { xs: "column", md: "row" } }}>

          <AboutMe />

        </Grid>

      </Container>

      <Spacer y={2} />

    </div>


  )
}

export default about