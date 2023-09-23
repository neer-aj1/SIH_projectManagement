import express from "express";
const router = express.Router();
import protect  from "../middleware/authMiddleware.js";
import {register, login, logout, allUsers} from '../controllers/userController.js';

router.post('/register', register);
router.post('/login', login);
router.post('/logout', logout);
router.get('/', protect, allUsers)
export default router;