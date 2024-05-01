const mongoose= require('mongoose');
const OrdersSchema = new mongoose.Schema({
    customer_first_name:{
        type: String,
        required: true
    },

    customer_last_name:{
        type:String,
        required:true
    },
    customer_street_address:{
        type:String,
        required:true
    },

    customer_city:{
        type:String,
        required:true
    },

    customer_zip_code:{
        type:String,
        required:true
    },

    customer_country:{
        type:String,
        required:true
    },

    
    customer_mobile_no:{
        type:String,
        required:true
    },

    customer_email:{
        type:String,
        required:true
    },

    order_note:{
        type:String
    },

    is_different_address:{
        type:Boolean,
        default:false
    },

    secondary_country:{
        type:String,
    },

    secondary_street_address:{
        type:String
    },

    secondary_city:{
        type:String
    },

    secondary_zip_code:{
        type:String
    },
    payment_type:{
        type:String,
        required:true
    },
    order_array:{
        type:Array,
        required:true
    }

   
   



});
module.exports =mongoose.model('Orders',OrdersSchema,'Orders');