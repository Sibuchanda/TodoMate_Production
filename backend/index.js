import express from 'express'
import dotenv from 'dotenv'
dotenv.config();
import mongoose from 'mongoose'
import todoRoute from './routes/todo.route.js'
import userRoute from './routes/user.route.js'
//Without cors we can't access backend database in frontend. it is a middleware
import cors from 'cors'
import cookieParser from 'cookie-parser'
import connectDB from './config/connectDB.js';

const app = express()


const PORT = process.env.PORT || 4002;
const DB_URI = process.env.MONGODB_URI;


//------Middleware--------
app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin: process.env.FRONTEND_URL,
    credentials: true,
    methods:"GET,POST,PUT,DELETE",
    allowedHeaders: ["Content-Type", "Authorization"]
}))


console.log(process.env.MONGODB_URI);
//--------- Database connection ---------
await connectDB(process.env.MONGODB_URI);


//--------Routes ------------
app.use("/todo", todoRoute);
app.use("/user", userRoute);


app.listen(PORT, () => {
    console.log(`Listening to the port number : ${PORT}`);
})