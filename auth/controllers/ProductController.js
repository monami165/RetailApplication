var Product = require("../models/Product.js")

// retrieve product details from DB

var GetProductFromDb = (req,res) => {
    Product.find({},(err,data) => {
        if (err) throw err;

            res.json(data);

    })
}

var GetProductById = (req,res) => {
    var idInfo = req.params.id;
    Product.find({_id:idInfo},(err,data) => {
        if (err) throw err;
        res.json(data);
    });
}

var StoreProductInfo = (req,res) => {
    let product = new Product({    // {pid:106,pname:"Computer",price:56000}
        _id:req.body._id,
        pname:req.body.pname,
        price:req.body.price
    });

    product.save((err,result) => {
        if (err) {
            // throw err;
            res.json({"msg":"Id must be unique"});
        } else {
            //res.send("record stored successfully");
            res.json({"msg":"record stored successfully"});
        }
    });
}

var UpdateProductInfo = (req,res) => { // {pid:100,pname:"TV 65 inch",price:160000}
    var updateId = req.body._id;
    var updateName = req.body.pname;
    var updatePrice = req.body.price;
    Product.update({_id:updateId},{$set:{pname:updateName,price:updatePrice}},(err,result) => {
        if (err) throw err;
        console.log(result);
        // res.send("record updated"+result);
        if (result.nModified > 0) {
            res.json({"msg":"record(s) updated successfully"})
        } else {
            res.json({"msg":"no record affected"})
        }
    });
}

var DeleteProductInfo = (req,res) => {
    var deleteId = req.params.id;
    Product.deleteOne({_id:deleteId},(err,result) => {
        if (err) throw err;
        // res.send("record deleted"+result.deleteCount);
        if (result.deletedCount > 0) {
            // res.send(result.deletedCount + "record(s) deleted successfully")
            res.json({"msg":"record deleted successfully"});
        } else {
            // res.send("no records effected")
            res.json({"msg":"record not present"})
        }
    })
}

module.exports = {GetProductFromDb,GetProductById,StoreProductInfo,UpdateProductInfo,DeleteProductInfo};