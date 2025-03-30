import express from 'express';
import quizController from '../controllers/quiz.controller.js';
import courseMiddleware from '../middlewares/course.middleware.js';
import authMiddleware from '../middlewares/auth.middleware.js';

const router = express.Router();

router.post("/create", authMiddleware.isAuth, courseMiddleware.isCourseInstructor, quizController.createQuiz);
router.get("/getAll", authMiddleware.isAuth, courseMiddleware.hasEnrolled, quizController.getAllQuizzes)
router.get("/getOne", authMiddleware.isAuth, courseMiddleware.hasEnrolled, quizController.getQuiz);
router.post("/submit", authMiddleware.isAuth, courseMiddleware.hasEnrolled, quizController.submitQuiz);

export default router;