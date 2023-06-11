const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({

    rating: Number,
    comment: String,
});

//now create a model out of this Schema
const Review = mongoose.model("Review",reviewSchema);   //this is product model
module.exports = Review;