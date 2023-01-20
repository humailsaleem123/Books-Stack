import { useRouter } from 'next/router';
import React from 'react'
import ProductDetail from "../../../../Components/ProductDetail/ProductDetail";
import { loadData } from '../../../../lib/load_data';
import { getDynamicId } from '../../../api/getDynamicId';

export async function getStaticPaths() {


  // const res = await fetch("http://localhost:4000/booksApi");
  // const data = await res.json();
  const data = await loadData();



  const paths = data.map((item: any) => ({

    params: {
      _id: item._id.toString(),
      book_category: item.book_category.toString()

    }

  }));

  return {

    paths,
    fallback: false
  }

}

export const getStaticProps = async (context: any) => {

  const id = context.params._id;

  const data = await getDynamicId(`http://localhost:4000/booksApi/id/${id}`);

  const allData = await loadData();


  return {
    props:
      { data, allData },
    revalidate: 1
  };
};

// export async function loadDynamicID(id: any) {


//   const res = await fetch(`http://localhost:4000/booksApi/id/${id}`);
//   const data = await res.json();


//   return data;

// }


function DynamicID({ data, allData }: any) {


  // const router = useRouter();

  // if (router.isFallback) {
  //   return <h1>Your page is being preapared</h1>
  // }


  return (
    <ProductDetail data={data} allData={allData} />
  )
}

export default DynamicID