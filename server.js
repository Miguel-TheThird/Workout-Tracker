const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const providedData = require("./seeders/seed.js");
var path = require("path");

const PORT = process.env.PORT || 3000;

const db = require("./models");

const app = express();

app.use(logger(":method :status :date")); //Middleware used to log in the consol
//Example of log by morgan: GET 304 Mon, 05 Jul 2021 18:46:24 GMT 

// Start the server
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public")); 

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", 
{ 
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false 
});

db.Workout.create({})
.then(dbData =>{
  console.log("Data Base was created! " + dbData);
})
.catch(({ message }) => {
  console.log("Data base has already been creatd " + message);
}); 


//Home
app.get('/', function (req, res) {    
  res.sendFile(path.join(__dirname, './public/index.html'));
  
 
})

//Dashbord 
app.get('/stats', function (req, res) {
  res.sendFile(path.join(__dirname, "./public/stats.html"));
});

//Exercise
app.get('/exercise', function (req, res) {
  res.sendFile(path.join(__dirname, "./public/exercise.html"));
});

/* db.Workout.create({})
.then(dbData =>{
  console.log("Data Base was created! " + dbData);
})
.catch(({ message }) => {
  console.log("Data base has already been creatd " + message);
}); */



app.listen(PORT, () => {
  console.log(`WORKOUT TRACKER is running on port => ${PORT}!`);
});
