import { supabase } from "../utils/supabase-client.js";

export const getAllUsers = async () => {
  return supabase.from("users").select("*");
};

export const getUserByName = async (name) => {
  return supabase
    .from("users")
    .select("*")
    .eq(`firstname.eq.${name}, lastname.eq.${name}, fullname.eq.${name}`);
};
