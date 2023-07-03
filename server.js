const express = require("express");
const app = express();
const path = require('path');

// view engine setup
app.set('views', path.join(__dirname, 'views'));

app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/about", (req, res) => {
  res.render("about");
});

app.get("/services", (req, res) => {
  res.render("services");
});

app.get("/projects", (req, res) => {
  res.render("projects");
});


const contactRouter = require("./routes/contact");

app.use("/contact", contactRouter);

// app.use("/users", userRouter);

app.listen(3000);
