const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3000;

const app = express();

app.use(logger(":method :status :date")); //Middleware used to log in the consol
//Example of log by morgan: GET 304 Mon, 05 Jul 2021 18:46:24 GMT 

// Start the server
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

/* app.use(express.static("public")); */

app.listen(PORT, () => {
  console.log(`WORKOUT TRACKER is running on port => ${PORT}!`);
});
