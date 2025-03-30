import mongoose from "mongoose";

const lectureSchema = new mongoose.Schema(
  {
    lectureName: {
      type: String,
      required: true,
    },
    lectureVideo: {
      type: String,
      required: true,
    },
    course: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Course",
      required: true
    },
  },
  {
    timestamps: true,
  }
);

const Lecture = mongoose.model("Lecture", lectureSchema);
export default Lecture;
