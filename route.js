import express from "express";
import userRoutes from "./mongo/users.js";
import noteRoutes from "./mongo/notes.js";
const router = express.Router();

export default ()=> {
    router.use("/mongo", userRoutes);
    router.use("/mongo", noteRoutes);
    return router;
};