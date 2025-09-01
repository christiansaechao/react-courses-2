import { supabase } from "supabase-client";
/**
  * Where we do our database logic - communicate with the database
  * Receive back requested data
 */

export const getUserData = async (id) => {
  const data = supabase.from("users").execute();

  if (!data) throw new Error(err);

  return data;
};

export const getHotChips = () => {
  const data = supabase.select("*").from("chips").filter().includes("hot");
};
