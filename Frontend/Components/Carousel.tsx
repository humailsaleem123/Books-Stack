import React from "react";
import { CCarouselItem } from '@coreui/react'
import { CCarouselCaption } from '@coreui/react'
import { CCarousel } from '@coreui/react'
import { CImage } from '@coreui/react'
import navStyles from '../styles/navbar.module.css';
import Slider1 from './Images/Slider1.png';
import Slider2 from './Images/Slider2.jpg';
import Slider3 from './Images/Slider3.jpg'
import { Typography } from "@mui/material";
import { Button } from "@nextui-org/react";

function Carousel() {

    return (

        <CCarousel controls indicators interval={5000}>
            <CCarouselItem>
                <CImage className={`d-block w-100 , ${navStyles.sliderImg}`} src={Slider1.src} alt="slide 1" />
                <CCarouselCaption className="d-none d-md-block" style={{ color: "#FFF" }}>
                    {/* <Button shadow color="warning" auto ghost size='lg'>Business & Management</Button> */}
                    <Typography variant="overline" style={{ fontSize: "20px" }}>Business & Management</Typography>
                    {/* <p>Some representative placeholder content for the first slide.</p> */}
                </CCarouselCaption>
            </CCarouselItem>
            <CCarouselItem>
                <CImage className={`d-block w-100 , ${navStyles.sliderImg}`} src={Slider2.src} alt="slide 2" />
                <CCarouselCaption className="d-none d-md-block" style={{ color: "#FFF" }}>
                    <Typography variant="overline" style={{ fontSize: "20px" }}>Tech & Coding</Typography>
                    {/* <p>Here are the Some Books Related To Programming Languages</p> */}
                </CCarouselCaption>
            </CCarouselItem>
            <CCarouselItem>
                <CImage style={{ opacity: "0.5" }} className={`d-block w-100 , ${navStyles.sliderImg}`} src={Slider3.src} alt="slide 3" />
                <CCarouselCaption className="d-none d-md-block" style={{ color: "#000" }}>
                    <Typography variant="overline" style={{ fontSize: "20px" }}>Culture & Languages</Typography>
                    {/* <p>Some representative placeholder content for the first slide.</p> */}
                </CCarouselCaption>
            </CCarouselItem>
        </CCarousel>

    );
}

export default Carousel;
