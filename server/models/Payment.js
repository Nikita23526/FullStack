import mongoose from "mongoose";

const schema = new mongoose.Schema({

    rezorpay_order_id:{
        type:String , 
        required:true,
    },
    rezorpay_payment_id:{
        type:String , 
        required:true,
    },
    rezorpay_signature:{
        type:String , 
        required:true,
    },
    createdAt:{
        type:Date,
        default:Date.now,
    }
})

export const Payment = mongoose.model("Payment", schema);