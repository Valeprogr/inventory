import { NextFunction, Request, Response } from "express";
import Item from "../models/item";
import Repo from "../repo/Item";
import Services from "../services/Item";
import { isValidNumericObject } from "../../utils/validationNumericObject";


const createItem = async (req: Request, res: Response, next: NextFunction) => {
    if (!req.body) return res.status(404).json({ message: "no req body" });
    let item = await Repo.findItemByArticle(req.body.article);
    if (item) return res.status(400).json({ message: 'This article already exist' });

    const article = Number(req.body.article);
    const brand = req.body.brand;
    const name = req.body.name;
    const category = req.body.category;
    const gender = req.body.gender;
    const color = req.body.color;
    const s36 = !isNaN(Number(req.body.s36)) ? Number(req.body.s36) : 0;
    const s37 = !isNaN(Number(req.body.s37)) ? Number(req.body.s37) : 0;
    const s38 = !isNaN(Number(req.body.s38)) ? Number(req.body.s38) : 0;
    const s39 = !isNaN(Number(req.body.s39)) ? Number(req.body.s39) : 0;
    const s40 = !isNaN(Number(req.body.s40)) ? Number(req.body.s40) : 0;
    const s41 = !isNaN(Number(req.body.s41)) ? Number(req.body.s41) : 0;
    const s42 = !isNaN(Number(req.body.s42)) ? Number(req.body.s42) : 0;
    const s43 = !isNaN(Number(req.body.s43)) ? Number(req.body.s43) : 0;
    const s44 = !isNaN(Number(req.body.s44)) ? Number(req.body.s44) : 0;
    const s45 = !isNaN(Number(req.body.s45)) ? Number(req.body.s45) : 0;


    if (!article) return res.status(400).json({ message: `Please enter a valid article:${article}` });
    if (!brand || typeof brand !== "string" || brand === "") return res.status(400).json({ message: `Please enter a valid brand:${brand}` });
    if (!category || typeof category !== "string" || category === "") return res.status(400).json({ message: `Please enter a valid category:${category}` });
    if (!gender || typeof gender !== "string" || gender === "") return res.status(400).json({ message: `Please enter a valid gender:${gender}` });
    if (!color || typeof color !== "string" || color === "") return res.status(400).json({ message: `Please enter a valid category:${color}` });

    try {
        const payload = {
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
        }
        const createItem = await Services.createItem(payload);
        return res.status(201).json({ createItem });

    } catch (err: any) {
        console.error("Error in createItem controllers:", err); // Debug
        return res.status(500).json({ message: `Error while creating a new item: ${err.message}` });
    }


}

const findItem = async (req: Request, res: Response, next: NextFunction) => {
    const article = Number(req.params.itemArticle);
    try {
        let item = await Repo.findItemByArticle(article);
        if (!item) return res.status(404).json({ message: `Item ${article} Not found` });
        return item
    } catch (err: any) {
        return res.status(500).json({ message: `Error findItem : while fetching an article  ${article}, error : ${err.message}` });
    }

}

const getAllItems = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const items = await Repo.getAllItems();
        return items;
    } catch (err: any) {
        return res.status(500).json({ message: `Error getAllItems : while fetching all items error : ${err}` });

    }
}


const updateItem = async (req: Request, res: Response, next: NextFunction) => {
    try {
        if (!req.body) return res.status(404).json({ message: "no req body" });
        const article = req.params.itemArticle;
        let updatedItem = await Services.updateItemService(Number(article), req.body);

        return res.status(200).json({ updatedItem });
    } catch (err: any) {
        console.error("Error in  updateItem controllers:", err); // Debug
        return res.status(500).json({ message: `Error while updating item: ${err.message}` });
    }

}

const deleteItem = async(req: Request, res: Response, next: NextFunction) => {
    try {
        if (!req.body) return res.status(404).json({ message: "no req body" });
        const article = req.params.itemArticle;
        let deletedItem = await Services.deleteItem(Number(article));

        return res.status(200).json({ deletedItem });
    } catch (err: any) {
        console.error("Error in  deleteItem controllers:", err); // Debug
        return res.status(500).json({ message: `Error while deleting item: ${err.message}` });
    }
}
export default { createItem, findItem, getAllItems, updateItem, deleteItem }