exports.up = (knex, Promise) => {
  return knex.schema.createTable('fav_character', (table) => {
    table.increments('id').primary()
    table.integer('user_id')
    table.string('character')
  })
}

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('fav_character')
}