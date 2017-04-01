const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const PORT = process.env.PORT || 8080
const teams = require('./routes/nfl.js')

app.use(bodyParser.json())
app.use(bodyParser.uelencoded({extended:true}))

app.use('/teams', teams)

app.listen(PORT, function() {
  console.log(`listening to port ${PORT} on day 8`)
}
