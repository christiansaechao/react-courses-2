// load our environment variables
import "dotenv/config";
// entry point into our server
import app from "./src/app.js";

// Port that your server is going to run on
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log("Server running on port: " + PORT));