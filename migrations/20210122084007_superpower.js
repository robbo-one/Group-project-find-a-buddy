exports.up = (knex, Promise) => {
  return knex.schema.createTable('superpower', (table) => {
    table.increments('id').primary()
    table.integer('user_id')
    table.string('superpower')
  })
}

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('superpower')
}
