"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const item_1 = __importDefault(require("../models/item"));
const createItem = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
    if (!req.body) {
        return res.status(500).json({ message: "no req body" });
    }
    console.log(req.body);
    let item = yield item_1.default.findOne({ article: req.body.article });
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
        const s36 = (_a = Math.floor(req.body.s36)) !== null && _a !== void 0 ? _a : 0;
        const s37 = (_b = Math.floor(req.body.s37)) !== null && _b !== void 0 ? _b : 0;
        const s38 = (_c = Math.floor(req.body.s38)) !== null && _c !== void 0 ? _c : 0;
        const s39 = (_d = Math.floor(req.body.s39)) !== null && _d !== void 0 ? _d : 0;
        const s40 = (_e = Math.floor(req.body.s40)) !== null && _e !== void 0 ? _e : 0;
        const s41 = (_f = Math.floor(req.body.s41)) !== null && _f !== void 0 ? _f : 0;
        const s42 = (_g = Math.floor(req.body.s42)) !== null && _g !== void 0 ? _g : 0;
        const s43 = (_h = Math.floor(req.body.s43)) !== null && _h !== void 0 ? _h : 0;
        const s44 = (_j = Math.floor(req.body.s44)) !== null && _j !== void 0 ? _j : 0;
        const s45 = (_k = Math.floor(req.body.s45)) !== null && _k !== void 0 ? _k : 0;
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
});
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
//# sourceMappingURL=Item.js.map