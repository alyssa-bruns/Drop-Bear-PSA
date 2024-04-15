/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function up(knex) {
  return knex.schema.createTable('sightings', (table) => {
    table.increments('id')
    table.string('display_name').notNullable() //location must not be null
    table.float('lat').notNullable()
    table.float('lon').notNullable()
    table.date('date').notNullable() //date must not be null
    table.time('time').notNullable() //time must not be null
    table.string('description').notNullable() //encouter description must not be null
    table.boolean('is_approved').defaultTo(0)
  })
}
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

export async function down(knex) {
  return knex.schema.dropTable('sightings')
}
