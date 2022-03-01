const mongoose = require('mongoose');

const mgrSchema = {
    name:String,
   
}

const Manager=mongoose.model("Manager",mgrSchema)
module.exports = Manager;
