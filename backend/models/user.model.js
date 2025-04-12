import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    userName: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      enum: ["student", "admin", "instructor"],
      default: "student",
    },
    enrolledCourses: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Course",
      },
    ],
    image: {
      type: String,
      default:
        "https://res.cloudinary.com/dqzv2m6c8/image/upload/v1698327062/default_user_1_vxk1gq.png",
    },
  },
  {
    timestamps: true,
  }
);


const User = mongoose.model("User", userSchema);
export default User;
