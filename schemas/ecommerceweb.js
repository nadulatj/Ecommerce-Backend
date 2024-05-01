const mongoose= require('mongoose');
const EcommerceWebSchema = new mongoose.Schema({
    sub_domain:{
        type: String,
        required: true
    },

    name:{
        type:String,
        required:true
    },
    url:{
        type:String,
        required:true
    },

    email:{
        type:String,
        required:true
    },

    contact_no:{
        type:String,
        required:true
    },

    logo:{
        type:String,
        required:true
    },

    
    instagram_url:{
        type:String,
        required:true
    },

    facebook_url:{
        type:String,
        required:true
    },

    token:{
        type:String,
        required:true
    },

    currency:{
        type:String,
        required:true
    }
   
   



});
module.exports =mongoose.model('EcommerceWeb',EcommerceWebSchema,'EcommerceWeb');