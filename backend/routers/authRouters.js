import e from "express";
import authController from "../controllers/auth.controller.js";
import authMiddleware from "../middlewares/auth.middleware.js";

const router = e.Router();

router.post('/register', authController.register);
router.post('/login', authController.login);
router.get('/user', authMiddleware.isAuth, authController.getUser);

export default router; 