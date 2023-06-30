require('dotenv').config()
const mongoose = require('mongoose')

const MONGO_DB_CONNECTION_URL = process.env.MONGO_DB_CONNECTION_URL

function  connectionMongoDB() {
    mongoose.connect(MONGO_DB_CONNECTION_URL , {
        serverSelectionTimeoutMS: 30000})};


      
    mongoose.connection.on('connected', () =>{
        console.log('connection to mongodb successful')
    })

    mongoose.connection.on('err', (err) =>{
        console.error(err)
        
    })

 


 module.exports =   {connectionMongoDB}











