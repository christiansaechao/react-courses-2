import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ThemeProvider } from "./contexts/ThemeContext.jsx";
import { UserProvider } from "./providers/UserProvider.jsx";
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider defaultTheme="orange">
      <UserProvider defaultUser={{name: "Joe Black"}}>
        <App />
      </UserProvider>
    </ThemeProvider>
  </StrictMode>
);
