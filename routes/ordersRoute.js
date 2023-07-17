const express=require('express');
const router=express.Router()
const {v4 : uuidv4}=require('uuid')

const stripe=require('stripe')("sk_test_51MySfISDhR3TyBvwoYeehMM7Sdyh4zd6brbEI9aFqODMHCNP00cDThCfyNKVLH5kUtM3zUctNGN6Ry1B3fYYzdyO00HU93h5lW")


router.post('/placeorder' ,async(req,res)=>{
    const {token,subTotal,currentUser,cartItems}=req.body;

    try {
        const customer=await stripe.customers.create({
            email:token.email,
            source:token.id
        })
        const payment=await stripe.charges.create({
             amount:subTotal*100,
            currency:'inr',
            customer:customer.id,
            receipt_email:token.email
        },{
            idempotencyKey:uuidv4()
        })
        if(payment){
            res.send('Payment Done')
        }else{
            res.send('Payment Failed')
        }
    } catch (error) {
        return res.status(400).json({message:'Something went wrong'+error})
    }

})
module.exports=router