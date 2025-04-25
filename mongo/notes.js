import express from "express";
import notesController from "../mongo/controllers/notesControllers.js";

const router = express.Router();

router.get("/notes", notesController.getAllNotes);
router.post("/notes", notesController.creatNote);
router.delete("/notes/:id", notesController.deleteNote);
router.put("/notes/:id", notesController.updateNote);
export default router;
