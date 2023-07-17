const express=require('express');
const router=express.Router();
const Pizza=require('../models/pizzaModel')
const routerController=require('../controller/controller')

router.get('/getallpizzas',async(req,res)=>{
  try{
    const pizzas=await Pizza.find({})
    res.send(pizzas)
  }catch(error){
    return res.status(400).json({message:error})
  }
})
router.post('/add',routerController.addPizzas)
module.exports=router;