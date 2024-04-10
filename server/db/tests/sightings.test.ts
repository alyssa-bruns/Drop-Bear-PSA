import * as db from '../functions/sightings'
import { describe, it, expect, beforeAll, beforeEach, afterAll } from 'vitest'
import connection from '../connection'

beforeAll(() => {
  return connection.migrate.latest()
})

beforeEach(async () => {
  await connection.seed.run()
})

describe('getAllSightings', () => {
  it('should get all sightings', async () => {
    const allSightings = await db.getAllSightings()

    expect(allSightings).toHaveLength(3)
    expect(allSightings[2].id).toBe(3)
  })
})

afterAll(() => {
  connection.destroy()
})
