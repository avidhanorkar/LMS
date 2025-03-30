import express from 'express';
import lectureController from '../controllers/lecture.controller.js';

const router = express.Router();

router.post("/add", lectureController.addLecture);
router.get("/get", lectureController.getLecture);
router.get("/getAll", lectureController.getAll);

export default router;