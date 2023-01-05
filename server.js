// install:
// npm install express
// npm init -y
// npm uniqid

// Dependencies
import express from "express";
const path = require("path");

// Sets up the Express App
const app = express();
const PORT = process.env.PORT || 3001;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));

// parse application/json
app.use(express.json());

// Tells html page to start un public folder when looking for images, etc.
app.use(express.static(path.join(__dirname + "/Develop/public")));

// Routes: inclue routing files api-routes.js & html-routes.js in the server
// Always have the api-route before html-route because this data must display on to the html page
require("./Develop/routing/api-routing.js")(app);

require("./Develop/routing/html-routing.js")(app);

// Starts the server to begin listening
app.listen(PORT, () => {
  console.log("App listening on PORT: " + PORT);
});
