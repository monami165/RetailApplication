var express = require("express");
var router = express.Router();

var ProductController = require("../controllers/ProductController.js")

router.get("/productFromDb",ProductController.GetProductFromDb); // sub path; if this request, send to this controller
router.get("/productInfoById/:id",ProductController.GetProductById); // sub path using path param
router.post("/storeProduct",ProductController.StoreProductInfo); // store product info
router.put("/updateProduct",ProductController.UpdateProductInfo); // update product details
router.delete("/deleteProductById/:id",ProductController.DeleteProductInfo); // delete product using Id

module.exports = router;