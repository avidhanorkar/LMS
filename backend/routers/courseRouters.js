import express from 'express';
import courseController from "../controllers/course.controller.js";
import authMiddleware from '../middlewares/auth.middleware.js';
const router = express.Router();

router.post('/createCourse', authMiddleware.isAuth, courseController.createCourse);
router.get("/getAll", courseController.getAllCourses);
router.get("/getById", courseController.getCourseById);
router.patch("/updateCourse", courseController.updateCourse);

export default router;