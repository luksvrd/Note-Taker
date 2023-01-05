const path = require("path");

// Sends user the notesor index page use sendFile() method in the funciton
module.exports = function (app) {
  // for the notes page
  app.get("/notes", function (req, res) {
    res.ssendFile(path.join(__dirname + "../public/notes.html"));
  });

  // for the index page
  app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname + "../public/index.html"));
  });
};
