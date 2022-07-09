const express = require('express');
const router = express.Router();
const mongoose= require('mongoose');
const protectedResource=require('../middleware/protectedResource');
const PostModel = mongoose.model('PostModel');


const { route } = require('./authentication');

router.post('/creatpost',protectedResource ,(req,res) =>{
    const {title,body}= req.body;
    if( !title || !body ){
        return res.status(400).json({error:"one or more mandatory field is empty"});  
    }
    console.log(req.dbUser);
    res.send('Done!');
    //const post = new PostModel({title:title,body:body,author: })
});

module.export=router;

