import express from "express";
import { getUsers, getUserById } from "../controllers/userControllers.js";

const UserRoutes = express.Router();

UserRoutes.get("/", getUsers);

UserRoutes.get("/:id", getUserById);

export default UserRoutes;
