"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const item_1 = __importDefault(require("../models/item"));
const createItem = async (req, res, next) => {
    if (!req.body) {
        return res.status(500).json({ message: "no req body" });
    }
    console.log(req.body);
    let item = await item_1.default.findOne({ article: req.body.article });
    if (item) {
        return res.status(403).json({ message: 'This article already exist' });
    }
    else {
        const article = Math.floor(req.body.article);
        const brand = (req.body.brand).toLowerCase();
        const name = (req.body.name).toLowerCase();
        const category = (req.body.category).toLowerCase();
        const gender = (req.body.gender).toLowerCase();
        const color = (req.body.color).toLowerCase();
        const s36 = Math.floor(req.body.s36);
        const s37 = Math.floor(req.body.s37);
        const s38 = Math.floor(req.body.s38);
        const s39 = Math.floor(req.body.s39);
        const s40 = Math.floor(req.body.s40);
        const s41 = Math.floor(req.body.s41);
        const s42 = Math.floor(req.body.s42);
        const s43 = Math.floor(req.body.s43);
        const s44 = Math.floor(req.body.s44);
        const s45 = Math.floor(req.body.s45);
        //{ s36, s37, s38, s39, s40, s41, s42, s43, s44, s45 } 
        const item = new item_1.default({
            _id: new mongoose_1.default.Types.ObjectId(),
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
        });
        return item
            .save()
            .then((item) => res.status(201).json({ item }))
            .catch((error) => res.status(500).json(error));
    }
};
const findItem = (req, res, next) => {
    const itemArticle = req.params.itemArticle;
    return item_1.default.find({ article: itemArticle })
        .then((item) => (item ? res.status(200).json({ item }) : res.status(404).json({ message: 'Not found' })))
        .catch((error) => res.status(500).json({ error }));
};
const getAllItems = (req, res, next) => {
    return item_1.default.find()
        .then((items) => res.status(200).json({ items }))
        .catch((error) => res.status(500).json({ error }));
};
const updateItem = (req, res, next) => {
    const itemArticle = req.params.itemArticle;
    return item_1.default.findOne({ article: itemArticle }).then((item) => {
        if (item) {
            item.set(req.body);
            return item
                .save()
                .then((item) => res.status(201).json({ item }))
                .catch((error) => res.status(500).json({ error }));
        }
        else {
            return res.status(404).json({ message: 'Not found' });
        }
    });
};
const deleteItem = (req, res, next) => {
    const itemArticle = req.params.itemArticle;
    return item_1.default.deleteMany({ article: itemArticle })
        .then((item) => (item ? res.status(201).json({ message: 'deleted' }) : res.status(404).json({ message: 'Not found' })))
        .catch((error) => res.status(500).json({ error }));
};
exports.default = { createItem, findItem, getAllItems, updateItem, deleteItem };
