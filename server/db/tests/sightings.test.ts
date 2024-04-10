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

describe('getSightingById', () => {
  it('should get just one sighting', async () => {
    const singleSighting = await db.getSightingById(2)

    expect(singleSighting).toHaveLength(1)
    expect(singleSighting[0].id).toBe(2)
  })
})

afterAll(() => {
  connection.destroy()
})
