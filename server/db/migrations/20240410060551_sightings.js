/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function up(knex) {
  return knex.schema.createTable('sightings', (table) => {
    table.increments('id')
    table.string('location')
    table.date('date')
    table.time('time')
    table.string('description')
    table.string('email')
    table.boolean('is_approved')
  })
}
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

export async function down(knex) {
  return knex.schema.dropTable('sightings')
}
