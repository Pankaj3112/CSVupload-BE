const express = require("express");
const app = express();
const port = process.env.PORT || 8000;
const db = require("./config/mongoose");
const upload = require("express-fileupload");
const path = require("path");

//parser for form data
app.use(
  express.urlencoded({
    extended: true,
  })
);

//using express-fileupload
app.use(upload());

// Allow all origins
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});

//routes
app.use("/", require("./routes"));

//fire up the server
app.listen(port, function (err) {
  if (err) {
    console.log(`Error in running the server: ${err}`);
  }
  console.log(`****Server fired up on port: ${port}****`);
});
