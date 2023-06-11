const express = require('express');

const router = express.Router();
const Product = require('../models/Product');
const Review = require('../models/Review');
router.use(express.urlencoded({extended:false}));


//get all products

router.get("/products",async(req,res)=>{
    const products = await Product.find({});

    res.render("products/index",{products});
});

router.get("/newproduct",(req,res)=>{

    res.render('products/newProduct');
});

router.post("/newproduct",(req,res)=>{
    const {name,price,desc,image} = req.body;
    Product.create({
        name:name,
        price:price,
        desc:desc,
        img:image
    });

    res.redirect("/products");
});

//show pdt route
router.get('/products/:productid',async (req,res)=>{
    const {productid} = req.params;
    const product = await Product.findById(productid).populate('reviews');
    res.render("products/show",{product});
});

router.get('/products/:productid/edit', async (req,res)=>{
    const {productid} = req.params;
    const product = await Product.findById(productid);
    
    res.render("products/edit",{product});
});

router.patch('/products/:productid', async (req,res)=>{
    const {productid} = req.params;
    const {name,price,desc,image} = req.body;
    await Product.findByIdAndUpdate(productid,{name,price,img:image,desc});
    res.redirect("/products");
});

router.delete('/products/:productid', async (req,res)=>{
    const {productid} = req.params;

    await Product.findByIdAndDelete(productid);
    res.redirect("/products");
})

module.exports = router;