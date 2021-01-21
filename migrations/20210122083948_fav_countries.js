exports.up = (knex, Promise) => {
  return knex.schema.createTable('fav_countries', (table) => {
    table.increments('id').primary()
    table.integer('user_id')
    table.string('country')
  })
}

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('fav_countries')
}