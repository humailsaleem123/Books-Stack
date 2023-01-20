import axios from "axios";

export async function getDynamicId(url) {

  // const res = await fetch(url);
  const res = await axios.get(url);

  const getDynamicId = await res.data;

  return getDynamicId;

}