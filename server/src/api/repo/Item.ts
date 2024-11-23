import mongoose from "mongoose";
import Item, { IItem } from "../models/item";

const findItemByArticle = async (article: number) => {
    try {
        let item = await Item.findOne({ article: article });
        return item;
    } catch (err: any) {
        throw new Error(`Error findItemByArticle: While fetching article: ${article}`);
    }
}


const createItem = async (
    article: number,
    brand: string,
    name: string,
    category: string,
    gender: string,
    color: string,
    s36: number,
    s37: number,
    s38: number,
    s39: number,
    s40: number,
    s41: number,
    s42: number,
    s43: number,
    s44: number,
    s45: number) => {
    try {
        const item = new Item({
            _id: new mongoose.Types.ObjectId(),
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
        await item.save();
        return item

    } catch (err: any) {
        throw new Error(`Error createItem Repo : ${err}`);
    }
}

const getAllItems = async () => {
    try {
        let items = await Item.find();
        if (!items) items = [];
        return items;
    } catch (err: any) {
        throw new Error(`Error getAllItems: While fetching  all items `);
    }
}

const updateItem = async (payload: Record<string, any>, item: any) => {
    try {
       // Applies payload fields to the item object
       Object.assign(item, payload);

       // Save the updated object
       const updatedItem = await item.save();
       return updatedItem;

    } catch (err: any) {
        throw new Error(`Error updateItem Repo : ${err}`);
    }
}

const deleteItem = async ( article: number) => {
    try {
        // const updatedItem = await item.deleteItem(item);
        const deleteItem = await Item.deleteMany({ article: article });
        if ( deleteItem.deletedCount > 0) {
            return 'Deleted successfully';
        } else {
            throw new Error('Item not found');
        }
 
     } catch (err: any) {
         throw new Error(`Error deleteItem Repo : ${err}`);
     }
}

export default {
    findItemByArticle,
    createItem,
    getAllItems,
    updateItem,
    deleteItem
}