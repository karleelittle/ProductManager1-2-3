//title, description, price
const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({

    title:{
        type: String
    },

    price:{
        type: Number
    },

    description:{
        type: String
    }

    //_id is created everytime we create a new product/document

}, {timestamps:true})

const Product = mongoose.model("Product", ProductSchema);

module.exports = Product;