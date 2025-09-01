import { supabase } from "../utils/supabase-client";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET || "your_jwt_secret_key";

/**
 * Check if a user with the given email exists in the database.
 * @param {string} email - The email of the user to check.
 * @returns {Promise<Object|null>} - The user data if exists, otherwise null.
 * @throws {Error} - If there is an error during the database query.
 */

/**
 * Sign a JWT for a user object
 */
const signToken = (user) => {
  const { username, password } = user;
  return jwt.sign({ username, password }, JWT_SECRET, {
    expiresIn: "1h",
  });
};

const checkIfUserExists = async (email) => {
  const { data, error } = await supabase
    .from("users")
    .select("*")
    .eq("email", email)
    .single();

  if (error) {
    throw new Error("Error checking user existence");
  }

  return data || null;
};

export const userSignup = async (userData) => {
  const { username, password, firstname, lastname, age } = userData;
  try {
    const userExists = await checkIfUserExists(username);

    if (!userExists) {
      throw new Error("User already exists");
    }

    const hashPassword = await bcrypt.hash(password, 10);
    const { data: newUser, error } = await supabase
      .from("users")
      .insert([
        { email: username, password: hashPassword, firstname, lastname, age },
      ]);

    if (error) {
      throw new Error("Error creating user");
    }

    const token = signToken(newUser);

    return { user: newUser, token };
  } catch (err) {
    throw new Error("Error signing up user");
  }
};

export const userLogin = async (username, password) => {
  try {
    const user = await checkIfUserExists(username);
    if (!user) {
      throw new Error("User does not exist");
    }

    const validatePassword = await bcrypt.compare(password, user.password);
    if (!validatePassword) {
      throw new Error("Invalid password");
    }

    const token = signToken(user);

    return { user, token };
  } catch (err) {
    throw new Error("Error logging in");
  }
};
