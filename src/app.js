const express = require("express");
const path = require("path");

const port = process.env.PORT || 8000;
const app = express();

const publicPath = path.join(__dirname, "../public");
console.log(publicPath);

app.use(express.static(publicPath));

//? Routing
app.get("/", (req, res) => {
  res.send("Welcome to homepage");
});

app.get("/about", (req, res) => {
  res.send("Welcome to about");
});

app.get("/weather", (req, res) => {
  res.send("Welcome to weather");
});

app.get("*", (req, res) => {
  res.send("404 Not Found");
});

app.listen(port, (err) => {
  if (err) console.log("Ooops something went wrong with connection");
  else console.log(`Listening to port ${port}`);
});
