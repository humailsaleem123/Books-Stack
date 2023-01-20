import React, { useState, useEffect } from "react";
import booksStyles from '../../styles/books.module.scss';
// import { CalendarMonth } from "@mui/icons-material";
import { faCalendarAlt, faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Input, Spacer, styled } from "@nextui-org/react";
import { Container, Grid, Box, Typography } from "@mui/material";
import Link from "next/link";
import axios from "axios";
import Image from "next/image";
import { useRouter } from "next/router";
import { Badge } from "@nextui-org/react";
import Chip from '@mui/material/Chip';
import ReactPaginate from "react-paginate";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import Skeleton from '@mui/material/Skeleton';



const StyledInput = styled(Input, {
    boxShadow: "$custom",
    borderRadius: "$custom",
    // border: "1px solid #9d9d9d",
    "& > .nextui-input-wrapper": {
        borderRadius: "$custom",
        // '&::focus': {
        //     background: '$black',
        // },
        // '&:hover': {
        //     background: '$pink100',
        //     color: '$pink800',
        // },
    },


});



function BookCards({ getData }: any) {

    // axios.get('http://localhost:4000/booksApi').then((res) => {
    //     console.log("resres", res.data);
    // })

    const router = useRouter();


    const product = router.query.book_category;

    const [getSearch, setGetSearch] = useState<any>(getData);

    const [isLoading, setIsLoading] = useState<Boolean>(false);


    const handleChange = (event: any) => {



        console.log("getSearch", event.target.value);

        let updatedList = [...getData];



        updatedList = updatedList.filter((curElem: any) => {
            return curElem.book_name.toLowerCase().indexOf(event.target.value.toLowerCase()) !== -1;
        });

        setGetSearch(updatedList);

    }


    const [itemOffSet, setItemOffSet] = useState<number>(0);

    const endOffSet = itemOffSet + 5;

    const currentItems = getSearch.slice(itemOffSet, endOffSet);

    const pageCount = Math.ceil(getSearch.length / 5);

    console.log("currentItems", currentItems);
    console.log("itemOffSet", itemOffSet);

    const handlePageClick = (event: any) => {
        const newOffset = (event.selected * 5) % getSearch.length;
        console.log(
            `User requested page number ${event.selected}, which is offset ${newOffset}`
        );
        setItemOffSet(newOffset);
    };

    useEffect(() => {

        setIsLoading(true);


        setTimeout(() => {
            setIsLoading(false);
        }, 2000)

    }, [])



    return (
        <section className={booksStyles['light']}>

            <div className={`container py-2`} >
                <div className={`${booksStyles['h1']} text-center text-dark`} id={booksStyles['pageHeaderTitle']}>View Books</div>

                <Grid container padding='30px' rowGap={2} sx={{
                    flexDirection: { xs: "column", sm: "row", md: "row" },
                    alignContent: { xs: 'center', sm: 'center', md: 'center' },
                    justifyContent: { xs: 'center', sm: 'center', md: 'space-between' }


                }} >

                    <Grid item xs={7} md={4} lg={3} textAlign='center'>


                        <Typography variant="overline" style={{ fontSize: "15px" }}>Courses / {(product === undefined ? 'All' : product)}</Typography>

                    </Grid>

                    <Grid item xs={8} sm={6} md={4} lg={3}>

                        <StyledInput
                            aria-label="Search Books:"
                            onChange={(e) => handleChange(e)}
                            // label="Search Books:"
                            type="search"
                            size="md"
                            placeholder="Search Books"
                            color="warning"
                            fullWidth
                            shadow={true}
                            status="default"
                            bordered
                            contentRight={
                                <FontAwesomeIcon icon={faSearch} />
                            }
                            // clearable
                            // borderWeight="bold"
                            // style={{ border: "2px solid #000 !important" }}
                            css={{
                                marginBottom: "20px",
                                // $$border: "2px solid #000"
                                $$inputColor: "#FFF",

                            }}
                        />

                    </Grid>
                </Grid>

                {isLoading ?
                    (
                        <>
                            <Skeleton variant="rectangular" width='100%' height={150} />
                            <Skeleton />
                            <Skeleton width="100%" />
                            <Spacer y={1} />
                            <Skeleton variant="rectangular" width='100%' height={150} />
                            <Skeleton />
                            <Skeleton width="100%" />
                            <Spacer y={1} />
                            <Skeleton variant="rectangular" width='100%' height={150} />
                            <Skeleton />
                            <Skeleton width="100%" />
                        </>
                    )
                    :
                    (
                        <>
                            {currentItems.map((item: any) => {
                                return (
                                    <>
                                        <article key={item._id} className={`${booksStyles['postcard']} ${booksStyles['light']} ${booksStyles['yellow']}`}>
                                            <a className={booksStyles['postcard__img_link']}>
                                                <Image
                                                    className={booksStyles['postcard__img']}
                                                    src={item.book_img}
                                                    alt={item.book_name}
                                                    width={300}
                                                    height={350}
                                                    priority={true}
                                                />
                                                {/* <img className={booksStyles['postcard__img']} src={item.book_img} alt={item.book_name} /> */}
                                            </a>
                                            <div className={`${booksStyles['postcard__text']} ${booksStyles['t-dark']}`}>
                                                <h1 className={`${booksStyles['postcard__title']} ${booksStyles['red']}`}><a href="#" style={{ textDecoration: "none" }}>{item.book_name}</a></h1>
                                                <div className={`postcard__subtitle ${booksStyles['small']}`}>
                                                    {/* datetime="2020-05-25 12:00:00" */}

                                                    <time >
                                                        <FontAwesomeIcon style={{ marginRight: '4px' }} icon={faCalendarAlt} />
                                                        Mon, May 25th 2020
                                                    </time>
                                                </div>
                                                <div className={booksStyles['postcard__bar']}></div>
                                                <div className={booksStyles['postcard__preview-txt']}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, fugiat asperiores inventore beatae accusamus odit minima enim, commodi quia, doloribus eius! Ducimus</div>
                                                <ul className={booksStyles['postcard__tagbox']}>

                                                    <Badge disableOutline color="warning" size="lg" style={{ textTransform: "capitalize" }}>
                                                        {item.book_category}
                                                    </Badge>
                                                    <Spacer x={1} />


                                                    <Link href={`/books/${item.book_category}/${item._id}`} style={{ textDecoration: "none" }}>
                                                        <Badge variant="bordered" enableShadow disableOutline color="warning" size="lg" style={{ textTransform: "capitalize" }}

                                                            css={{
                                                                '&:hover': {
                                                                    background: "#f5a524",
                                                                    color: "#FFF"
                                                                }
                                                            }}

                                                        >
                                                            view more
                                                        </Badge>
                                                    </Link>

                                                </ul>
                                            </div>
                                        </article>


                                    </>
                                )

                            })}

                            <Grid container justifyContent='center'>

                                <ReactPaginate
                                    activeClassName={'item active-Items '}
                                    breakClassName={'item break-me '}
                                    containerClassName={'pagination'}
                                    disabledClassName={'disabled-page'}
                                    marginPagesDisplayed={2}
                                    nextClassName={"item next "}
                                    previousClassName={"item previous"}
                                    nextLabel={<ArrowForwardIos style={{ color: '#b97509', fontSize: 18, width: 40 }} />}
                                    breakLabel='hello'
                                    pageClassName={'item pagination-page '}
                                    onPageChange={handlePageClick}
                                    pageRangeDisplayed={5}
                                    pageCount={pageCount}
                                    previousLabel={<ArrowBackIos style={{ color: '#b97509', fontSize: 18, width: 40 }} />}


                                />

                            </Grid>
                        </>
                    )
                }




                {/* <Pagination color="secondary" count={pageCount} onChange={(e, value) => handlePageClick(value)} /> */}



            </div >
        </section >
    );
}



export default BookCards;
