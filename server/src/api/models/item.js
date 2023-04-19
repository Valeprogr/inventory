"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var ItemSchema = new mongoose_1.Schema({
    article: { type: Number },
    brand: { type: String, require: true },
    name: { type: String, require: true },
    category: { type: String, require: true },
    gender: { type: String, require: true },
    color: { type: String, require: true },
    s36: { type: Number, default: 0 },
    s37: { type: Number, default: 0 },
    s38: { type: Number, default: 0 },
    s39: { type: Number, default: 0 },
    s40: { type: Number, default: 0 },
    s41: { type: Number, default: 0 },
    s42: { type: Number, default: 0 },
    s43: { type: Number, default: 0 },
    s44: { type: Number, default: 0 },
    s45: { type: Number, default: 0 }
});
exports.default = mongoose_1.default.model('Item', ItemSchema);
