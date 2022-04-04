const express = require("express");
// const async = require("hbs/lib/async");
const router = express.Router();
const User = require("../models/user.model")
router.get("/", async(req,res)=>{
try{
const user = await User.find({}).select("-password").lean().exec(); 
    return res.status(201).send({user:user})
    }
catch(err){
console.log(err.message);
}
})


module.exports =router; 

