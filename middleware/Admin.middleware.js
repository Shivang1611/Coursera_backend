
import jwt from 'jsonwebtoken'
import { JWT_Admin_PASSWORD } from '../config.js';
function adminMiddleware(req,res,next){
    const token=req.header.token;
    const decoded=jwt.verify(token,JWT_Admin_PASSWORD);
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
    adminMiddleware:userMiddleware
}