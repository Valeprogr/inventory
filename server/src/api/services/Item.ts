import { isValidNumericObject } from "../../utils/validationNumericObject";
import { IItem } from "../models/item";
import Repo from "../repo/Item";
const createItem = async (payload: IItem) => {
    try {
        const create = await Repo.createItem(
            payload.article,
            payload.brand.toLowerCase(),
            payload.name.toLowerCase(),
            payload.category.toLowerCase(),
            payload.gender.toLowerCase(),
            payload.color.toLowerCase(),
            payload.s36,
            payload.s37,
            payload.s38,
            payload.s39,
            payload.s40,
            payload.s41,
            payload.s42,
            payload.s43,
            payload.s44,
            payload.s45);
        return create;
    } catch (err: any) {
        throw new Error(`Error createItem : Error while creating a new item , error: ${err}`);
    }
}
const updateItemService = async (article: number, payload: Record<string, any>) => {
    try {
        if (!payload || Object.keys(payload).length === 0) {
            throw new Error("Request body cannot be empty");
        }

        // Trova l'elemento nel repository
        const item = await Repo.findItemByArticle(article);
        if (!item) {
            throw new Error(`The article ${article} doesn't exist`);
        }

        // Validazione dei campi
        if (!isValidNumericObject(payload)) {
            throw new Error("Payload contains invalid numeric fields");
        }

        // Aggiorna e salva l'item
        const updatedItem = await Repo.updateItem(payload, item);

        return updatedItem;
    } catch (error: any) {
        console.error("Error in updateItemService:", error);
        throw new Error(`Service updateItemService error: ${error.message}`);
    }
};

const deleteItem = async (article: number) => {
    try {
        const item = await Repo.findItemByArticle(article);
        if (!item) {
            throw new Error(`The article ${article} doesn't exist`);
        }
        const deleteItem = await Repo.deleteItem(article);
        return deleteItem;
    } catch (error: any) {
        console.error("Error in deleteItem :", error);
        throw new Error(`Service deleteItem  error: ${error.message}`);
    }

}

export default {
    createItem,
    updateItemService,
    deleteItem
}