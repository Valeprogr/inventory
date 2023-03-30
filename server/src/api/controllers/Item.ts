import { NextFunction, Request, Response } from "express"; 
import mongoose from "mongoose";
import Item from "../models/item";

const createItem =async (req:Request, res: Response, next: NextFunction) => {
    if (!req.body) {
        return res.status(500).json({message: "no req body"})
    }
    console.log(req.body)
    let item = await Item.findOne({ article: req.body._id })
    if (item) {
        return res.status(403).json({message: 'This article already exist'})
    } else {
        const article = Math.floor(req.body.article);
        const brand = req.body.brand;
        const name = req.body.name;
        const category = (req.body.category).toLowerCase();
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
            .catch((error)=> res.status(500).json(error))
    }
}

const findItem = (req: Request, res: Response, next: NextFunction) => {
    const itemArticle = req.params.itemArticle;
    return Item.find({ article: itemArticle})
        .then((item) => (item ? res.status(200).json({ item }) : res.status(404).json({ message: 'Not found' })))
        .catch((error)=>res.status(500).json({error}))
    
}

const getAllItems = (req: Request, res: Response, next: NextFunction) => {
    return Item.find()
        .then((items) => res.status(200).json({ items }))
        .catch((error)=> res.status(500).json({error}))
}

const updateItem = (req: Request, res: Response, next: NextFunction) => {
    const itemArticle = req.params.itemArticle;
    return Item.findOne({ article: itemArticle }).then((item) => {
        if (item) {
            item.set(req.body);
            return item
                .save()
                .then((item) => res.status(201).json({ item }))
                .catch((error) => res.status(500).json({ error }))
        } else {
            return res.status(404).json({ message: 'Not found' });
        }
    });
}

const deleteItem = (req: Request, res: Response, next: NextFunction) => {
    const itemArticle = req.params.itemArticle;
    return Item.findOneAndDelete({ article: itemArticle })
        .then((item) => (item ? res.status(201).json({ message: 'deleted' }) : res.status(404).json({ message: 'Not found' })))
        .catch((error)=> res.status(500).json({error}))
}
export default { createItem, findItem, getAllItems, updateItem, deleteItem }