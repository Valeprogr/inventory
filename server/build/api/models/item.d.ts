import mongoose from "mongoose";
export interface IItem {
    article: number;
    brand: string;
    name: string;
    category: string;
    gender: string;
    color: string;
    s36: number;
    s37: number;
    s38: number;
    s39: number;
    s40: number;
    s41: number;
    s42: number;
    s43: number;
    s44: number;
    s45: number;
}
export interface IItemModel extends IItem, Document {
}
declare const _default: mongoose.Model<IItemModel, {}, {}, {}, mongoose.Document<unknown, {}, IItemModel> & Omit<IItemModel & {
    _id: mongoose.Types.ObjectId;
}, never>, any>;
export default _default;
