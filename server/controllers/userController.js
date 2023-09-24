import asyncHandler from "express-async-handler";
import User from "../models/userModel.js";
import generateToken from "../utils/tokenGenerator.js";

// post method to register user
const register = asyncHandler( 
    async(req, res) => {
    const {fname, lname, email, password, phoneNumber, userType,domain,institute,username} = req.body;
    const alreadyRegisterd = await User.findOne({email});
    if(alreadyRegisterd){
        res.status(400);
        throw new Error("User already Exists");
    }
    // create a new user and save it in database
    let user =  await User.create({
        fname,
        lname,
        email,
        password,
        phoneNumber,
        userType,
        domain,
        institute,
        username
    });

    if(user){
        res.status(201).json({
            fname: user.fname,
            email: user.email,
        });
    }
    else{
        res.status(400);
        throw new Error('Invalid Credentials');
    }
});

const login = asyncHandler(
    async (req, res) => {
        const {username, password} = req.body;
        const user = await User.findOne({username});
        let matchedPasswords;
        try{
            matchedPasswords = await user.matchPassword(password);
        }
        catch(e){
            throw new Error("Invalid")
        }
        if(user && matchedPasswords){
            let token = generateToken(res, user._id);
            res.cookie('jwt', token, {
                httpOnly : true ,
                maxAge   : 2*24*60*60*1000,
                sameSite: 'strict',
                secure : process.env.NODE_ENV !== 'development'
            });
            res.status(201).json({
                name: user.fname,
                username: user.username,
                token: token,
                id: user._id,
            });
        }
        else{
            res.status(400);
            throw new Error("Invalid Credentials");
        }
    }
);

const logout = asyncHandler(
    async (req, res) => {
        res.cookie('jwt', '', {
            httpOnly: true,
            expires: new Date(0),
        });
        res.status(200).json({
            message:'Logged out successfully'
        });
    }
);

const allUsers = asyncHandler(async (req, res) => {
    const keyword = req.query.search
      ? {
          $or: [
            { username: { $regex: req.query.search, $options: "i" } },
            { email: { $regex: req.query.search, $options: "i" } },
          ],
        }
      : {};
    const users = await User.find(keyword).find({username:{$ne: req.user.username}});
    res.send(users);
  });

export {register, login, logout, allUsers};