import React from "react";
import BooksPage from "../../Components/Books/BooksPage";
import { loadData } from '../../lib/load_data';


export const getStaticProps = async () => {

  // const res = await fetch(`http://localhost:4000/booksApi/`);
  // const data = await res.json();
  const data = await loadData();

  return {
    props: {
      data,
    },
  };
};

function productList({ data }: any) {


  if (!data) {
    return <p>loading…</p>
  }


  return (

    <div>

      <BooksPage getData={data} />
    </div>
  );
}

export default productList;
