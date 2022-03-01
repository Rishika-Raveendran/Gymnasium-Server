const mongoose = require('mongoose');

const userSchema = {
    name:String,
    payment:Number,
    contact:String,
    t_id:String,
    gender:String,
    
}

const User=mongoose.model("User",userSchema)
module.exports = User;
