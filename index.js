require('dotenv').config()
const express = require("express")
const { connectionMongoDB } = require("./db/db");
const app = express()
const PORT = process.env.PORT

connectionMongoDB()

app.set('view engine', 'ejs')
app.set('view engine')

app.use(express.urlencoded({ extended: false }));
app.use(express.static('public'));

app.use("/", require("./routes/index"));
app.use("/auth", require("./routes/userRoutes"));
app.use("/", require("./routes/urlRoutes"));




// app.get('/' , (req,res) => {
//     res.render("index")
// })

// app.get("/url" , (req,res)=>{
//     res.render('url')
// })

// app.get("/create" , (req,res) => {
//     res.render('create')
// })
// app.get("/enter" , (req,res) => {
//     res.render('enter')
// })



app.listen(PORT , () => {
    console.log(`server running localhost:${PORT}`)
})



