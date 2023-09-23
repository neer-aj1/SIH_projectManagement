import mongoose from "mongoose";
import bcrypt from 'bcryptjs';

//user schema
const userSchema = mongoose.Schema({
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    fname:{type:String,require:true},
    lname:{type:String,require:true},
    institute:{type:String},
    domain:{type:String,require:true},
    userType:{type:String,require:true},
    phoneNumber:{type:String}
},{timestamps: true});


// checking if the password is changed or not before saving during the update
userSchema.pre('save', async function(next){
    if(!this.isModified('password')) {
        return next();
    }
    this.password= await bcrypt.hash(this.password, 10);
    next();
})

userSchema.methods.matchPassword = async function(passwordEnterd){
    return await bcrypt.compare(passwordEnterd, this.password) ;   //comparing the hashed and plain text passwords
}

const User = mongoose.model('User', userSchema);

export default User;