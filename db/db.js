require('dotenv').config()
const mongoose = require('mongoose')

const MONGO_DB_CONNECTION_URL = process.env.MONGO_DB_CONNECTION_URL

function  connectionMongoDB(){
    const MONGO_DB_CONNECTION_URL = 'mongodb://localhost:27017'
    mongoose.connect(MONGO_DB_CONNECTION_URL, {
        serverSelectionTimeoutMS: 30000})

      
    mongoose.connection.on('connected', () =>{
        console.log('connection to mongodb successful')
    })

    mongoose.connection.on('err', (err) =>{
        console.error(err)
        
    })

}


module.exports =   {connectionMongoDB}






// require('dotenv').config();
// const mongoose = require('mongoose');
// //const logger = require("./logger/logger")

// const MONGODB_URI = process.env.MONGODB_URI;
// //console.log(MONGODB)
// // connect to mongodb
// function connectionMongoDB() {
//     const rl = 'mongodb://localhost:27017'
//     mongoose.connect(rl, {
//     serverSelectionTimeoutMS: 30000});
   
//     mongoose.connection.on('connected', () => {
//         console.log('Connection to mongodb successfully')
//     })

//     mongoose.connection.on('err', (err) => {
//         console.error(err)
//     })
// }

// module.exports =  {connectionMongoDB}

