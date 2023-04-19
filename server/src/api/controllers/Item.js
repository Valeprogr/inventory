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
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var item_1 = require("../models/item");
var createItem = function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var item, article, brand, name_1, category, gender, color, s36, s37, s38, s39, s40, s41, s42, s43, s44, s45, item_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (!req.body) {
                    return [2 /*return*/, res.status(500).json({ message: "no req body" })];
                }
                console.log(req.body);
                return [4 /*yield*/, item_1.default.findOne({ article: req.body.article })];
            case 1:
                item = _a.sent();
                if (item) {
                    return [2 /*return*/, res.status(403).json({ message: 'This article already exist' })];
                }
                else {
                    article = Math.floor(req.body.article);
                    brand = (req.body.brand).toLowerCase();
                    name_1 = (req.body.name).toLowerCase();
                    category = (req.body.category).toLowerCase();
                    gender = (req.body.gender).toLowerCase();
                    color = (req.body.color).toLowerCase();
                    s36 = Math.floor(req.body.s36);
                    s37 = Math.floor(req.body.s37);
                    s38 = Math.floor(req.body.s38);
                    s39 = Math.floor(req.body.s39);
                    s40 = Math.floor(req.body.s40);
                    s41 = Math.floor(req.body.s41);
                    s42 = Math.floor(req.body.s42);
                    s43 = Math.floor(req.body.s43);
                    s44 = Math.floor(req.body.s44);
                    s45 = Math.floor(req.body.s45);
                    item_2 = new item_1.default({
                        _id: new mongoose_1.default.Types.ObjectId(),
                        article: article,
                        brand: brand,
                        name: name_1,
                        category: category,
                        gender: gender,
                        color: color,
                        s36: s36,
                        s37: s37,
                        s38: s38,
                        s39: s39,
                        s40: s40,
                        s41: s41,
                        s42: s42,
                        s43: s43,
                        s44: s44,
                        s45: s45
                    });
                    return [2 /*return*/, item_2
                            .save()
                            .then(function (item) { return res.status(201).json({ item: item }); })
                            .catch(function (error) { return res.status(500).json(error); })];
                }
                return [2 /*return*/];
        }
    });
}); };
var findItem = function (req, res, next) {
    var itemArticle = req.params.itemArticle;
    return item_1.default.find({ article: itemArticle })
        .then(function (item) { return (item ? res.status(200).json({ item: item }) : res.status(404).json({ message: 'Not found' })); })
        .catch(function (error) { return res.status(500).json({ error: error }); });
};
var getAllItems = function (req, res, next) {
    return item_1.default.find()
        .then(function (items) { return res.status(200).json({ items: items }); })
        .catch(function (error) { return res.status(500).json({ error: error }); });
};
var updateItem = function (req, res, next) {
    var itemArticle = req.params.itemArticle;
    return item_1.default.findOne({ article: itemArticle }).then(function (item) {
        if (item) {
            item.set(req.body);
            return item
                .save()
                .then(function (item) { return res.status(201).json({ item: item }); })
                .catch(function (error) { return res.status(500).json({ error: error }); });
        }
        else {
            return res.status(404).json({ message: 'Not found' });
        }
    });
};
var deleteItem = function (req, res, next) {
    var itemArticle = req.params.itemArticle;
    return item_1.default.deleteMany({ article: itemArticle })
        .then(function (item) { return (item ? res.status(201).json({ message: 'deleted' }) : res.status(404).json({ message: 'Not found' })); })
        .catch(function (error) { return res.status(500).json({ error: error }); });
};
exports.default = { createItem: createItem, findItem: findItem, getAllItems: getAllItems, updateItem: updateItem, deleteItem: deleteItem };
