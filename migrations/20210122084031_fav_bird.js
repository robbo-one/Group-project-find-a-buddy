exports.up = (knex, Promise) => {
  return knex.schema.createTable('fav_bird', (table) => {
    table.increments('id').primary()
    table.integer('user_id')
    table.string('bird')
  })
}

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('fav_bird')
}