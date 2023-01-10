// Dependencies to read json
import router from "express";
import { v4 as uuidv4 } from "uuid";
import { readAndAppend, readFromFile } from "../helper/fsUtils.js";

// GET Route for retrieving all the feedback
router.get("/", (req, res) =>
  readFromFile("./db/db.json").then((data) => res.json(JSON.parse(data)))
);

// POST Route for submitting feedback
router.post("/", (req, res) => {
  // Destructuring assignment for the items in req.body
  const { title, text, id } = req.body;

<<<<<<< HEAD
  // If all the required properties are present
  if (title && text && id) {
    // Variable for the object we will save
    const newFeedback = {
      title,
      text,
      note_id: uuidv4(),
    };
=======
// create a post route to add notes to the DB
<<<<<<< HEAD
=======
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
>>>>>>> parent of 8fbdaaf (file path)
router.post("/notes", (req, res) => {
  const { title, text } = req.body;
  const newNote = { title, text, id: uuidv4() };
>>>>>>> parent of 8fbdaaf (file path)

    readAndAppend(newNote, "./db/db.json");

    const response = {
      status: "success",
      body: newNote,
    };

    res.json(response);
  } else {
    res.json("Error in posting note");
  }
});

// create delete route to delete from the DB
router.delete("/notes/:id", (req, res) => {
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
