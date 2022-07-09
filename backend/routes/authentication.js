const express = require('express');
const router = express.Router();
const mongoose= require('mongoose');
const UserModel = mongoose.model('UserModel');
const bcrypt = require('bcryptjs');


router.get("/",(req,res)=>{
    res.send("Welcome to ISTA BLOG !");

});

router.post('/login', (req,res)=>{
    const {email,password}= req.body;
    if( !email || !password ){
        return res.status(400).json({error:"one or more mandatory field is empty"});  
    }
    UserModel.findOne({email:email})
    .then((dbuser)=>{
        if(!dbUser){ //User nod found
            return res.status(400).json({error:"user not exist!"});  

        }
        bcrypt.compare(password,dbUSer.password)
        .then((didMatch)=>{
            if(didMatch){
                return res.status(201).json({error:"User Logged In successfully"});  
            } else {
                return res.status(400).json({error:"Invalid credentials!"});  
            }
        });
    })
    .catch((error)=> {
        console.log(error);
    });
});



router.post('/register', (req,res)=> {
    console.log(req.body);
    const { fullName,email,password }=req.body;//object destructuring
    const user = '';
    if(!fullName || !password|| !email ) {
       return res.status(400).json({error:"one or more mandatory field is empty"});   
  }

  //avoid duplicate user
  UserModel.findOne({email:email})
  .then((dbUser)=> {
    if(dbUser){
        return res.status(500).JSON({error:"User with email already exist"});   
    }
    bycrypt.hash(password,16)
    .then((hashedPassword)=>{
         user = new UserModel({ fullName,email,password ,hashedPassword}); user.save()
         .then((u)=> {
             res.status(201).json({result: "User Registered successfully"});
         
         })
         .catch((error) => {
             console.log(error);
         });

    });
   
   
  })
  .catch((error)=> {
    console.log(error);
  });
    res.json({ result: "Registered successfully" });
});

module.exports = router;
