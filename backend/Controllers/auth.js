import User from "../Models/User";
import bcrypt from "bcryptjs";
import { createError } from "../Error/error";
import jsonwebtoken from "jsonwebtoken";

export const register = async (req, res, next) => {
  const pass = await bcrypt.hash(req.body.password, 10);
  try {
    const newuser = new User({
      username: req.body.username,
      email: req.body.email,
      password: pass,
    });
    await newuser.save();
    res.status(201).send("user has been created");
  } catch (error) {
    next(error);
  }
};

export const login = async (req, res, next) => {
  try {
    const user = await User.findOne({ username: req.body.username });
    if (!user) return next(createError(404, "User not found"));

    const ispasscorrect = await bcrypt.compare(
      req.body.password,
      user.password
    );

    if (!ispasscorrect)
      return next(createError(400, "Wrong username and password"));

    const token = jsonwebtoken.sign(
      {
        id: user._id,
        isAdmin: user.isAdmin,
      },
      process.env.JWT_SECRET
    );

    const { password, isAdmin, ...otherdetails } = user._doc;
    res
      .cookie("access_token", token, { httpOnly: true })
      .status(200)
      .send(otherdetails);
  } catch (error) {
    next(error);
  }
};
