"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importStar(require("mongoose"));
const ItemSchema = new mongoose_1.Schema({
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
//# sourceMappingURL=item.js.map