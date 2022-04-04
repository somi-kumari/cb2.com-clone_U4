const express = require("express")
const Landing =require("../models/landingpage.model")

const router = express.Router()

router.post("",async(req,res)=>{
    try{
     
        const landing = await Landing.create(req.body)
        return res.json({ status: 'ok', data: landing})
        
    }catch(err){
        return res.status(500).send(err.message)
    }
})

router.get("",async(req,res)=>{
    try{
     
        const landing=await Landing.find().lean().exec()
      
        return res.send(landing)
        
    }catch(err){
        return res.status(500).send(err.message)
    }
})
module.exports=router