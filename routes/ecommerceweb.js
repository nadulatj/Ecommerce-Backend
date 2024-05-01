const express = require('express');
const router =express.Router();
const bodyParser =require('body-parser');
const core = require('cors');
const fs= require('fs');
let EcommerceWeb = require('../schemas/ecommerceweb');

router.route('/add').post((req,res)=>{
    
    const sub_domain=req.body.sub_domain;
    const name=req.body.name;
    const url=req.body.url;
    const email =req.body.email;
    const contact_no=req.body.contact_no;
    const logo = req.body.logo;
    const token='df70c0465ba612baf47c08fc5a2654d434f06b444dbb73950c5f8fefdef7f87a56c72543d11cd80a.R1H7118A030192AA02C47';
    const instagram_url =req.body.instagram_url;
    const facebook_url=req.body.facebook_url;
    const currency=req.body.currency;

    console.log("ok")
    try{
        const newTemplate=new EcommerceWeb({
            sub_domain,
            name,
            url,
            email,
            contact_no,
            logo,
            instagram_url,
            facebook_url,
            token,
            currency
    
        });
    
        newTemplate.save()
            .then(template=>{
                console.log(res)
                  res.json(template._id)
            })
            .catch(err=>{
                res.status(400).json('Error in Create new Store manager '+err)
                }          
            );
    
    }catch(e){
        console.log(e)
    }


});


//get selected order
router.route('/:id').get((req,res)=>{

    var data=EcommerceWeb.findOne({sub_domain:req.params.id}).then(webs=>{
        // console.log(res.json(webs))
        res.send(webs)
    });
});

module.exports = router;