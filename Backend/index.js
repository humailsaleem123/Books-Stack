const express = require("express");
const app = express();
const dotenv = require("dotenv");
const cors = require("cors");

dotenv.config({ path: './config.env' });

require('./db/connect');

app.use(cors());
app.use(express.json());
app.use(require('./router/routers'));

const Port = process.env.PORT;

app.listen(Port, () => console.log("server is running !!"));
