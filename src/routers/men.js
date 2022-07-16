const express = require('express');
const router=new express.Router();
const MensRanking=require('../models/mens');

router.post("/mens",async(req,res)=>{
    try{
        const addingMensRecords=new MensRanking(req.body);
        const result=await addingMensRecords.save();
        res.status(201).send(result);
    }
    catch(e){
        res.status(400).send(e);
    }
})

router.get("/mens",async(req,res)=>{
    try{
        const result=await MensRanking.find({}).sort({ranking:1});
        res.send(result);
    }catch(e){
        res.status(400).send(e);
    }
})

router.get("/mens/:id",async(req,res)=>{
    try{
        const _id=req.params.id;
        const result=await MensRanking.findById({_id});
        res.send(result);
    }catch(e){
        res.status(400).send(e);
    }
})

router.patch("/mens/:id",async(req,res)=>{
    try{
        const _id=req.params.id;
        const result=await MensRanking.findByIdAndUpdate(_id,req.body,{
            new:true
        });
        res.send(result);
    }catch(e){
        res.status(500).send(e);
    }
})

router.delete("/mens/:id",async(req,res)=>{
    try{
        const _id=req.params.id;
        const result=await MensRanking.findByIdAndDelete(_id,{
            new:true
        });
        res.send(result);
    }catch(e){
        res.status(500).send(e);
    }
})


router.get("/",async (req,res)=>{
    res.send("Hello");
})

module.exports=router;

