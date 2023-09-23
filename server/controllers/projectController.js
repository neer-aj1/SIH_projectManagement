import asyncHandler from "express-async-handler";
import Project from "../models/projectModel.js";

const addProject = asyncHandler(
    async(req, res)=>{
        const {owner, projectName, projectSummary, projectDesc, projectContributers, projectMentors} = req.body;
        let project = await Project.create({
            owner,
            projectName, 
            projectSummary, 
            projectDesc, 
            projectContributers, 
            projectMentors
        });
        if(project){
            res.status(201).json({
                name: project.owner,
            });
        }
        else{
            res.status(400);
            throw new Error('Not able to access');
        }
    }
);

export {addProject}