const express = require('express');
const router =express.Router();
const bodyParser =require('body-parser');
const core = require('cors');
const fs= require('fs');
let Items = require('../schemas/items');

//save items
router.route('/add').post((req,res)=>{
    
   
    const category_id=req.body.category_id;
    const category=req.body.category;
    const currency=req.body.currency;
    const current_quantity=req.body.current_quantity;
    const description=req.body.description;
    const gross_amount=req.body.gross_amount;
    const images=req.body.images;
    const initial_quantity=req.body.initial_quantity;
    const name=req.body.name;
    const net_amount=req.body.gross_amount;

    try{
        const items=new Items({
             category_id,
             category,
             currency,
             current_quantity,
             description,
             gross_amount,
             images,
             initial_quantity,
             name,
             net_amount,
    
        });
    
        items.save()
            .then(template=>{
                  res.json(items._id)
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

    var data=Items.find({category_id:req.params.id}).then(webs=>{
        // console.log(res.json(webs))
        res.send(webs)
    });
});

router.route('/single/:item_id').get((req,res)=>{

    var data=Items.findOne({id:req.params.item_id}).then(webs=>{
        // console.log(res.json(webs))
        res.send(webs)
    });
});


router.get("/",async function(req,res){
    Items.find()
    .then(category=>res.json(category))
    .catch(err=>res.status(400).json('Error: '+err));

})

module.exports = router;