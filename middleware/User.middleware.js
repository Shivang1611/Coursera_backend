
import jwt from 'jsonwebtoken'
import { JWT_USER_PASSWORD } from '../config.js';
function userMiddleware(req,res,next){
    const token=req.header.token;
    const decoded=jwt.verify(token,JWT_USER_PASSWORD);
    if(!decoded){

        req.userId=decoded.indexOf;
        next();

    }
    else
    {
        res.status(401).json({error:"Unauthorized user"})
    }

}
module.exports={
    userMiddleware:userMiddleware
}