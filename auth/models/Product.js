const mongoose = require("mongoose"), Schema = mongoose.Schema;

const ProductSchema = new mongoose.Schema({
    _id:Number,
    pname:String,
    price:Number
});

module.exports = mongoose.model("Product",ProductSchema);
