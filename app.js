/** 
 * Include models
 */
const express = require('express')
const mongoose = require('mongoose')

if (process.env.NODE_ENV = 'production') {
  require('dotenv').config()
}

const app = express()
const PORT = 3001

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

/** 
 * Route setting
 */
app.get('/', (req, res) => {
  res.send('server test.')
})

/** 
 * Express server listening
 */
app.listen(PORT, () => {
  console.log(`This app is running on port: ${PORT}.`)
})