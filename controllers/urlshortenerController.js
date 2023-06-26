const ShortUrl = require("../model/urlShorter")
const QRCode = require("qrcode-generator");
// const userModel = require("../model/userModel")
const fs = require("fs");



async function getShortUrls(req, res) {
    try {
      const shortUrls = await ShortUrl.find();
      // res.render('index', { shortUrls: shortUrls });
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

// QR CODE