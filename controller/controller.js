const Pizza=require("../models/pizzaModel");

const getPizzas=async(req,res,next)=>{
    let pizzas;
    try {
       pizzas= await Pizza.find()
    } catch (error) {
        console.log(error)
    }
    if(!pizzas){
        return res.status(400).json({message:"No pizzas found"})
    }
    return res.status(200).json({pizzas})
}
const addPizzas=async(req,res,next)=>{
    const pizzas=new Pizza({
        name:req.body.name,
        image:req.body.image,
        varients:req.body.varients,
        prices:req.body.prices,
        category:req.body.category,
        description:req.body.description,
        

    })
    try {
        const newPizzas=await pizzas.save()
    res.status(201).json(newPizzas)
    } catch (error) {
        res.status(400).json({ message: 'Unable to Add' })
    }
}

module.exports.getPizzas=getPizzas
module.exports.addPizzas=addPizzas