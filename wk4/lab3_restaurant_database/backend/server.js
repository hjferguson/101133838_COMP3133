const express = require('express');
const mongoose = require('mongoose');
const Restaurant = require('./restaurant');

const app = express();
const port = 3000; 
app.listen(port, () => console.log(`Server running on port: ${port}`));

//connect to db
const mongoURI = process.env.MONGO_URI || 'mongodb://localhost/restaurants'; //env variable set in docker-compose
mongoose.connect(mongoURI)
    .then(()=> console.log('connected to mongodb'))
    .catch(err=> console.error('could not connect to mongodb...', err));



//get all restaurants
app.get('/restaurants', async (req,res) => {
    const restaurants = await Restaurant.find({});
    res.json(restaurants);
});

//get all restaurants filtered by cuisine type
app.get('/restaurants/cuisine/:type', async (req, res) => {
    const cuisineType = req.params.type;
    const restaurants = await Restaurant.find({cuisine: cuisineType });
    res.json(restaurants);
})

//query param sort desc or asc 
//this isn't switching between asc/desc right now, but im 3 hours deep on this lab and have
//plenty of other work I need to be doing right now. HF Feb 4th 2024
app.get('/restaurants', async (req,res) => {
    const sortBy = req.query.sortBy === 'DESC' ? '-restaurant_id' : 'restaurant_id';
    const restaurants = await Restaurant.find({}).sort(sortBy);
    res.json(restaurants);
})

//delicatessen
app.get('/restaurants/Delicatessen', async (req, res) => {
    const restaurants = await Restaurant.find({
        cuisine: 'Delicatessen',
        city: { $ne: 'Brooklyn'} //$ne means not equal to
    }, {
        restaurant_id: 0 // adding a 0 excludes it
    }).sort('name');
    res.json(restaurants);
});
