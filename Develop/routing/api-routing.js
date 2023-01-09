// Dependencies to read json

const router = require("express").Router();
const fs = require("fs");
const { append } = require("express/lib/response");
const path = require("path");
const { v4: uuidv4 } = require("uuid");
const {
  readFromFile,
  readAndAppend,
  writeToFile,
} = require("../helper/fsUtils");

// create a post route to add notes to the DB
router.get("/notes", (req, res) => {
  fs.readFile("./db/db.json", "utf8", (err, data) => {
    if (data) {
      console.log(data);
      res.json(JSON.parse(data));
    } else {
      console.log(err);
    }
  });
});

// create a post route to add notes to the DB
router.post("./public/notes.html", (req, res) => {
  const { title, text } = req.body;
  const newNote = { title, text, id: uuidv4() };

  fs.readFile("./db/db.json", "utf8", (err, data) => {
    if (err) {
      console.error(err);
    } else {
      const parsedData = JSON.parse(data);

      parsedData.push(newNote);

      fs.writeFile("./db/db.json", JSON.stringify(parsedData), (err) =>
        err ? console.error(err) : console.log("Successfully added a note!")
      );
      res.json(parsedData);
    }
  });
});

// create delete route to delete from the DB
router.delete("./public/notes.html/:id", (req, res) => {
  if (req.params.id) {
    const deletedNoteId = req.params.id;

    fs.readFile("./db/db.json", "utf8", (err, data) => {
      if (err) {
        console.error(err);
      } else {
        const parsedData = JSON.parse(data);

        const filteredArray = parsedData.filter(
          (note) => note.id !== deletedNoteId
        );

        fs.writeFile("./db/db.json", JSON.stringify(filteredArray), (err) =>
          err ? console.error(err) : console.log("Successfully deleted a note!")
        );
        res.json(parsedData);
      }
    });
  }
});

module.exports = router;
