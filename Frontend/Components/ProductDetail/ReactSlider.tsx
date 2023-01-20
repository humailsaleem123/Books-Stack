import React, { useEffect, useState } from "react";
import Slider from 'react-slick';
import CardSlider from "./CardSlider";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import axios from "axios";
import { Card, Col, Row, Button, Text, Spacer } from "@nextui-org/react";
import Link from "next/link";
import { Typography } from "@mui/material";


const PreviousBtn = (props: any) => {
    // console.log(props);
    const { className, style, onClick } = props;
    return (
        <div className={className} onClick={onClick} style={{ ...style, cursor: "pointer" }}>
            <ArrowBackIos style={{ color: "#f5a524", fontSize: "30px" }} />
        </div>
    );
};
const NextBtn = (props: any) => {
    const { className, style, onClick } = props;
    return (
        <div className={className} onClick={onClick} style={{ ...style, cursor: "pointer" }}>
            <ArrowForwardIos style={{ color: "#f5a524", fontSize: "30px" }} />
        </div>
    );
};
function ReactSlider({ data, allData }: any) {


    const settings = {
        // dots: true,
        infinite: true,
        speed: 500,
        className: "center",
        slidesToShow: 3,
        // centerMode: true,
        // centerPadding: '60px',
        prevArrow: (
            <PreviousBtn />
        ),
        nextArrow: (
            <NextBtn />
        ),
        slidesToScroll: 3,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 3,
                    centerPadding: '40px',
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    centerPadding: '40px',
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },


        ]

    };

    let arryData: Array<any> = [];

    const [bookData, setBookData] = useState<any>([]);

    useEffect(() => {

        const getData = async () => {

            // axios.get("http://localhost:4000/booksApi").then((res) => {

            // const dataa = res.data.filter((item: any) => {
            //     return item._id !== data[0]._id
            // })
            allData.splice(
                allData.findIndex((item: any) => item._id === data[0]._id),
                1);

            // console.log("dataa", res.data);

            const arry = allData.filter((curElem: any) => {
                return curElem.book_category === data[0].book_category
            });


            setBookData(arry);
            // });
        }

        getData();




    }, [data])




    return (



        <Slider  {...settings} lazyLoad="ondemand" >

            {bookData.map((item: any) => {
                return (
                    <div className="txt-center" key={item._id} >
                        <Card css={{ w: "100%", h: "300px" }} isHoverable={true} isPressable={true}>
                            <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
                                <Col>
                                    {/* <Text size={12} weight="bold" transform="uppercase" color="#ffffffAA">
                                        New
                                    </Text> */}
                                </Col>
                            </Card.Header>
                            <Card.Body css={{ p: 0 }}>
                                <Card.Image
                                    src={item.book_img}
                                    width="100%"
                                    height="100%"
                                    objectFit="cover"
                                    alt="Card example background"
                                />
                            </Card.Body>
                            <Card.Footer
                                isBlurred
                                css={{
                                    position: "absolute",
                                    bgBlur: "#ffffff66",
                                    borderTop: "$borderWeights$light solid rgba(255, 255, 255, 0.2)",
                                    bottom: 0,
                                    zIndex: 1,
                                }}
                            >
                                <Row>
                                    <Text color="#000" size={12} >
                                        <Spacer y={2} />

                                    </Text>
                                    <Col>
                                        <Row css={{ justifyContent: "center" }}>
                                            <Link href={`/books/${item.book_category}/${item._id}`} style={{ textDecoration: "none" }}>
                                                <Button flat auto rounded color="warning">
                                                    <Text
                                                        css={{ color: "inherit" }}
                                                        size={12}
                                                        weight="bold"
                                                        transform="uppercase"
                                                    >
                                                        Read More
                                                    </Text>
                                                </Button>
                                            </Link>
                                        </Row>
                                    </Col>
                                </Row>
                            </Card.Footer>

                        </Card>
                        <Typography variant="overline">  {item.book_name}</Typography>
                    </div>

                )
            })}


        </Slider>
    );
}

export default ReactSlider;
