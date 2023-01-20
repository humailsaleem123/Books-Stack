import axios from "axios";


export async function loadData() {

  // const res = await fetch("http://localhost:4000/booksApi");
  // const data = await res.json();

  const res = await axios.get("http://localhost:4000/booksApi");

  const data = await res.data;

  return data;
}