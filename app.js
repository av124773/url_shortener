/** 
 * Include models
 */
const express = require('express')
const mongoose = require('mongoose')
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')

const UrlShortener = require('./models/url-shortener')
const urlRandomCodeCreate = require('./models/url-random')

if (process.env.NODE_ENV = 'production') {
  require('dotenv').config()
}

const app = express()
const PORT = 3001
const HOST = 'http://localhost:3001/'

/** 
 * Mongoose connect setting
 */
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
const db = mongoose.connection
db.on('error', () => {
  console.log('mongoose error!')
})
db.once('open', () => {
  console.log('mongoose connected!')
})

app.engine('hbs', exphbs({ defaultLayout: 'main', extname: '.hbs' }))
app.set('view engine', 'hbs')

app.use(bodyParser.urlencoded({ extended: true }))

/** 
 * Route setting
 */
app.get('/', (req, res) => {
  res.render('index') 
})

app.get('/:id', (req, res) => {
  const id = req.params.id
  return UrlShortener.findById(id)
    .lean()
    .then(urlShortener => res.render('show', { urlShortener }))
    .catch(error => console.log(error))
})

app.post('/shorten', (req, res) => {
  const userUrl = req.body.url
  return UrlShortener.find({ url: userUrl })
    .then(findUrl => {
      if (findUrl.length === 0) {
        console.log('no find')
        const shortUrl = HOST + urlRandomCodeCreate()
        return UrlShortener.create({ url: userUrl, shortUrl: shortUrl })
          .then(urlShortener => res.redirect(`/${urlShortener._id}`))
          .catch(error => console.log(error))
      } else {
        console.log('find url')
        res.redirect(`/${findUrl[0]._id}`)
      }
    })
    .catch(error => console.log(error)) 
})

/** 
 * Express server listening
 */
app.listen(PORT, () => {
  console.log(`This app is running on port: ${PORT}.`)
})