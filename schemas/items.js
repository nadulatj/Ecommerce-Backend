const { Double } = require('mongodb');
const mongoose= require('mongoose');
const ItemsSchema = new mongoose.Schema({
    category_id:{
        type: String,
        required: true
    },

    category:{
        type:String,
        required:true
    },
    currency:{
        type:String,
        required:true
    },

    current_quantity:{
        type:Number,
        required:true
    },

    description:{
        type:String,
        required:true
    },

    gross_amount:{
        type:String,
        required:true
    },

    
    images:{
        type:Array,
        required:true
    },

    initial_quantity:{
        type:Number,
        required:true
    },

is_colors_available:{
    type:Boolean,
    required:true,
    default:false
},

is_default:{
    type:Boolean,
    required:true,
    default:true
},

is_digital_product:{
    type:Boolean,
    required:true,
    default:false
},

is_discounted:{
    type:Boolean,
    required:true,
    default:false
},

is_sizes_available:{
    type:Boolean,
    required:true,
    default:false
},

is_sold_out:{
    type:Boolean,
    required:true,
    default:false
},

name:{
    type:String,
    required:true
},

net_amount:{
    type:String,
    required:true
}
   



});
module.exports =mongoose.model('Items',ItemsSchema,'Items');