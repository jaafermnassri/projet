const mongoose = require('mongoose')
const User = require("../models/User");
const foyerSchema = new mongoose.Schema({
    Name: { type: String, required: true, uppercase: true, trim: true }, 
    Adresse: { type: String, required: true, uppercase: true, trim: true }, 
    image: { type: String },
    createdOn: { type: Date, default: Date.now },
    description: { type: String, trim: true },
    gender: {
    type: String,
    default:"male",
    enum: ["male",'female']
  },
  
user: { type: mongoose.Schema.Types.ObjectId, ref: "user",required:true },
    open:{
        type:Boolean,
        default:true,
    },
    students:["User"],
    maxCapacity:Number
});
module.exports = Foyer = mongoose.model("foyer", foyerSchema);