import { loginFailure, loginStart, loginSuccess,logOut } from "./userRedux"
import axios from "axios";

export const login = async(dispatch,user)=>{
    dispatch(loginStart());
    try{
        const res = await axios.post('http://localhost:5000/api/login',user);
        dispatch(loginSuccess(res.data));
    }
    catch(err){
        dispatch(loginFailure());
        alert(err.response.data)
    }
}

export const loggingOut = async(dispatch)=>{
    dispatch(logOut());
}