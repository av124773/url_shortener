const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
  res.render('index')
})

router.get('/:shortUrl', (req, res) => {
  const shortCode = req.params.shortUrl
  const shortUrl = HOST + shortCode
  return UrlShortener.find({ shortUrl: shortUrl })
    .lean()
    .then(shortUrl => res.redirect(`${shortUrl[0].url}`))
    .catch(error => console.log(error))
})

module.exports = router