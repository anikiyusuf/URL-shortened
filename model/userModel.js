const mongoose = require("mongoose")
const bcrypt = require('bcrypt')
const Schema = mongoose.Schema

const userSchema = new Schema({
    firstName:{
        type:String,
        require:true
    },
    lastName:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true,
        unique:true
    },
    password:{
        type:String,
        require:true,
    },
 
    createAt : {
        type:Date,
        default:Date.now
    },
    lastUpdateAt :{
        type:String,
        default:Date.now 
    }
})