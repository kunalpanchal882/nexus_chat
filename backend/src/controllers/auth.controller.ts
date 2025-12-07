import userModel from '../models/user.model'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import {Request,Response} from 'express'

async function signup(req:Request,res:Response):Promise<void> {
    try {
        const {name,email,password} = req.body

    const userExists = await userModel.findOne({email}).select("+password")

    if(userExists){
        res.status(400).json({message:"Email is already exists"})
        return 
    }

    const hashPassword =await bcrypt.hash(password,10)

    const user = await userModel.create({
        name,
        email,
        password:hashPassword
    })

    const token = jwt.sign({
        id:user._id
    },process.env.JWT_SECRET as string)

    res.cookie("token",token,{
        httpOnly:true,
        secure:true,
        maxAge: 7 * 24 * 60 * 60 * 1000,
    })

    res.status(200).json({
        message:"User sign up sucessfully",
        user: {
        id: user._id,
        name: user.name,
        email: user.email,
      },
    })

    } catch (error) {
        res.status(500).json({ message: "Internal error", error });
    }
}

async function login(req:Request,res:Response):Promise<void> {
    try {        
        const {email,password} = req.body

    const user = await userModel.findOne({email}).select("+password")

    if(!user){
        res.status(400).json({message:"invalid credentails"})
        return 
    }


    const MatchPassword = await bcrypt.compare(password,user.password)

    if (!MatchPassword) {
         res.status(400).json({ message: 'Invalid creds' });
         return
    }

    const token = jwt.sign({
        id:user._id
    },process.env.JWT_SECRET as string)

    res.cookie("token",token,{
        httpOnly:true,
        secure:true,
        maxAge: 7 * 24 * 60 * 60 * 1000,
    })

    res.status(200).json({
        message:"User login sucessfully",
        user: {
        id: user._id,
        name: user.name,
        email: user.email,
      },
    })

    } catch (error) {
        res.status(500).json({ message: "Internal error", error });
    }
}

async function me(req:Request,res:Response):Promise<void> {
    try {
        const user = req.user
        console.log(user);
        
        if(!user){
            res.status(400).json({message:"user not found"})
            return
        }

        const loginUser = await userModel.findOne({
            _id:user.id
        })

        if(!loginUser){
            res.status(400).json({message:"User not founded"})
            return
        }


        res.status(200).json({
            message:"user data fetch succesfully",
            user:{
                name:loginUser.name,
                email:loginUser.email,
            }
        })


    } catch (error) {
        res.status(401).json({ message: "Invalid token" });
    }
}

export default {signup,login,me}

