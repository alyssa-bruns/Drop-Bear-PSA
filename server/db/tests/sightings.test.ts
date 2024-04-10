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

describe('getSightingByLocation', () => {
  it('should get all sightings from a single location', async () => {
    const singleSighting = await db.getSightingByLocation(
      'Grampians National Park, Victoria, Australia',
    )

    expect(singleSighting).toHaveLength(1)
    expect(singleSighting[0].location).toBe(
      'Grampians National Park, Victoria, Australia',
    )
  })
})

describe('addSighting', () => {
  it('should add a new sighting', async () => {
    const newSighting = await db.addSighting({
      id: 4,
      location: 'Kosciuszko National Park, New South Wales, Australia',
      date: '2024-04-13',
      time: '23:00:00',
      description:
        'Lost in my thoughts, I barely registered the faint rustle of leaves overhead. Then, with a sudden thud, a dark silhouette descended, landing mere inches from where I sat. My heart leaped into my throat as I locked eyes with the formidable creature before me - a drop bear, its sharp claws poised to strike. With trembling hands, I fumbled for my flashlight, the beam revealing its fearsome form. In a desperate bid for survival, I scrambled to my feet, the adrenaline surging through my veins as I dashed into the darkness, the echoes of its growls haunting my every step. It was a harrowing encounter that left me shaken to the core, a stark reminder of the unforgiving wilderness that lay beyond the safety of civilization.',
      email: 'example4@email.com',
      is_approved: true,
    })

    expect(newSighting[0].id).toBe(4)
  })
})

afterAll(() => {
  connection.destroy()
})
