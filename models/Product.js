const mongoose = require('mongoose');


const productSchema = new mongoose.Schema({
    name:{
        type:String,require:[true,"Please provide a name"]
    },
    
},{timestamps:true})

module.exports=mongoose.model("Product",productSchema)