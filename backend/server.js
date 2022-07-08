const express = require('express');
const app=express();
const mongoose=require('mongoose')
const PORT=4000;


const {MONGODB_URI} = require('./config');

require('./models/user_model');

app.use((require('./routes/authntentication')));

mongoose.connect(MONGODB_URI);

mongoose.connection.on('connected', ()=> {
    console.log("connected");
});
mongoose.connection.on('error', (error)=> {
    console.log("Some error",error);
});


app.get('/', ( req,res)=>{
    res.send("Welcome!");

});

app.listen(PORT, ()=> {
    console.log("server Started");

});