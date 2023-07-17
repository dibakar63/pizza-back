const express=require('express');
const dotenv=require("dotenv");
const connectDb=require("./db.js")
const userRoute=require('./routes/userRoute.js')
const pizzaRouter=require('./routes/pizzaRoute.js')
const orderRouter=require('./routes/ordersRoute.js')
const cors=require('cors')
const Pizza=require('./models/pizzaModel.js')
const app=express();


dotenv.config()
connectDb()
app.use(express.json())
app.use(cors())
app.use('/api/users',userRoute)
app.use('/api/pizzas',pizzaRouter)
app.use('/api/orders',orderRouter)
app.get("/",(req,res)=>{
    res.send("server working")
})


app.listen(4000,()=>{
    console.log("server is running")
})