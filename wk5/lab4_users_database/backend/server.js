const express = require('express');
const mongoose = require('mongoose');
const Users = require('./users.js');

const app = express();
const port = 3000; 


//connect to db
const mongoURI = process.env.MONGO_URI || 'mongodb://localhost/users'; //env variable set in docker-compose
mongoose.connect(mongoURI)
    .then(()=> console.log('connected to mongodb'))
    .catch(err=> console.error('could not connect to mongodb...', err));

app.use(express.json());

//Requests
app.post('/users', async (req, res) => {
    try{
        const user = new Users(req.body);
        await user.save();
        res.status(201).send(user);
    }catch(error){
        res.status(400).send(error.message);
    }
});


app.listen(port, () => console.log(`Server running on port: ${port}`));