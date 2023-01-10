import router from "express";
import path from "path";

// GET Route for homepage
router.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

// GET Route for notes page
router.get("/notes", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/notes.html"));
});

export default router;
