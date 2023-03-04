const express = require('express')
const router = express.Router()

const UrlShortener = require('../../models/url-shortener')
const urlRandomCodeCreate = require('../../models/url-random')

const HOST = 'http://localhost:3001/'

router.get('/:id', (req, res) => {
  const id = req.params.id
  return UrlShortener.findById(id)
    .lean()
    .then(urlShortener => res.render('show', { urlShortener }))
    .catch(err => {
      console.log(err)
      res.render('error', { error: err.message })
    })
})

router.post('/', (req, res) => {
  const userUrl = req.body.url
  UrlShortener.findOne({ url: userUrl })
    .then(findUrl => {
      if (!findUrl) {
        const shortUrl = HOST + urlRandomCodeCreate()
        return UrlShortener.create({ url: userUrl, shortUrl: shortUrl })
          .then(urlShortener => res.redirect(`/shorten/${urlShortener._id}`))
          .catch(error => console.log(error))
      } else {
        res.redirect(`/shorten/${findUrl._id}`)
      }
    })
    .catch(err => {
      console.log(err)
      res.render('error', { error: err.message })
    })
})

module.exports = router