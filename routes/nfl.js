const router = require('express').Router()
const knex = require('../db/knex.js')

router.get('/', (req, res) => {
  knex('nfl')
    .then(result => {
      res.send(result)
    })
})

router.get('/:id', (req, res) => {
  var getId = req.params.id
  knex('nfl').where('id', getId)
    .then(result => {
      res.send(result)
    })
})

router.post('/new', (req, res) => {
  var newConf = req.body.conf
  var newSb = req.body.sb
  var newTeam = req.body.team
  knex('nfl').insert({conf:newConf, sb:newSb, team:newTeam}).returning(['id', 'team', 'conf', 'sb'])
    .then(result => {
      res.send(result)
    })
})

router.patch('/:id', (req, res) => {
  var patchId = req.params.id
  var changeConf = req.body.conf
  var changeSb = req.body.sb
  var changeTeam = req.body.team
  knex('nfl').where('id', patchId).update({conf:changeConf, sb:changeSb, team:changeTeam}).returning(['id', 'team', 'conf', 'sb'])
    .then(result => {
      res.send(result)
    })
})


router.delete('/:id', (req, res) => {
  var deleteId = req.params.id
  knex('nfl').where('id', deleteId).del()
    .then(result => {
      res.send(200)
    })
})

module.exports = router
