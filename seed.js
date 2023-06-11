const mongoose = require('mongoose');

const Product = require('./models/Products');

mongoose.connect("mongodb://localhost/ecommerceApp").then(()=>{
    console.log("connection open");
}).catch((e)=>{
    console.log("Error during database connection",e);
});

//for seeding to test db use this array to fill up the data in db
const products = [
    {
        name: "iphone11",
        price: 40000,
        desc: "this is new iphone with new A13 bionic",
        img: "https://plus.unsplash.com/premium_photo-1681333061107-1322a8d6b570?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aXBob25lfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
    },
    {
        name: "iphone12",
        price: 50000,
        desc: "this is new iphone with new A14 bionic",
        img: "https://plus.unsplash.com/premium_photo-1681333061107-1322a8d6b570?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aXBob25lfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
    },
    {
        name: "iphone13",
        price: 60000,
        desc: "this is new iphone with new A15 bionic",
        img: "https://plus.unsplash.com/premium_photo-1681333061107-1322a8d6b570?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aXBob25lfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
    },
    {
        name: "iphone14",
        price: 70000,
        desc: "this is new iphone with new A16 bionic",
        img: "https://plus.unsplash.com/premium_photo-1681333061107-1322a8d6b570?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aXBob25lfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
    },
    {
        name: "iphone14 Plus",
        price: 80000,
        desc: "this is new iphone with new A16 bionic",
        img: "https://plus.unsplash.com/premium_photo-1681333061107-1322a8d6b570?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aXBob25lfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
    },
    {
        name: "iphone14 Pro",
        price: 120000,
        desc: "this is new iphone with new A16 bionic",
        img: "https://plus.unsplash.com/premium_photo-1681333061107-1322a8d6b570?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aXBob25lfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
    },
    {
        name: "iphone14 Pro Max",
        price: 140000,
        desc: "this is new iphone with new A16 bionic",
        img: "https://plus.unsplash.com/premium_photo-1681333061107-1322a8d6b570?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aXBob25lfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
    }
];



//insert these to db
async function seedProducts(){
    await Product.deleteMany({});
    await Product.insertMany(products);
    console.log("product has been seeded");
}

seedProducts();