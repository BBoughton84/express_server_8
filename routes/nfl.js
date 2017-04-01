const router = require('express').Router()
const knex = require('../db/knex.js')

router.get('/', (req, res) => {
  knex('nfl')
    .then(result => {
      res.send(result)
    })
})



module.exports = router
