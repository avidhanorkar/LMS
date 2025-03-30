import express from 'express';
import quizController from '../controllers/quiz.controller.js';

const router = express.Router();

router.post("/create", quizController.createQuiz);
router.get("/getAll", quizController.getAllQuizzes)
router.get("/getOne", quizController.getQuiz);
router.post("/submit", quizController.submitQuiz);

export default router;