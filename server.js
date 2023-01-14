// install:
// npm install express
// npm init -y
// npm i uuid

// Dependencies
// Routes: inclue routing files api-routes.js & html-routes.js in the server
// Always have the api-route before html-route because this data must display on to the html page
let noteData = require("./db/db.json");
const { v4: uuidv4 } = require("uuid");
const express = require("express");
const path = require("path");
const { writeFile, writeFileSync } = require("fs");
const { stringify } = require("querystring");
const { DefaultDeserializer } = require("v8");

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.static("public"));

app.use(express.json());

app.get("/api/notes", (_, res) => res.json(noteData));

app.post("/api/notes", (req, res) => {
  const newNote = req.body;
  newNote.id = uuidv4();
  noteData.push(newNote);
  writeFileSync("./db/db.json", JSON.stringify(noteData));
  res.json(noteData);
});

// Delete
app.delete("/api/notes/:id", (req, res) => {
  noteData = noteData.filter((note) => note.id !== req.params.id);
  writeFileSync("./db/db.json", JSON.stringify(noteData));
  res.json(noteData);
});

// Display
app.get("/notes", (_, res) =>
  res.sendFile(path.join(__dirname, "./public/notes.html"))
);

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT}`)
);
