import { supabase } from "../utils/supabase-client.js";

export const getAllAnimals = async () => {
  return supabase.from("animals").select("*");
};

export const getAllAnimalsByType = async (type) => {
  const response = await supabase
    .from("animals")
    .select("*")
    .eq("species", type);

  return response;
};

export const addNewAnimal = async (data) => {
  const response = await supabase.from("animals").insert([data]).select();

  return response;
};
