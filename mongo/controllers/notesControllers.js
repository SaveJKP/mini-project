import { Note } from "../../models/Note.js";

const notesController = {
  creatNote: async (req, res) => {
    const { title, content, tags = [], isPinned = false, userId } = req.body;
    try {
      const note = await Note.create({
        title,
        content,
        tags,
        isPinned,
        userId,
      });
      res.status(201).json(note);
    } catch (err) {
      res.status(500).json({
        error: true,
        message: "Failed to create note",
        details: err.message,
      });
    }
  },
  getAllNotes: async (req, res) => {
    try {
      const notes = await Note.find().sort({ createOn: -1, isPinned: -1 });
      res.json(notes);
    } catch (err) {
      res.status(500).json({
        error: true,
        message: "Failed to fetch notes",
        details: err.message,
      });
    }
  },
  deleteNote: async (req, res) => {
    const { id } = req.params;
    try {
      const result = await Note.deleteOne({ userId: id });
      res.status(204).json(result);
    } catch (err) {
      res.status(500).json({
        error: true,
        message: "Failed to delete note",
        details: err.message,
      });
    }
  },
  updateNote: async (req, res) => {
    const { title, content, tags = [], isPinned = false, userId } = req.body;
    try {
      const note = await Note.updateOne({
        title,
        content,
        tags,
        isPinned,
        userId,
      });
      res.status(200).json(note);
    } catch (err) {
      res.status(500).json({
        error: true,
        message: "Failed to update note",
        details: err.message,
      });
    }
  },
};
export default notesController;
