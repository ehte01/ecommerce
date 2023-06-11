const path = require('path');
const express = require('express');
const ejs = require('ejs');
const mongoose = require('mongoose');
const app = express();
const ejsMate = require('ejs-mate');
const productRoutes = require('./routes/productRoutes');
const reviewRoutes = require('./routes/reviewRoutes');
const methodOverride = require('method-override');
const port = 5000;

app.engine('ejs',ejsMate);
app.use(methodOverride("_method"));
mongoose.connect("mongodb://localhost/ecommerceApp").then(()=>{
    console.log("connection open");
}).catch((e)=>{
    console.log("Error during database connection",e);
});
app.use(productRoutes);
app.use(reviewRoutes);
app.set('view engine','ejs');
app.set('views',path.join(__dirname,"views"));
app.use(express.static(path.join(__dirname,"public")));   //to access public folder
app.use(express.urlencoded({extended:false}));

app.listen(port,(req,res)=>{
    console.log(`server is running on port ${port}`);
});
