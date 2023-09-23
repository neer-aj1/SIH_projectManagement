import asyncHandler from "express-async-handler";
import Project from "../models/projectModel.js";
import { categoryOptions, instituteOptions } from "../data.js";

const addProject = asyncHandler(
    async (req, res) => {
        const { owner, projectName, projectSummary, projectDesc, projectDomains, projectInstitute, projectContributers, projectMentors } = req.body;
        let project = await Project.create({
            owner,
            projectName,
            projectSummary,
            projectDesc,
            projectContributers,
            projectMentors,
            projectInstitute,
            projectDomains
        });
        if (project) {
            res.status(201).json({
                name: project.owner,
            });
        }
        else {
            res.status(400);
            throw new Error('Not able to access');
        }
    }
);

const getProject = asyncHandler(
    async (req, res) => {
        const page = parseInt(req.query.page) || 0;
        const limit = parseInt(req.query.limit) || 20;
        let institute = req.query.institute || "All";
        const search = req.query.search || "";
        let category = req.query.category || "All";

        category === "All"
            ? (category = [...categoryOptions])
            : (category = req.query.category.split(","));

        institute === "All"
            ? (institute = [...instituteOptions])
            : (institute = req.query.institute.split(","));

        let sortBy = { createdAt: 'desc' };

        const project = await Project.find({ projectName: { $regex: search, $options: "i" } })
            .where("projectInstitute")
            .in([...institute])
            .where("projectDomains")
            .in([...category])
            .skip(page * limit)
            .limit(limit);

        const count = await Project.countDocuments({
            name: { $regex: search, $options: 'i' },
            projectDomains: { $in: [...categoryOptions] },
            projectInstitute: { $in: [...instituteOptions] },
        });

        try {

            res.status(200).json({
                error: false,
                projects: project,
                page: page + 1,
                limit: limit,
                count: count
            });
        }
        catch (err) {
            res.status(500);
            throw new Error(err);
        }
    }
);

const findOneProject = asyncHandler(
    async (req, res) => {

        try {
            const project = await Project.findById(req.params.id);
            res.status(200).json({
                error: false,
                project: project
            });
        } catch (error) {
            res.status(500);
            throw new Error(error);
        }
    }
);

const deleteProject = asyncHandler(
    async (req, res) => {

        try {
            const project = await Project.findByIdAndDelete(req.params.id);
            res.status(200).json({
                error: false,
                message:"Project Deleted Succesfully"
            });
        } catch (error) {
            res.status(500);
            throw new Error(error);
        }
    }
);

export { addProject, getProject, findOneProject, deleteProject }