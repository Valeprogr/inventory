import mongoose, { Schema } from "mongoose";

export interface IItem{
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

export interface IItemModel extends IItem, Document{ }



const ItemSchema = new Schema({
    article: { type: Number },
    brand: { type: String, require: true },
    name: { type: String, require: true },
    category: { type: String, require: true },
    gender: { type: String, require: true },
    color: { type: String, require: true },
    s36: {type: Number, default:0},
    s37: {type: Number, default:0},
    s38: {type: Number, default:0},
    s39: {type: Number, default:0},
    s40: {type: Number, default:0},
    s41: {type: Number, default:0},
    s42: {type: Number, default:0},
    s43: {type: Number, default:0},
    s44: {type: Number, default:0},
    s45: {type: Number, default:0}
   
});

export default mongoose.model<IItemModel>('Item', ItemSchema);