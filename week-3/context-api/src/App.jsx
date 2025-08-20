import { useState } from "react";
import { useTheme } from "./contexts/ThemeContext";
import { useUser } from "./hooks/useUser";
import "./App.css";

function App() {
  const { theme, toggleTheme } = useTheme();
  const { user } = useUser();
  
  return (
    <>
      <div>The current theme is {theme}</div>
      <button onClick={toggleTheme}>Change Theme</button>
      <div>Current User: {user.name}</div>
      <JinahComponent />
    </>
  );
}

export default App;
