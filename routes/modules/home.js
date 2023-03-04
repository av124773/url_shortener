const express = require('express')
const router = express.Router()

const UrlShortener = require('../../models/url-shortener')

const HOST = 'http://localhost:3001/'

router.get('/', (req, res) => { 
  res.render('index')
})

router.get('/:shortUrl', (req, res) => {
  const shortCode = req.params.shortUrl
  const shortUrl = HOST + shortCode
  return UrlShortener.findOne({ shortUrl: shortUrl })
    .lean()
    .then(shortUrl => res.redirect(`${shortUrl.url}`))
    .catch(err => {
      console.log(err)
      res.render(
        'error',
        { error: err.message }
      )
    })
})

module.exports = router