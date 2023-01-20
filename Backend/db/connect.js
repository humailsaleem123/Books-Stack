const mongo = require("mongoose");

const DB = process.env.DATABASE;

mongo.set({ "strictQuery": false });
mongo.connect(DB).then(() => {
  console.log("Connected To MONGO DB !!!");

}).catch((err) => {
  console.log("showing Errors", err);
})

