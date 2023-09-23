import express from "express";
import cookieParser from "cookie-parser";
import dotenv from 'dotenv';
import userRoutes from './routes/userRoutes.js';
import projectRoute from './routes/projectRoute.js'
import conn from "./database/databaseConnection.js";

dotenv.config();

const app = express();

const port = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/api', userRoutes);
app.use('/project', projectRoute);
conn();
app.use(cookieParser());

app.get('/', (req, res) => res.send('Server is ready'))
app.listen(port, () => console.log(`Server started on port: ${port}`));