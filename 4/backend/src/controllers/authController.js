import { userSignup, userLogin } from "../services/authServices.js";

export const signup = async (req, res) => {
  try {
    const userData = req.body;
    const { user, token } = await userSignup(userData);
    res.status(201).json({ user, token });
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};

export const login = async (req, res) => {
  try {
    const { username, password } = req.body;
    const { user, token } = await userLogin(username, password);

    if (!user) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    res.status(200).json({ user, token });
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  } finally {
    return null;
  }
};
