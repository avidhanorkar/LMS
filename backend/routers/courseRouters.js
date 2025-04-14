import express from 'express';
import courseController from "../controllers/course.controller.js";
import authMiddleware from '../middlewares/auth.middleware.js';
import courseMiddleware from '../middlewares/course.middleware.js';
const router = express.Router();

router.post('/createCourse', authMiddleware.isAuth, authMiddleware.isInstructor, courseController.createCourse);
router.get("/getAll", courseController.getAllCourses);
router.get("/getById/:courseId", courseController.getCourseById);
router.patch("/updateCourse", authMiddleware.isAuth, courseMiddleware.isCourseInstructor, courseController.updateCourse);
router.post("/purchase", authMiddleware.isAuth, courseController.purchaseCourse);
router.get("/getEnrolledCourses", authMiddleware.isAuth, courseController.getEnrolledCourses);

export default router;