import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    userName: {
      type: String,
      required: true
    },

    email: {
      type: String,
      required: true,
      unique: true,
      trim: true
    },

    password: {
      type: String,

    },

    authProvider: {
      type: String,
      enum: ["local", "google"],
      default: "local"
    },

    profilePic: {
      type: String,
      default: ""
    }

  },
  {
    timestamps: true
  }
);

const User = mongoose.model("User", userSchema);

export default User;