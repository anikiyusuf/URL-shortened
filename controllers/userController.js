require('dotenv').config()
const userModel = require("../model/userModel")
const jwt = require('jsonwebtoken')

const JWT_TOKEN = process.env.JWT_TOKEN




// this function is used to create token 
const createToken = (id) => {
    return jwt.sign({ id} , JWT_TOKEN , {
        expiresIn : '1h',
    })
} 

const register = async (req,res) => {
    try{
        const { firstName , lastName , email , password } = req.body;

        const user = await userModel.create({ firstName , lastName , email , password })
          console.log(user)
   
        //  res.status(200).json(user)
         res.redirect("/enter")
    }catch(err){
        console.log(err)
        res.status(500).json(err)
    }
}


const login = async (req, res ) => {
    try{
            const { email , password } = req.body
            const user = await userModel.findOne({ email: email})
   
            if(!user) {
                return res.status(400).send({ message : 'User not found'})
            }
            const validate = await user.isValidPassword(password)
            if(!validate) {
                return res.status(400).send({ message: 'Wrong password'});
            }
            const token = createToken(user._id)
            console.log(token)
            res.status(200)
             .cookie('jwt' , token, { maxAge: 3600000})
             .redirect('/url')
            // res.json(user)
}catch( err){
    res.status(500)
    res.json(err)
}
}

async function logOut(req, res, next) {
  try {
       await res.cookie("jwt", "", { maxAge: 1 });

    res.render("/", { error: undefined });
  } catch (error) {
    next(error);
  }
}



module.exports = { register , login , logOut}