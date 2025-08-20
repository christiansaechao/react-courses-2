import React from "react";
import { useTheme } from "../contexts/ThemeContext2";

const JinahComponent = () => {
  const { theme } = useTheme();
  return <div>{theme}</div>;
};

export default JinahComponent;
