const express = require('express')
const router = express.Router()

const UrlShortener = require('../../models/url-shortener')
const urlRandomCodeCreate = require('../../models/url-random')

const HOST = 'http://localhost:3001/'

router.get('/:id', (req, res) => {
  const id = req.params.id
  return UrlShortener.findById(id)
    .lean()
    .then(urlShortener => res.render('index', { urlShortener }))
    .catch(err => {
      console.log(err)
      res.render('error', { error: err.message })
    })
})

router.post('/', (req, res) => {
  const userUrl = req.body.url
  const shortUrl = HOST + urlRandomCodeCreate()
  UrlShortener.findOne({ url: userUrl })
    .then(findUrl => {
      findUrl ? res.redirect(`/shorten/${findUrl._id}`) 
              : UrlShortener.create({ url: userUrl, shortUrl: shortUrl })
                  .then(urlShortener => res.redirect(`/shorten/${urlShortener._id}`))
                  .catch(err => {
                    console.log(err)
                    res.render('error', { error: err.message })
                  })
    })
    .catch(err => {
      console.log(err)
      res.render('error', { error: err.message })
    })
})

module.exports = router