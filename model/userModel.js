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



userSchema.pre('save', async function(next) {
    const user = this;
    const hash = await bcrypt.hash(this.password, 10);
    this.password = hash;
    next();
});



userSchema.methods.isValidPassword = async function(password) {
    const user = this;
    const compare = await bcrypt.compare(password, user.password);
    return compare;
};

const UserModel = mongoose.model('user', userSchema)

module.exports = UserModel;