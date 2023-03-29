import { NextFunction, Request, Response } from "express"; 
import mongoose from "mongoose";
import Item from "../models/Item";

const createItem =async (req:Request, res: Response, next: NextFunction) => {
    if (!req.body) {
        return res.status(500).json({message: "no req body"})
    }
    console.log(req.body)
    const item = await Item.findOne({ article: req.body.article })
    if (item) {
        return res.status(403).json({message: 'This article already exist'})
    } else {
        const article = req.body.article;
        const brand = req.body.brand;
        const name = req.body.name;
        const category = req.body.category;
        const gender = req.body.gender;
        const color = req.body.color;
        const size = req.body.size;
        const quantity = req.body.quantity;
  
        const item = new Item({
            _id: new mongoose.Types.ObjectId(),
            article,
            brand,
            name,
            category,
            gender,
            color,
            size,
            quantity
        })
        return item
            .save()
            .then((item) => res.status(201).json({ item }))
            .then((error)=> res.status(500).json(error))
    }
}
export default { createItem }