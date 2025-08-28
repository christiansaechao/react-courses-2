import express from "express";
import { errorHandler } from "./middleware/errorHandler.js";
import UserRoutes from "./routes/userRoutes.js";
import { AnimalRoutes } from "./routes/animalRoutes.js";

const app = express();
app.use(express.json());

app.use("/users", UserRoutes);
app.use("/animals", AnimalRoutes);

app.get("/", (req, res) => {
  res.send({ message: "Checking on our app" });
});

app.use(errorHandler);
app.use((req, res) => {
  res.status(req.errorStatus).json({ message: req.errorMessage });
});

export default app;