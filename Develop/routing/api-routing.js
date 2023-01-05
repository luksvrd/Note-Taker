// Dependencies to read json

const fs = require("fs");

const uniqid = require("uniqid");

module.exports = function (app) {
  app.get("/api/notes", (req, res) => {
    console.log("Excecute GET notes request");

    let data = fs.readFileSync("./Develop/data/db.json", "utf8");

    res.json(JSON.parse(data));
  });

  app.post("/api/notes", (req, res) => {
    const newNote = {
      ...req.body,
      id: uniqid(),
    };

    console.log("Post Request for new notes");

    let data = fs.readFileSync("./Develop/data/db.json", "utf8");

    const dataJSON = JSON.parse(data);

    dataJSON.push(newNote);

    fs.writeFileSync(
      "./Develop/data/db.json",
      JSON.stringify(dataJSON),
      (err, text) => {
        if (err) {
          console.error(err);
          return;
        }
        console.log("HELLO", text);
      }
    );

    console.log("Success, added new note");

    res.json(data);
  });

  app.delete("/api/notes/:id", (req, res) => {
    const data = fs.readFileSync("./Develop/data/db.json", "utf8");

    const dataJSON = JSON.parse(data);

    const newNotes = dataJSON.filter((note) => note.id !== req.params.id);

    fs.writeFile(
      "/Develop/data/db.json",
      JSON.stringify(newNotes),
      (err, text) => {
        if (err) {
          console.error(err);
        }
      }
    );

    res.json(newNotes);
  });
};
