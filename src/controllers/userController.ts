import { Request, Response } from "express";
import User from "../models/user";
import { error } from "console";

//get all users in db
export const getUser = async (req: Request, res: Response) => {
    try{
        const users = await User.find();
        res.status(200).json(users);
    }catch(err) {
        res.status(500).json({message: 'Error to find data', error: err});
    }
};
//add new user in db
export const addUser = async (req: Request, res: Response) => {
    const {name, age, gender, subject, position} = req.body;
    const newUser = new User({name, age, gender, subject, position});

    try{
        await newUser.save();
        res.status(201).json(newUser);
    }catch(err) {
        res.status(500).json({message: 'Error to add new user', error: err})
    }
}
//update user in db
export const updateUser = async (req: Request, res: Response) => {
    const {id} = req.params;
    const {name, age, gender, subject, position} = req.body;

    try{
        const updateUser = await User.findByIdAndUpdate(
            id,
            {name, age, gender, subject, position},
            {new: true}
        )
        if (!updateUser) {
            res.status(404).json({message: 'Not found user'})
        }
    }catch (err) {
        res.status(500).json({message:'Error updating user', error: err})
    }
}
//remove user from db
export const removeUser = async (req: Request, res: Response) => {
    const {id} = req.params
    console.log(id, "id")
    try {
        const removeUser = await User.findByIdAndDelete(id, {new: true});
        res.status(200).json({message: 'Success'})
    }catch(err) {
        res.status(500).json({message: 'Error to remove user', error: err});
    }
}