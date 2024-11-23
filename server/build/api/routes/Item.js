"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const express_1 = __importDefault(require("express"));
const Item_1 = __importDefault(require("../controllers/Item"));
const router = express_1.default.Router();
router.get("/allShoes", Item_1.default.getAllItems);
router.get("/shoesModel/:itemArticle", Item_1.default.findItem);
router.post("/addModel", Item_1.default.createItem);
router.patch("/editSizes/:itemArticle", Item_1.default.updateItem);
router.delete("/deleteModel/:itemArticle", Item_1.default.deleteItem);
module.exports = router;
//# sourceMappingURL=Item.js.map