import express from "express";
import userController from "../mongo/controllers/UsersController.js";

const router = express.Router();

router.get("/users", userController.getAllUsers);
router.post("/users",userController.createUser);
router.post("auth/register", userController.register);
router.post("/auth/login", userController.login);
export default router;
