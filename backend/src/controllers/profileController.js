import User from "../models/userModel.js";

import cloudinary from "../config/cloudinary.js";

export const setupProfile = async (req, res) => {
  try {
    const { userName } = req.body;

    const file = req.file;
    let imageUrl = "";
    if (file) {
      const result = await new Promise((resolve, reject) => {
        const stream = cloudinary.uploader.upload_stream(
          { resource_type: "image" },
          (error, result) => {
            if (error) reject(error);
            else resolve(result);
          },
        );
        stream.end(file.buffer);
      });
      imageUrl = result.secure_url;
    }

    const updatedUser = await User.findByIdAndUpdate(
      req.user._id,
      { userName, profilePic: imageUrl },
      { new: true },
    ).select("-password");

    res.status(200).json({
      success: true,
      message: "Profile setup successful",
      user: updatedUser,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
};



export const getUserProfile =
  async (req, res) => {

  try {

    res.status(200).json({

      success: true,

      user: req.user
    });

  } catch (error) {

    console.log(error);

    res.status(500).json({

      success: false,

      message: "Server Error"
    });
  }
};
