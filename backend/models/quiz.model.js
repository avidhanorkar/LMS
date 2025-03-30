import mongoose from "mongoose";

const quizSchema = new mongoose.Schema({
    course: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Course"
    },
    questions: [{
        question: String,
        options: [String],
        correctOption: Number
    }]
}, {
    timestamps: true
});

const Quiz = mongoose.model("Quiz", quizSchema);
export default Quiz;