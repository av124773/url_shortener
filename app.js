/** 
 * Include models
 */
const express = require('express')
const mongoose = require('mongoose')
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const router = require('./routes')

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
app.use(router)

/** 
 * Express server listening
 */
app.listen(PORT, () => {
  console.log(`This app is running on port: ${PORT}.`)
})