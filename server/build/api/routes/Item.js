"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const express_1 = __importDefault(require("express"));
const Item_1 = __importDefault(require("../controllers/Item"));
const router = express_1.default.Router();
router.get("/get", Item_1.default.getAllItems);
router.get("/get/:itemArticle", Item_1.default.findItem);
router.post("/create", Item_1.default.createItem);
router.patch("/update/:itemArticle", Item_1.default.updateItem);
router.delete("/delete/:itemArticle", Item_1.default.deleteItem);
module.exports = router;
//# sourceMappingURL=Item.js.map