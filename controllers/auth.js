import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import Auth from "../models/auth.js"
import mongoose from "mongoose";



export const signin = async (req, res) => {
  const {
    username,
    password
  } = req.body;

  try {
    const existingUser = await Auth.findOne({ username });

    if (existingUser)
      return res.status(400).json({ message: "User already exists" });


    const hashedpassword = await bcrypt.hash(password, 12);
    const result = await Auth.create({
      username,
      password: hashedpassword,

    });
    const token = jwt.sign({ username: result.username, id: result._id }, "test", {
      expiresIn: "1h",
    });
    res.status(200).json({ result, token });
  } catch (error) {
    res.status(500).json({ message: "something went wrong " });
  }
};

export const login = async (req, res) => {
  const { username, password } = req.body;

  try {
    const existingUser = await Auth.findOne({ username });

    if (!existingUser)
      return res.status(400).json({ message: `This ${username} doesn't exist` });

    const isPasswordCorrect = await bcrypt.compare(
      password,
      existingUser.password
    );

    if (!isPasswordCorrect)
      return res.status(400).json({ message: "InCorrect Password" });

    const token = jwt.sign(
      { username: existingUser.username, id: existingUser._id },
      "test",
      { expiresIn: "1h" }
    );

    res.status(200).json({ existingUser, token });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};



