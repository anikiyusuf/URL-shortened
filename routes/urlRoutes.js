const express = require('express');
const { validationResult } = require('express-validator');
const router = express.Router();
const  { getShortUrls, createShortUrl, redirectToFullUrl} = require('../controllers/urlshortenerController');

function validateRequest(req, res, next) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  }
  

router.get('/url',  getShortUrls);
router.post('/shortUrls', validateRequest,  createShortUrl);
router.get('/:shortUrl', redirectToFullUrl);


module.exports = router;

