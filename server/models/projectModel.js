import mongoose from "mongoose";

const projectSchema = mongoose.Schema({
    projectName: {
        type: String,
        required: true,
    },
    projectSummary: {
        type: String,
        required: true,
    },
    projectContributers: [
        {
            contributerName:
            {
                type: String
            }
        }
    ],
    projectMentors: [
        {
            mentorName:
            {
                type: String
            }
        }
    ],
    projectDesc:{
        type: String,
        required: true,
    }
});

const Project  = mongoose.model('Project', projectSchema);

export default Project;