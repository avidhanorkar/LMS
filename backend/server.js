import express from "express";
import { configDotenv } from "dotenv";
import connectDB from "./utils/db.js";
import authRouter from "./routers/authRouters.js";
import courseRouter from "./routers/courseRouters.js";
import lectureRouter from "./routers/lectureRouters.js";
import quizRouter from "./routers/quizRouters.js";
import cors from "cors";

configDotenv();
const app = express();
app.use(cors());

const PORT = process.env.PORT;
app.use(express.json());

app.listen(PORT, () => {
  console.log(`Listensing on port: ${PORT}`);
});
connectDB();

// Routers
app.use("/api/auth", authRouter);
app.use("/api/course", courseRouter);
app.use("/api/lecture", lectureRouter);
app.use("/api/quiz", quizRouter)