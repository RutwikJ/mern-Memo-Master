import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import connectDB from './Config/dbConn.config.js';
import errorHandler from './middlware/errorHandler.js';
import cookieParser from 'cookie-parser';
import cors from 'cors'
import corsOptions from './Config/corsOptions.js';
const app= express();
const PORT=process.env.PORT || 3000;
dotenv.config();

connectDB()
app.use(express.json());

app.use(cookieParser())
app.use(cors(corsOptions));

app.use(errorHandler)
app.listen(PORT,()=>{
    console.log(`Server is listening on Port ${PORT}`)
});
