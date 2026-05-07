import User from "../models/userModel.js"
import bcrypt from "bcryptjs"
import {generateToken, guestToken} from "../utils/generateToken.js"

export const signupUser = async (req, res) => {
  try {
    const {userName, email, password} = req.body;
    console.log(userName)

    const existUser = await User.findOne({email});

    if(existUser) {
      return res.status(400).json({
        message: "User already exists"
      })
    }

    const hashPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
      userName,
      email,
      password: hashPassword
    });
    console.log(user._id)

    res.status(201).json({
      message: "Signup Successful",
      token: generateToken(user._id),
      user
    });

  } catch (error) {
    res.status(500).json({
      message: error.message
    })
  }
}



export const loginUser =  async (req, res) => {
  try {
    const {email, password} = req.body;

    const user = await User.findOne({email});

    if(!user) {
      return res.status(400).json({
        message: "User not found"
      });
    }

    const passwordMatch = await bcrypt.compare(
      password,
      user.password
    );

    if(!passwordMatch){
      return res.status(400).json({
        message: "password wrong"
      });
    }

    res.status(200).json({
      message: "Login Successful",
      token: generateToken(user._id),
      user
    })
  } catch (error) {
    res.status(500).json({
      message : error.message
    })
  }
}


export const googleAuthUser = async (req,res) => {
  try {
    const {userName, email} = req.body;

    let user = await User.findOne({email});

    if(user) {
      return res.status(200).json({
        message: "Login Successful",
        token: generateToken(user._id),
        user
      })
    }

    user = await User.create({
      userName,
      email,
      authProvider: "google"
    })

    res.status(201).json({
      message: "Google Signup Successful",
      token: generateToken(user._id),
      user
    })

  } catch (error) {
     res.status(500).json({
      message: error.message
     })
  }
}

export const guestUser = async (req,res) => {
  try {
    const token = guestToken()

    res.status(200).json({
      message: "Guest Login Successful",
      token
    })
  } catch (error){
    res.status(500).json({
      message: error.message
     })
  }
}