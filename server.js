// dependencies
const express = require("express");
const path = require("path");
const routes = require("./routes/apiRoutes.js");

var PORT = process.env.PORT || 3001;

//Use express
const app = express();

//Set up data parsing, and use middleware
app.use(express.urlencoded({ extended: true }));

app.use(express.json());

app.use(express.static("public"));

app.use(routes);

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "./public/index.html"));
});

app.get("/notes", (req, res) => {
  res.sendFile(path.join(__dirname, "./public/notes.html"));
});

//listener
app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT}`)
);