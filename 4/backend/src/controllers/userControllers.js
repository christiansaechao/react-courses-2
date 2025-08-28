import * as userService from "../services/userServices.js";

export const getUsers = async (req, res, next) => {
  try {
    const users = await userService.getAllUsers();
    res.status(200).json(users);
  } catch (err) {
    next(err);
  }
};

export const getUserById = async (req, res, next) => {
  try {
    const name = req.query.name;
    if (!name) {
      return res
        .status(400)
        .json({ message: "Name query parameter is required" });
    }
    const user = await userService.getUserByName(name);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json(user);
  } catch (err) {
    next(err);
  }
};
