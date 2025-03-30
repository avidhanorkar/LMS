import User from "../models/user.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const register = async (req, res) => {
  try {
    const { name, userName, email, password, role } = req.body;

    const existingUser = await User.findOne({ email: email });

    if (existingUser) {
      return res.status(400).json({
        message: "User already exists || Need to login",
      });
    }

    const hashedPassword = await bcrypt.hash(password, 12);

    const newUser = await User.create({
      name,
      userName,
      email,
      password: hashedPassword,
      role: role || "student"
    });

    return res.status(201).json({
      message: "User created successfully",
      user: newUser,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Internal server error",
      error: error.message,
    });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const existingUser = await User.findOne({ email: email });

    if (!existingUser) {
      return res.status(404).json({
        message: "User not found || Need to register",
      });
    }

    const isPasswordCorrect = await bcrypt.compare(
      password,
      existingUser.password
    );

    if (!isPasswordCorrect) {
      return res.status(400).json({
        message: "Invalid credentials",
      });
    }

    const payload = {
      user: {
        id: existingUser._id,
        role: existingUser.role,
      },
    };

    const token = jwt.sign(payload, process.env.JWT_Secret, {
      expiresIn: "7d",
    });

    return res.status(200).json({
      message: "User Logged In Successfully",
      token: token
    })
  } catch (error) {
    return res.status(500).json({
      message: "Internal server error",
      error: error.message,
    });
  }
};


const authController = {
  register,
  login,
}

export default authController;