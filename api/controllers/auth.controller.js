import { errorHandler } from "../../utils/error.js";
import User from "../modals/user.modal.js";
import bcryptjs from "bcryptjs";

export const signup = async (req, res, next) => {
  const { username, email, password } = req.body;

  if (
    !username ||
    !email ||
    !password ||
    username === "" ||
    email === "" ||
    password === ""
  ) {
    next(errorHandler(400, "All field are required"))
  }

  const hashedPassword = await bcryptjs.hashSync(password, 10);

  const newUser = await new User({ username, email, password: hashedPassword });

  try {
    await newUser.save();
    res.json({ message: "signup sucessful" });
  } catch (error) {
    next(error);
  }
};
