import { Request, Response } from "express";
import User from "../DB/Models/UserModel";

/**
 * Get user profile
 */

export const getUserName = async(req:Request, res: Response)=> {
  const {username} = req.params;

  try{
    const user = await User.findOne({username});
    if(!user){
      return res.status(404).json({message: "User not found."});
    }
    res.status(200).json(user);
  }catch(error){
    res.status(500).json({message:"Failed to fetch user profile."});
  }
};


/**
 * Current user profile
 */

export const currentUserProfile = async (req: Request, res: Response)=>{
  try{
    const userId = req.params.id;
    const user = await User.findById(userId);
    if(!user){
      return res.status(404).json({message:"User not found."});
    }
    res.status(200).json(user);
  }catch(error){
    res.status(500).json({message:"Failed to fetch user profile."});
  }
};

/**
 * Edit User Profile
 */

export const editUserProfile = async (req: Request, res: Response)=> {

  const {user}= req.params;
  if(!user){
    return res.status(401).json({message:"Unauthorized"});
  }
  try{
    const userId = req.params.id;

    const user = await User.findById(userId);

    if(!user){
      return res.status(404).json({message:"User not found."});
    }

    if(req.body.email){
      user.email = req.body.email;
    }
    await user.save();
    res.status(200).json(user);
  }catch(error){
    res.status(500).json({message:"Failed to update user profile"});
  }
};
