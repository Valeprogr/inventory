"use strict";
var express_1 = require("express");
var Item_1 = require("../controllers/Item");
var router = express_1.default.Router();
router.get("/get", Item_1.default.getAllItems);
router.get("/get/:itemArticle", Item_1.default.findItem);
router.post("/create", Item_1.default.createItem);
router.patch("/update/:itemArticle", Item_1.default.updateItem);
router.delete("/delete/:itemArticle", Item_1.default.deleteItem);
module.exports = router;
