import express from "express";

import UserRoutes from "./routes/userRoutes.js";
import { AnimalRoutes } from "./routes/animalRoutes.js";

import cors from "cors";
import { errorHandler } from "./middleware/errorHandler.js";
import { authMiddleware } from "./middleware/authMiddleware.js";

const app = express();
app.use(express.json());

/**
 * Cors (Cross-Origin Resource Sharing) allows us to connect our backend to our frontend
 * without cors, our frontend will not be able to make requests to our backend if they are on different domains/ports
 * Default settings:
 * origin: '*'
 * methods: 'GET,HEAD,PUT,PATCH,POST,DELETE'
 * preflightContinue: false // Let the middleware handle the OPTIONS request
 * optionsSuccessStatus: 204 // Some legacy browsers (IE11, various SmartTVs) choke on 204
 */

app.use(cors());
app.use(authMiddleware);

app.use("/users", UserRoutes);
app.use("/animals", AnimalRoutes);

app.get("/", (req, res) => {
  res.send({ message: "Checking on our app" });
});

app.use(errorHandler);
export default app;