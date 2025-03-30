import express from 'express';
import lectureController from '../controllers/lecture.controller.js';
import authMiddleware from '../middlewares/auth.middleware.js';
import courseMiddleware from '../middlewares/course.middleware.js';

const router = express.Router();

router.post("/add", authMiddleware.isAuth, authMiddleware.isInstructor, courseMiddleware.isCourseInstructor, lectureController.addLecture);
router.get("/get", authMiddleware.isAuth, authMiddleware.isInstructor, courseMiddleware.isCourseInstructor, lectureController.getLecture);
router.get("/getAll", authMiddleware.isAuth, authMiddleware.isInstructor, courseMiddleware.isCourseInstructor, lectureController.getAll);

export default router;