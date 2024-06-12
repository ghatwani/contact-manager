const mongoose=require('mongoose');

const userSchema= mongoose.Schema({
    username:{
        type: String,
        required:[true,"please enter the username"]
    },
    email:{
        type:String,
        required:[true,"Please add the email address"],
        unique:[true, "Email password alreday exist"]
    },
    password:{
        type:String,
        required:[true, "PLease add the user password"]
    },
},{
    timestamps:true
});

module.exports=mongoose.model('User', userSchema);