import axios from "axios";


export async function getDynamicCategory(url) {


  const res = await axios.get(url);


  const getCategory = await res.data;


  return getCategory;



}