const homepage = async ( req,res) => {
    res.render('index')
}

const create = async (req , res) => {
    res.render('create')
}
const enter = async (req,res) => {
    res.render('enter')
}

const urlpage = async (req, res) => {
    res.render('urlpage')
}

const about = async (req, res) => {
    res.render('about')
}


module.exports = {create , homepage ,enter , urlpage , about}