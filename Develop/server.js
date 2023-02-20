// Import express module
const express = require('express');

// Import apiRoutes module from the routes folder
const apiRoutes = require('./routes/apiRoutes');

// Import htmlRoutes module from the routes folder
const htmlRoutes = require('./routes/htmlRoutes');

// Create an instance of the express application
const app = express();

const PORT = process.env.PORT || 3000;

// Tells the app to use the public folder as a static folder
app.use(express.static('public'));

// Set up the app to use the imported apiRoutes module for requests made to the "/api" endpoint
app.use('/api', apiRoutes);

// Set up the app to use the imported htmlRoutes module for requests made to the root endpoint "/"
app.use('/', htmlRoutes);

// Start the server on the defined PORT and log a message to the console to inform user
app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT}`)
);