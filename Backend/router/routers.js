const express = require("express");
const router = express.Router();
const mongo = require("mongoose");


require('../db/connect');

const booksData = require('../Modal/Modal');

router.get('/booksApi', async (req, res) => {
  // res.send(`Hello World!!!`);

  const data = await booksData.find({});
  res.send(data);
  console.log(data);
});

router.get('/booksApi/:category', async (req, res) => {
  // res.send(`Hello World!!!`);

  let data;


  let category = req.params.category;
  console.log("category", category);
  if (category === 'all') {
    data = await booksData.find({});

  }
  else {
    data = await booksData.find({ book_category: category });

  }

  res.send(data);
  console.log(data);
});


router.get('/booksApi/id/:id', async (req, res) => {
  // res.send(`Hello World!!!`);

  let id = req.params.id;
  console.log("idid", id);
  const data = await booksData.find({ _id: id });
  res.send(data);
  console.log(data);
});



module.exports = router;