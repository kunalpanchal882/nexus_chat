import jwt from 'jsonwebtoken'
import {Request,Response,NextFunction} from 'express'

export default function auth(req:Request,res:Response,next:NextFunction): void {
    try {
        const {token} = req?.cookies 

    if(!token){
        res.status(401).json({message:"invalid token"})
        return
    }

    const decode = jwt.verify(token,process.env.JWT_SECRET as string);

    (req as any).user = decode

    next()
    } catch (error) {
        res.status(401).json({ message: "Invalid token" });
    }
}