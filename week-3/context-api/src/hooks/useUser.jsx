import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";

export const useUser = () => {
  const context = useContext(UserContext);

  if (context === null)
    throw new Error("Context must be used inside of a provider");

  return context;
};
