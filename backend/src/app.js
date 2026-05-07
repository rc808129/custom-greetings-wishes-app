
import express from 'express';
import dotenv from 'dotenv';
dotenv.config()

import cors from 'cors'


import connectDB from './config/db.js';
import authRoutes from './routes/authRoutes.js';
import profileRoutes from './routes/profileRoutes.js';

const app = express()

connectDB();
app.use(cors())
app.use(express.json())

app.get("/", (req, res) => {
  res.send("Server Running");
});

app.use("/api/auth", authRoutes);

app.use("/api/profile", profileRoutes);


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});