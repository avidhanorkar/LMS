import express from "express";
import { configDotenv } from "dotenv";
import connectDB from "./utils/db.js";
import authRouter from "./routers/authRouters.js";

configDotenv();
const app = express();
const PORT = process.env.PORT;
app.use(express.json());
app.listen(PORT, () => {
  console.log(`Listensing on port: ${PORT}`);
});
connectDB();

app.use("/api/auth", authRouter);
