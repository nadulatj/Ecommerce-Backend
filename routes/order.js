const express = require('express');
const router =express.Router();
const bodyParser =require('body-parser');
const core = require('cors');
const fs= require('fs');
let Orders = require('../schemas/orders');

//save items
router.route('/add').post((req,res)=>{
    
   
   const customer_first_name = req.body.customer_first_name;
   const customer_last_name = req.body.customer_last_name;
   const customer_street_address = req.body.customer_street_address;
   const customer_city = req.body.customer_city;
   const customer_zip_code = req.body.customer_zip_code;
   const customer_country = req.body.customer_country;
   const customer_mobile_no = req.body.customer_mobile_no;
   const customer_email = req.body.customer_email;
   const order_note = req.body.order_note;
   const is_different_address = req.body.is_different_address;
   const secondary_country = req.body.secondary_country;
   const secondary_street_address = req.body.secondary_street_address;
   const secondary_city = req.body.secondary_city;
   const secondary_zip_code = req.body.secondary_zip_code;
   const payment_type = req.body.payment_type;
   const order_data = req.body.order_data;

    try{
        const orders=new Orders({
            customer_first_name,
            customer_last_name,
            customer_street_address,
            customer_city,
            customer_zip_code,
            customer_country,
            customer_mobile_no,
            customer_email,
            order_note,
            is_different_address,
            secondary_country,
            secondary_street_address,
            secondary_city,
            secondary_zip_code,
            payment_type,
            order_data,
        });
    
        orders.save()
            .then(template=>{
                  res.json(orders._id)
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

    var data=Orders.find({id:req.params.id}).then(webs=>{
        // console.log(res.json(webs))
        res.send(webs)
    });
});

module.exports = router;