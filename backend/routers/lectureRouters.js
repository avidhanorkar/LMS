import express from 'express';
import lectureController from '../controllers/lecture.controller.js';
import authMiddleware from '../middlewares/auth.middleware.js';
import courseMiddleware from '../middlewares/course.middleware.js';

const router = express.Router();

router.post("/add", authMiddleware.isAuth, authMiddleware.isInstructor, courseMiddleware.isCourseInstructor, lectureController.addLecture);
router.get("/get", authMiddleware.isAuth,  lectureController.getLecture);
router.get("/getAll", authMiddleware.isAuth,  lectureController.getAll);
router.get("/getAudio/:id", lectureController.createSummary);


export default router;