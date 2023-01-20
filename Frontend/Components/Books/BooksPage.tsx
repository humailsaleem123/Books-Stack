import { Container } from "@mui/material";
import React from "react";
import BookCards from "./BookCards";

function BooksPage({ getData }: any) {
  return (

    <div>
      <BookCards getData={getData} />
    </div>

  );
}

export default BooksPage;
