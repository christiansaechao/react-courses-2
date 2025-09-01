import express from "express";
import UserRouter from "./routes/user.routes.js";
import InventoryRouter from "./routes/inventory.routes.js";

const app = express();

// http://localhost::4000
// http://localhost:4000/user/pet
app.use("/user", UserRouter);
app.use("/inventory", InventoryRouter);

export default app;
