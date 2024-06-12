const mongoose=require('mongoose')


const contactSchema = mongoose.Schema({
    user_id:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:"User"
    },
    name:{
        type:String,
        required:[true, 'Please add the name ']
    },
    email:{
        type:String,
        required:[true,"Please enter the email address"]
    },
    phone:{
        type:String,
        required:[true, "please enter the phone number"]
    },
    createdAt:{
        type:Date,
        default:Date.now()
    }
});

module.exports=mongoose.model('Contact',contactSchema );