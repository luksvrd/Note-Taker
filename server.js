// install:
// npm install express
// npm init -y
// npm i uuid

// Dependencies
// Routes: inclue routing files api-routes.js & html-routes.js in the server
// Always have the api-route before html-route because this data must display on to the html page
const express = require("express");
const path = require("path");
const api = require("./routing/api-routing.js");
const htmlRoutes = require("./routing/html-routing.js");

const PORT = process.env.PORT || 3001;

const app = express();

// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api", api);
app.use("/", htmlRoutes);

app.use(express.static("public"));

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);
