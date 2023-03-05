// dependencies
const express = require("express");
const path = require("path");

var PORT = process.env.PORT || 3001;

//Use express
const app = express();

//Set up data parsing, and use middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join("public")));



require ("./routes/apiRoutes")(app);

require ("./routes/htmlRoutes")(app);

//listener
app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT}`)
);