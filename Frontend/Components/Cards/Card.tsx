import React, { useEffect, useState } from "react";
import { Card, Col, Row, Button, Text, Spacer } from "@nextui-org/react";
import { Box, Container, Grid, Typography } from '@mui/material'
import axios from "axios";
import Link from "next/link";





function Cards({ data }: any) {

    const [curData, setData] = useState<any>(data);


    // useEffect(() => {

    //     axios.get("http://localhost:4000/booksApi").then((res) => {
    //         // console.log("res", res.data);
    //         setData(res.data);
    //     })
    // }, [])


    // data.sort((a: any, b: any) => a.book_name > b.book_name ? 1 : -1)



    return (
        <>

            {data.sort((a: any, b: any) => a.book_name > b.book_name ? 1 : -1).slice(0, 6).map((item: any) => {
                return (
                    <Grid key={item._id} item xs={1} sm={0.5} md={4}>
                        <Card css={{ w: "100%", h: "300px" }} isHoverable={true} isPressable={true}>
                            <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
                                <Col>
                                    {/* <Text size={12} weight="bold" transform="uppercase" color="#ffffffAA">
                                        New
                                    </Text> */}
                                    {/* <Text h3 color="black">
                                        {item.book_name}
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
                                    justifyItems: "center"
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
                        <Spacer y={1} />

                        <Typography variant="overline" fontSize={16}>  {item.book_name}</Typography>


                    </Grid >
                )
            })}


        </>
    );
}

export default Cards;
