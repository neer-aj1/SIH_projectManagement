import express from "express";
import cookieParser from "cookie-parser";
import dotenv from 'dotenv';
import userRoutes from './routes/userRoutes.js';
import projectRoute from './routes/projectRoute.js'
import conn from "./database/databaseConnection.js";

import chatRoutes from './routes/chatRoute.js';
import { errorHandler, notFound } from "./middleware/errorMiddleware.js";
import cors from "cors";
const corsOptions = {
    origin:'*', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200,
 };
dotenv.config();

const app = express();
app.use(cors(corsOptions)) 
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/api', userRoutes);
app.use('/project', projectRoute);
app.use('/api/chat', chatRoutes);
app.use(notFound);
app.use(errorHandler)
conn();
app.use(cookieParser());

app.get('/', (req, res) => res.send('Server is ready'))
app.listen(port, () => console.log(`Server started on port: ${port}`));