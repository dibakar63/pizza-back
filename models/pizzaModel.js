const mongoose=require('mongoose');

const pizzaSchema=mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    image:{type:String,required:true},
    varients:[],
    prices:[],
    category:{
        type:String,require
    },
    description:{type:String,require}

},{
    timestamps:true,
})
const pizzaModel=mongoose.model('pizza',pizzaSchema);
module.exports=pizzaModel;