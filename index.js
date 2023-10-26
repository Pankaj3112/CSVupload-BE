const express = require("express");
const app = express();
const port = process.env.PORT || 8000;
const db = require("./config/mongoose");
const upload = require("express-fileupload");
const path = require("path");

const cors = require('cors');
app.use(cors({
    origin: 'http://localhost:5173/'
}));

//parser for form data
app.use(
  express.urlencoded({
    extended: true,
  })
);

//using express-fileupload
app.use(upload());

//routes
app.use("/", require("./routes"));

//fire up the server
app.listen(port, function (err) {
  if (err) {
    console.log(`Error in running the server: ${err}`);
  }
  console.log(`****Server fired up on port: ${port}****`);
});
