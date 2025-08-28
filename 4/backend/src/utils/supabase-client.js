import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = process.env.SUPABASE_URL;
const SUPABASE_KEY = process.env.SUPABASE_KEY;

if (!SUPABASE_KEY || !SUPABASE_URL) {
  throw new Error(
    "missing URl: " + SUPABASE_URL,
    "missing KEY: " + SUPABASE_KEY
  );
}

export const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);