const express = require("express")
const pagesRouter  = express.Router()
const { homepage , create , enter , urlpage , about} = require("../controllers/pageController")


pagesRouter.get('/' , homepage)
pagesRouter.get("/create" , create)
pagesRouter.get("/enter" , enter)
pagesRouter.get("/urlpage" , urlpage)
pagesRouter.get("/about" , about)


module.exports = pagesRouter