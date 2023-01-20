import React, { useState, useEffect, useContext } from "react";
import { CImage } from "@coreui/react";
import { Container, Typography, Grid, Box } from "@mui/material";
import demoImg from '../Images/image.jpg';
import { Button, Spacer } from "@nextui-org/react";
import CardSlider from "./CardSlider";
import ReactSlider from "./ReactSlider";
import Link from "next/link";
import Image from "next/image";
import { UserInfoContext } from "../Context/UserInfoContext";



function ProductDetail({ data, allData }: any) {

    const valueInfo = useContext(UserInfoContext);


    const [user, getUser] = useState<string | null>(null);


    useEffect(() => {

        getUser(sessionStorage.getItem("user"));
        valueInfo.setUserInfo({
            bookId: data[0]._id,
            bookName: data[0].book_name,
            bookDownload: data[0].book_download,

        });



    }, [valueInfo.userInfo, data])



    return (

        <>


            <Container maxWidth='lg' style={{ marginTop: "10rem" }}>

                <Grid container spacing={{ xs: 5, md: 12 }} columnGap={0} alignItems="center" columns={{ xs: 1.5, sm: 0, md: 12 }} sx={{ flexDirection: { xs: "column", md: "row" } }}>

                    <Grid item xs={2} md={6}>
                        <Image
                            style={{
                                width: 'auto',
                                height: 'auto'
                            }}
                            src={data[0].book_img}
                            alt={data[0].book_name}
                            width={600}
                            height={600}
                            // loading="eager"
                            priority={true}

                        />
                        {/* <CImage rounded thumbnail fluid src={data[0].book_img} width={600} height={900} /> */}
                    </Grid>
                    <Grid item xs={2} md={6}>
                        <Typography variant="overline" style={{ fontSize: "30px", fontWeight: "bold" }}>{data[0].book_name}</Typography><br />
                        <Typography variant="overline">{data[0].book_desc}</Typography>
                        <br />
                        <br />
                        <Box
                        // sx={{
                        //     display: 'flex',
                        //     alignContent: 'center',
                        //     alignItems: 'center',
                        //     p: 1,
                        //     m: 1,
                        //     borderRadius: 1,
                        //     flexDirection: { xs: "column", md: "row" }
                        // }}
                        >
                            {/* <Link href={data[0].book_download} style={{ textDecoration: "none" }} download> <Button shadow color='warning' auto ghost size='md'>View Book</Button>
                            </Link> */}
                            <Spacer y={1} x={2} />

                            <Button onPress={valueInfo.bookDownload} shadow color='warning' auto ghost size='md'>Download Book</Button>

                        </Box>
                    </Grid>

                </Grid>
            </Container>
            <Spacer y={5} />
            <Container maxWidth={false} style={{ backgroundColor: "#f0f8ff", padding: "40px" }}>

                <Container maxWidth='lg'>

                    <Typography variant="overline" style={{ fontSize: "25px", fontWeight: "bold" }}>Related Books</Typography>

                    {/* <Grid container spacing={{ xs: 5, md: 7 }} alignItems="center" columns={{ xs: 1.5, sm: 2, md: 12 }} sx={{ flexDirection: { xs: "column", sm: "row", md: "row" } }}>

                        <Grid item xs={1} md={3}>
                            <CardSlider />
                        </Grid>
                        <Grid item xs={1} md={3}>
                            <CardSlider />
                        </Grid>
                        <Grid item xs={1} md={3}>
                            <CardSlider />
                        </Grid>
                        <Grid item xs={1} md={3}>
                            <CardSlider />
                        </Grid>
               

                    </Grid> */}

                    <Spacer y={1} />
                    <ReactSlider data={data} allData={allData} />
                </Container>

            </Container>


        </>
    );
}

export default ProductDetail;
