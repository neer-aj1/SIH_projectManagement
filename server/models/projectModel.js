import mongoose from "mongoose";

const projectSchema = mongoose.Schema({
    owner: {
        type: String,
        required: true,
    },
    projectName: {
        type: String,
        required: true,
    },
    projectSummary: {
        type: String,
        required: true,
    },
    projectDomains:[String],
    projectInstitute:{type:String},
    projectContributers: [String],
    projectMentors: [String],
    projectDesc:{
        type: String,
        required: true,
    }
});

const Project  = mongoose.model('Project', projectSchema);

export default Project;