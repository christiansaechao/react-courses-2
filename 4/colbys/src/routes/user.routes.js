import { Router } from "express";
import { getUser, getPet } from "../controllers/user.controller.js";

const router = Router();

// user endpoint
// const { data } = axios.get("http://localhost:4000/endpoint")
router.get("/", getUser);
router.get("/pet", getPet);

router.get("our desired endpoint", "handles the user request");

export default router;
