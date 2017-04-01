
exports.up = function(knex) {
    return knex.schema.createTable('nfl', n => {
      n.increments('id')
      n.string('team')
      n.string('conf')
      n.integer('sb')
    })
}

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('nfl')
}
