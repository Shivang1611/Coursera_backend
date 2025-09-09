
import jwt from 'jsonwebtoken'
import {JWT_ADMIN_PASSWORD} from '../config.js';
export function adminMiddleware(req,res,next){
    const token=req.header.token;
    const decoded=jwt.verify(token,JWT_ADMIN_PASSWORD );
    if(!decoded){

        req.userId=decoded.indexOf;
        next();

    }
    else
    {
        res.status(401).json({error:"Unauthorized user"})
    }

}