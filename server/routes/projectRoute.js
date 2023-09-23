import express from "express";
const router = express.Router();

import {findOneProject, addProject, deleteProject, getProject} from '../controllers/projectController.js';

router.post('/addproject', addProject);
router.get('/getProjects',getProject);
router.get('/findProject/:id',findOneProject);
router.delete('/deleteProject/:id',deleteProject);
export default router;