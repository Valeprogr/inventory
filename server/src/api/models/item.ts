import mongoose, { Schema } from "mongoose";

export interface IItem{
    article: number;
    brand: string,
    name: string;
    category: string;
    gender: string,
    color: string;
    size: string;
    quantity: string;
}

export interface IItemModel extends IItem, Document{ }

const ItemSchema = new Schema({
    article: { type: Number },
    brand: { type: String, require: true },
    name: { type: String, require: true },
    category: { type: String, require: true },
    gender: { type: String, require: true },
    color: { type: String, require: true },
    size: { type: String, require: true },
    quantity: { type: String, }
});

export default mongoose.model<IItemModel>('Item', ItemSchema);