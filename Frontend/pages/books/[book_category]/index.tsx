import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import BooksPage from "../../../Components/Books/BooksPage";
import { loadData } from "../../../lib/load_data";
import { getDynamicCategory } from '../../api/getDynamicCategory';
import axios from "axios";




export async function getStaticPaths() {

  // const res = await fetch('http://localhost:4000/booksApi')
  // const data = await res.json();

  const data = await loadData();

  // const res = await axios.get("http://localhost:4000/booksApi");
  // const data = res.data;

  console.log(data);


  const paths = data.map((item: any) => ({
    params: {
      book_category: item.book_category.toString(),
    },
  }));


  return {

    paths,
    fallback: false
  }
}


export const getStaticProps = async (context: any) => {

  const category = context.params.book_category;

  // const res = await axios.get(`http://localhost:4000/booksApi/${category}`);

  // const data = res.data;

  const data = await getDynamicCategory(`http://localhost:4000/booksApi/${category}`);

  return {
    props:
      { data },
    revalidate: 1,

  };

};


// export async function loadDynamicCategory(category: any) {

//   const res = await fetch(`http://localhost:4000/booksApi/${category}`);
//   const data = await res.json();

//   return data;
// }




function DynamicCategory({ data }: any) {

  // console.log("data", data);

  // const router = useRouter();

  // if (router.isFallback) {
  //   return <h1>Your page is being preapared</h1>
  // }

  return (

    <div>

      <BooksPage getData={data} />
    </div>
  );
}

export default DynamicCategory;
