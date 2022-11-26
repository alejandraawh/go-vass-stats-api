const express = require("express");
const statSchema = require("../models/stats");


const router = express.Router();

// create the stats
router.post("/saveStats", (req,res)=>{
    const travel= travelSchema(req.body);
    travel
    .save()
    .then((data)=>res.json(data))
    .catch((error)=>res.json({message: error}));
});

//get all stats
router.get("/getStats", (req,res)=>{
    travelSchema
    .find()
    .then((data)=>res.json(data))
    .catch((error)=>res.json({message: error}));
});


//get the stats by id
router.get("/getStats/:id", (req,res)=>{
    const{ id }=req.params;
    travelSchema
    .findById(id)
    .then((data)=>res.json(data))
    .catch((error)=>res.json({message: error}));
});

//update stats
router.put("/setStats/:id", (req,res)=>{
    const{ id }=req.params;
    const{ ubicationUser, urlClick, frequentPackages}=req.body;
    purchaseSchema
    .updateOne({_id:id},{ $set: {ubicationUser, urlClick, frequentPackages}})
    .then((data)=>res.json(data))
    .catch((error)=>res.json({message: error}));
});

//delete stats
router.delete("/stats/:id", (req,res)=>{
    const{ id }=req.params;
    purchaseSchema
    .deleteOne({_id:id})
    .then((data)=>res.json(data))
    .catch((error)=>res.json({message: error}));
});

module.exports= router;
