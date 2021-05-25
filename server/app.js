//this file is the entry point
//app.js

const express = require("express");
const connectDB = require("./config/db");
const app = express();

connectDB();

app.get("/", (req, res) => res.send("hello world"));

const port = process.env.PORT || 8001;

app.listen(port, () => console.log(`server running on port ${port}`));
