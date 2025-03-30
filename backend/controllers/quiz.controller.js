import { get } from "mongoose";
import Course from "../models/course.model.js";
import Quiz from "../models/quiz.model.js";

const createQuiz = async (req, res) => {
    try {
        const { courseId, questions } = req.body;

        if (!courseId || !questions) {
            return res.status(404).json({
                message: "All fields are required"
            })
        }

        const newQuiz = new Quiz({
            course: courseId,
            questions: questions
        })
        await newQuiz.save();

        const course = await Course.findById(courseId);
        course.quizzes.push(newQuiz._id);
        course.save();

        return res.status(200).json({
            message: "Quiz added successfully",
            quiz: newQuiz,
            course: course
        })

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: "Internal Server Error || At Quiz Creation",
            error: error.message
        })
    }
}

const getAllQuizzes = async (req, res) => {
    try {
        const { courseId } = req.body;
        if (!courseId) {
            return res.status(404).json({
                message: "All fields are required"
            })
        }

        const course = await Course.findById(courseId).populate("quizzes");
        if (!course) {
            return res.status(404).json({
                message: "Course Not Found"
            })
        }

        return res.status(200).json({
            message: "Quizzes retrieved successfully",
            quiz: course.quizzes
        })
    } catch (error) {
        console.log(error.message);
        return res.status(500).json({
            message: "Internal Server Error || Retrieving Quizzes",
            error: error.message
        })
    }
}

const getQuiz = async (req, res) => {
    try {
        const { quizId } = req.body;
        if (!quizId) {
            return res.status(404).json({
                message: "All fields are required"
            })
        };

        const quiz = await Quiz.findById(quizId);
        if (!quiz) {
            return res.status(404).json({
                message: "Quiz Not Found"
            })
        }

        return res.status(200).json({
            message: "Quiz Retrieved Successfully",
            quiz: quiz
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: "Internal Server Error || Retrieving Quiz",
            error: error.message
        })
    }
}

const submitQuiz = async (req, res) => {
    try {
        const { quizId, options } = req.body;

        if (!quizId || !options) {
            return res.status(404).json({
                message: "All fields are required"
            });
        }

        const quiz = await Quiz.findById(quizId);
        if (!quiz) {
            return res.status(404).json({
                message: "Quiz Not Found"
            });
        }

        if (!Array.isArray(options) || options.length !== quiz.questions.length) {
            return res.status(400).json({
                message: "Invalid or missing answers for the quiz"
            });
        }

        let score = 0; // Use `let` instead of `const`

        for (let i = 0; i < quiz.questions.length; i++) {
            if (options[i] === quiz.questions[i].correctOption) {
                score++;
            }
        }

        return res.status(200).json({
            message: "Quiz Submitted Successfully",
            score: score,
            quizId: quizId
        });

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: "Internal Server Error || Submitting the Quiz",
            error: error.message
        });
    }
};


const quizController = {
    createQuiz, getAllQuizzes, getQuiz, submitQuiz
}

export default quizController;