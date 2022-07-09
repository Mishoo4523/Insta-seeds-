const express = require('express');
const router = express.Router();
const mongoose= require('mongoose');
const UserModel = mongoose.model('UserModel');


router.get("/",(req,res)=>{
    res.send("Welcome to ISTA BLOG !");

});

router.post('/register', (req,res)=> {
    console.log(req.body);
    const { fullName,email,password }=req.body;//object destructuring
    if(!fullName || !password|| !email ) {
       return res.status(400).json({error:"one or more mandatory field is empty"});   
  }

  //avoid duplicate user
  UserModel.findOne({email:email})
  .then((dbUser)=> {
    if(dbUser){
        return res.status(500).json({error:"User with email already exist"});   
    }
    const user = new UserModel({ fullName,email,password });
    user.save()
    .then((u)=> {
        res.status(201).json({result: "User Registered successfully"});
    
    })
    .catch((error) => {
        console.log(error);
    });
  })
  .catch((error)=> {
    console.log(error);
  });
    res.json({ result: "Registered successfully" });
});

module.exports = router;
