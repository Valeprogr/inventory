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
const validationNumericObject_1 = require("../../utils/validationNumericObject");
const Item_1 = __importDefault(require("../repo/Item"));
const createItem = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const create = yield Item_1.default.createItem(payload.article, payload.brand.toLowerCase(), payload.name.toLowerCase(), payload.category.toLowerCase(), payload.gender.toLowerCase(), payload.color.toLowerCase(), payload.s36, payload.s37, payload.s38, payload.s39, payload.s40, payload.s41, payload.s42, payload.s43, payload.s44, payload.s45);
        return create;
    }
    catch (err) {
        throw new Error(`Error createItem : Error while creating a new item , error: ${err}`);
    }
});
const updateItemService = (article, payload) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        if (!payload || Object.keys(payload).length === 0) {
            throw new Error("Request body cannot be empty");
        }
        // Trova l'elemento nel repository
        const item = yield Item_1.default.findItemByArticle(article);
        if (!item) {
            throw new Error(`The article ${article} doesn't exist`);
        }
        // Validazione dei campi
        if (!(0, validationNumericObject_1.isValidNumericObject)(payload)) {
            throw new Error("Payload contains invalid numeric fields");
        }
        // Aggiorna e salva l'item
        const updatedItem = yield Item_1.default.updateItem(payload, item);
        return updatedItem;
    }
    catch (error) {
        console.error("Error in updateItemService:", error);
        throw new Error(`Service updateItemService error: ${error.message}`);
    }
});
const deleteItem = (article) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const item = yield Item_1.default.findItemByArticle(article);
        if (!item) {
            throw new Error(`The article ${article} doesn't exist`);
        }
        const deleteItem = yield Item_1.default.deleteItem(article);
        return deleteItem;
    }
    catch (error) {
        console.error("Error in deleteItem :", error);
        throw new Error(`Service deleteItem  error: ${error.message}`);
    }
});
exports.default = {
    createItem,
    updateItemService,
    deleteItem
};
//# sourceMappingURL=Item.js.map