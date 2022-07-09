const JWT= require('jsonwebtoken');
const {JWT_SECRET}=require('../config');

const mongoose= require('mongoose');
const UserModel = mongoose.model('UserModel');




module.exports= (req,res,next) => {

    const {authorization} = req.headers;
    //authorization -> bearer hgfhfghfhfhf
    if(!authorization) {
        return res.status(401).json({error:"user not logged in " });

    }
    const token = authorization.replace("Bearer ", "");
    JWT.verify(token , JWT_SECRET, (error, payload) => {
        if(error){
            return res.status(401).json({error:"User not logged in" });
        }
        const {_id}=payload;
        UserModel.findById(_id)
        .then(dbUser=> {
            req.dbUSer=dbUser;
        });
        //forward the request to the next middleware ot to the next route
        next();

    });
}