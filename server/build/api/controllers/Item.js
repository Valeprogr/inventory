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
const Item_1 = __importDefault(require("../repo/Item"));
const Item_2 = __importDefault(require("../services/Item"));
const createItem = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    if (!req.body)
        return res.status(404).json({ message: "no req body" });
    let item = yield Item_1.default.findItemByArticle(req.body.article);
    if (item)
        return res.status(400).json({ message: 'This article already exist' });
    const article = Number(req.body.article);
    const brand = req.body.brand;
    const name = req.body.name;
    const category = req.body.category;
    const gender = req.body.gender;
    const color = req.body.color;
    const s36 = !isNaN(Number(req.body.s36)) ? Number(req.body.s36) : 0;
    const s37 = !isNaN(Number(req.body.s37)) ? Number(req.body.s37) : 0;
    const s38 = !isNaN(Number(req.body.s38)) ? Number(req.body.s38) : 0;
    const s39 = !isNaN(Number(req.body.s39)) ? Number(req.body.s39) : 0;
    const s40 = !isNaN(Number(req.body.s40)) ? Number(req.body.s40) : 0;
    const s41 = !isNaN(Number(req.body.s41)) ? Number(req.body.s41) : 0;
    const s42 = !isNaN(Number(req.body.s42)) ? Number(req.body.s42) : 0;
    const s43 = !isNaN(Number(req.body.s43)) ? Number(req.body.s43) : 0;
    const s44 = !isNaN(Number(req.body.s44)) ? Number(req.body.s44) : 0;
    const s45 = !isNaN(Number(req.body.s45)) ? Number(req.body.s45) : 0;
    if (!article)
        return res.status(400).json({ message: `Please enter a valid article:${article}` });
    if (!brand || typeof brand !== "string" || brand === "")
        return res.status(400).json({ message: `Please enter a valid brand:${brand}` });
    if (!category || typeof category !== "string" || category === "")
        return res.status(400).json({ message: `Please enter a valid category:${category}` });
    if (!gender || typeof gender !== "string" || gender === "")
        return res.status(400).json({ message: `Please enter a valid gender:${gender}` });
    if (!color || typeof color !== "string" || color === "")
        return res.status(400).json({ message: `Please enter a valid category:${color}` });
    try {
        const payload = {
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
        };
        const createItem = yield Item_2.default.createItem(payload);
        return res.status(201).json({ createItem });
    }
    catch (err) {
        console.error("Error in createItem controllers:", err); // Debug
        return res.status(500).json({ message: `Error while creating a new item: ${err.message}` });
    }
});
const findItem = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const article = Number(req.params.itemArticle);
    try {
        let item = yield Item_1.default.findItemByArticle(article);
        if (!item)
            return res.status(404).json({ message: `Item ${article} Not found` });
        return item;
    }
    catch (err) {
        return res.status(500).json({ message: `Error findItem : while fetching an article  ${article}, error : ${err.message}` });
    }
});
const getAllItems = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const items = yield Item_1.default.getAllItems();
        return items;
    }
    catch (err) {
        return res.status(500).json({ message: `Error getAllItems : while fetching all items error : ${err}` });
    }
});
const updateItem = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        if (!req.body)
            return res.status(404).json({ message: "no req body" });
        const article = req.params.itemArticle;
        let updatedItem = yield Item_2.default.updateItemService(Number(article), req.body);
        return res.status(200).json({ updatedItem });
    }
    catch (err) {
        console.error("Error in  updateItem controllers:", err); // Debug
        return res.status(500).json({ message: `Error while updating item: ${err.message}` });
    }
});
const deleteItem = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        if (!req.body)
            return res.status(404).json({ message: "no req body" });
        const article = req.params.itemArticle;
        let deletedItem = yield Item_2.default.deleteItem(Number(article));
        return res.status(200).json({ deletedItem });
    }
    catch (err) {
        console.error("Error in  deleteItem controllers:", err); // Debug
        return res.status(500).json({ message: `Error while deleting item: ${err.message}` });
    }
});
exports.default = { createItem, findItem, getAllItems, updateItem, deleteItem };
//# sourceMappingURL=Item.js.map