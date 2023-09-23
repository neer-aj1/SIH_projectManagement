import express from "express";
const router = express.Router();

import {addProject} from '../controllers/projectController.js';

router.post('/addproject', addProject);
export default router;