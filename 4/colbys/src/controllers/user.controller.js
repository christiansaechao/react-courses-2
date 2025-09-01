import { getUserData } from "../services/something";
import type { User } from './'

/**
 * Handles the users requests
 * Picks which services to use to get the requested information by the client
 */ 

export const getUser = (req, res) => {
  try {
    const user = getUserData();
    res.send(user);
  } catch (err) {
    throw new Error(err);
  }
};

export const getPet = (req, res) => {
  res.send({ name: "Tony", type: "dog" });
};
