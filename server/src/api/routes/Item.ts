import express from "express";
import controllers from "../controllers/Item";

const router = express.Router();

router.get("/allShoes", controllers.getAllItems);
router.get("/shoesModel/:itemArticle", controllers.findItem);
router.post("/addModel", controllers.createItem);
router.patch("/editSizes/:itemArticle", controllers.updateItem);
router.delete("/deleteModel/:itemArticle", controllers.deleteItem);

export = router;