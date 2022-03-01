const mongoose = require('mongoose');

const guardSchema = {
    name:String,    
    g_id:String,
   shift:String,
    
}

const Guard=mongoose.model("Guard",guardSchema)
module.exports = Guard;
