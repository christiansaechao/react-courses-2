import "dotenv/config";
import app from "./src/app.js";

const PORT = process.env.PORT || 4000; //development server port
app.listen(PORT, () => console.log("Server Running On Port: " + PORT));
