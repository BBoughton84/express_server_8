
exports.seed = function(knex, Promise) {
  return knex('nfl').del()
    .then(function () {
      return knex('nfl').insert([
        {
          team: '49ers',
          conf: 'NFC West',
          sb: 5
        },
        {
          team: 'Steelers',
          conf: 'AFC East',
          sb: 6
        },
        {
          team: 'Cowboys',
          conf: 'NFC East',
          sb: 5
        },
        {
          team: 'Patriots',
          conf: 'AFC North',
          sb: 5
        }
      ])
    })
}
