import mongoose from "mongoose";

const certificateSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    course: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Course"
    },
    grade: Number,
    issueDate: Date,
});

const Certificate = mongoose.model("Certificate", certificateSchema);
export default Certificate;