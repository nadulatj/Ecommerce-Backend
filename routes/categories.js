const express = require('express');
const router =express.Router();
const bodyParser =require('body-parser');
const core = require('cors');
const fs= require('fs');
let Categories = require('../schemas/categories');

//save categories
router.route('/add').post((req,res)=>{
    
    const name=req.body.name;

    try{
        const categories=new Categories({
            name
    
        });
    
        categories.save()
            .then(template=>{
                fetchMovies(socket)
                  res.json(categories._id)
            })
            .catch(err=>{
                res.status(400).json('Error in Create new Store manager '+err)
                }          
            );
    
    }catch(e){
        console.log(e)
    }


});


//get categories by ID
router.route('/:id').get((req,res)=>{

    var data=Categories.findOne({id:req.params.id}).then(webs=>{
        console.log(res.json(webs))
        res.send(webs)
    });
});


router.get("/",async function(req,res){
    Categories.find()
    .then(category=>res.json(category))
    .catch(err=>res.status(400).json('Error: '+err));

})

module.exports = router;