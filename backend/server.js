import express from 'express';
import { configDotenv } from 'dotenv';
import connectDB from './utils/db.js';

configDotenv();
const app = express();
const PORT = process.env.PORT;

app.listen(PORT, () => {
    console.log(`Listensing on port: ${PORT}`);
})
connectDB();