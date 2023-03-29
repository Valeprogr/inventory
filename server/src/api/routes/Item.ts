import express from "express";
import controllers from "../controllers/Item";

const router = express.Router();

router.get("/get", controllers.getAllItems);
router.get("/get/:itemArticle", controllers.findItem);
router.post("/create", controllers.createItem);
router.patch("/update/:itemArticle", controllers.updateItem);
router.delete("/delete/:itemArticle", controllers.deleteItem);

export = router;