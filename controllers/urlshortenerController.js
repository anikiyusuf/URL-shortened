const ShortUrl = require("../model/urlShorter")
const fs = require("fs");



async function getShortUrls(req, res) {
    try {
      const shortUrls = await ShortUrl.find();
     
       res.render('urlpage', { shortUrls: shortUrls });
    } catch (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
    }
  }

  

async function createShortUrl(req, res){
  ShortUrl.create({ full : req.body.fullUrl})
  res.redirect('/url')
  // res.redirect('/')
}

async function redirectToFullUrl(req, res) {
  const shortUrl = await ShortUrl.findOne({ short: req.params.shortUrl });
  if (shortUrl == null) return res.sendStatus(404);

  shortUrl.clicks++;
  shortUrl.save();

  res.redirect(shortUrl.full);
  
}

module.exports = { createShortUrl , getShortUrls , redirectToFullUrl}