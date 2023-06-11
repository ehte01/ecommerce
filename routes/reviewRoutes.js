const express = require('express');

const router = express.Router();
const Product = require('../models/Product');
const Review = require('../models/Review');


router.post('/products/:productid/review',async (req,res)=>{

    const {productid} = req.params;
    const {rating,comment} = req.body;

    //find the product with given id
    const product = await Product.findById(productid);
    //create review

    const review = await Review.create({rating,comment});
    //now create relation b/w review and product by passing the ref
    product.reviews.push(review);     //reviews array hai and permanently add krne ke liye save()
    product.save(); 
    res.redirect(`/products/${productid}`);
});

router.delete('/products/:productid/:reviewid',async (req,res)=>{
    const {productid,reviewid} = req.params;
    const product = await Product.findById(productid);
    await Review.findByIdAndDelete(reviewid);
    await product.reviews.filter((review)=>{
        return (review._id!=reviewid);
    });
    product.save();

    res.redirect(`/products/${productid}`);
})


module.exports = router;