const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({

    name: String,
    price: Number,
    img: String,
    desc: String,
    reviews:[{

        type: mongoose.Schema.Types.ObjectId,
        ref: "Review"

    }]
});

//now create a model out of this Schema
const Product = mongoose.model("Products",productSchema);   //this is product model
module.exports = Product;