const express = require('express')
const app = express()

const PORT = 3001

app.get('/', (req, res) => {
  res.send('server test.')
})

app.listen(PORT, () => {
  console.log(`This app is running on port: ${PORT}.`)
})