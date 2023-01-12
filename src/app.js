const express = require("express");
const path = require("path");
const hbs = require('hbs');
const port = process.env.PORT || 8000;
const app = express();

const publicPath = path.join(__dirname, "../public");
const tempPath = path.join(__dirname, "../templates/views");
const partials_path = path.join(__dirname, "../templates/partials");
console.log(publicPath);

app.set('views', tempPath);
app.set("view engine", "hbs");
hbs.registerPartials(partials_path)

app.use(express.static(publicPath));

//? Routing
app.get("", (req, res) => {
  res.render("index");
});

app.get("/about", (req, res) => {
  res.render("about");
});

app.get("/weather", (req, res) => {
  res.render("weather");
});

app.get("*", (req, res) => {
  res.render("404");
});

app.listen(port, (err) => {
  if (err) console.log("Ooops something went wrong with connection");
  else console.log(`Listening to port ${port}`);
});
