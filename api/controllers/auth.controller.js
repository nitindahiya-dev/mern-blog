import { errorHandler } from "../../utils/error.js";
import User from "../modals/user.modal.js";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";

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
    next(errorHandler(400, "All field are required"));
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

export const signin = async (req, res, next) => {
  const { email, password } = req.body;
  if (!email || !password || email === "" || password === "") {
    next(errorHandler(400, "All fields are required"));
  }

  try {
    const validUser = await User.findOne({ email });
    if (!validUser) return next(errorHandler(404, "User Not Found"));

    const validPassword = bcryptjs.compareSync(password, validUser.password);
    if (!validPassword) return next(errorHandler(400, "Invalid Password"));

    const token = jwt.sign({ id: validUser._id }, process.env.JWT_KEY, { expiresIn: "1d" })
      
    const {password : pass, ...rest} = validUser._doc;

    res.status(200).cookie("access_token", token, {
      httpOnly: true,
    }).json(rest);
  } catch (error) {
    next(error);
  }
};
