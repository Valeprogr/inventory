import { NextFunction, Request, Response } from "express";
import mongoose from "mongoose";
import Item from "../models/item";


const createItem = async (req: Request, res: Response, next: NextFunction) => {
    if (!req.body) {
        return res.status(500).json({ message: "no req body" })
    }
    console.log(req.body)
    let item = await Item.findOne({ article: req.body.article })
    if (item) {
        return res.status(403).json({ message: 'This article already exist' })
    } else {
        const article = Math.floor(req.body.article);
        const brand = (req.body.brand).toLowerCase();
        const name = (req.body.name).toLowerCase();
        const category = (req.body.category).toLowerCase();
        const gender = (req.body.gender).toLowerCase();
        const color = (req.body.color).toLowerCase();
        const s36 = Math.floor(req.body.s36) ?? 0;
        const s37 = Math.floor(req.body.s37) ?? 0;
        const s38 = Math.floor(req.body.s38) ?? 0;
        const s39 = Math.floor(req.body.s39) ?? 0;
        const s40 = Math.floor(req.body.s40) ?? 0;
        const s41 = Math.floor(req.body.s41) ?? 0;
        const s42 = Math.floor(req.body.s42) ?? 0;
        const s43 = Math.floor(req.body.s43) ?? 0;
        const s44 = Math.floor(req.body.s44) ?? 0;
        const s45 = Math.floor(req.body.s45) ?? 0;
        //{ s36, s37, s38, s39, s40, s41, s42, s43, s44, s45 } 

        const item = new Item({
            _id: new mongoose.Types.ObjectId(),
            article,
            brand,
            name,
            category,
            gender,
            color,
            s36,
            s37,
            s38,
            s39,
            s40,
            s41,
            s42,
            s43,
            s44,
            s45
        })
        return item
            .save()
            .then((item) => res.status(201).json({ item }))
            .catch((error) => res.status(500).json(error));
    }


}

const findItem = (req: Request, res: Response, next: NextFunction) => {
    const itemArticle = req.params.itemArticle;
    return Item.find({ article: itemArticle })
        .then((item) => (item ? res.status(200).json({ item }) : res.status(404).json({ message: 'Not found' })))
        .catch((error) => res.status(500).json({ error }))

}

const getAllItems = (req: Request, res: Response, next: NextFunction) => {
    return Item.find()
        .then((items) => res.status(200).json({ items }))
        .catch((error) => res.status(500).json({ error }))
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
    return Item.deleteMany({ article: itemArticle })
        .then((item) => (item ? res.status(201).json({ message: 'deleted' }) : res.status(404).json({ message: 'Not found' })))
        .catch((error) => res.status(500).json({ error }))
}
export default { createItem, findItem, getAllItems, updateItem, deleteItem }