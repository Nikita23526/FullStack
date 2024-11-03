import ErrorHandler from "../utils/ErrorHandler.js";
import  passport  from "passport";
export const isAuthenticated = ( req, res, next)=>{
const token = req.cookies["connect.sid"];
 console.log(token);


if(!token){
    return next(new ErrorHandler("Not logged in", 401))
}
next();
};

export const authorizedAdmin = ( req, res, next)=>{

    if(req.user.role !== "admin"){
        return next(new ErrorHandler("Only Admin Allowed", 405));
    }
    next();
    };