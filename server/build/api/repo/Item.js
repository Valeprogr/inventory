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
const findItemByArticle = (article) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let item = yield item_1.default.findOne({ article: article });
        return item;
    }
    catch (err) {
        throw new Error(`Error findItemByArticle: While fetching article: ${article}`);
    }
});
const createItem = (article, brand, name, category, gender, color, s36, s37, s38, s39, s40, s41, s42, s43, s44, s45) => __awaiter(void 0, void 0, void 0, function* () {
    try {
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
        yield item.save();
        return item;
    }
    catch (err) {
        throw new Error(`Error createItem Repo : ${err}`);
    }
});
const getAllItems = (offset, limit) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let items = yield item_1.default.find();
        if (!items)
            items = [];
        return items;
    }
    catch (err) {
        throw new Error(`Error getAllItems: While fetching  all items `);
    }
});
const updateItem = (payload, item) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // Applies payload fields to the item object
        Object.assign(item, payload);
        // Save the updated object
        const updatedItem = yield item.save();
        return updatedItem;
    }
    catch (err) {
        throw new Error(`Error updateItem Repo : ${err}`);
    }
});
const deleteItem = (article) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // const updatedItem = await item.deleteItem(item);
        const deleteItem = yield item_1.default.deleteMany({ article: article });
        if (deleteItem.deletedCount > 0) {
            return 'Deleted successfully';
        }
        else {
            throw new Error('Item not found');
        }
    }
    catch (err) {
        throw new Error(`Error deleteItem Repo : ${err}`);
    }
});
exports.default = {
    findItemByArticle,
    createItem,
    getAllItems,
    updateItem,
    deleteItem
};
//# sourceMappingURL=Item.js.map