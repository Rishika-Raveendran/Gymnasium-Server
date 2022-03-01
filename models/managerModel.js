const mongoose = require('mongoose');

const mgrSchema = {
    name:String,
    mid:String,
    pwd:String
   
}

const Manager=mongoose.model("Manager",mgrSchema)
module.exports = Manager;
