import express  from "express";
import {accessChat, fetchChats} from '../controllers/charController.js'
import protect from "../middleware/authMiddleware.js";
const router = express.Router();

router.post('/', protect, accessChat);
router.post('/fetch', protect, fetchChats);


export default router;