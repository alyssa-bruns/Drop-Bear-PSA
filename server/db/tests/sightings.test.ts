import * as db from '../functions/sightings'
import {
  describe,
  it,
  expect,
  beforeAll,
  beforeEach,
  afterAll,
  vi,
} from 'vitest'
import connection from '../connection'

beforeAll(() => {
  // Add to remove errors in test output
  vi.spyOn(console, 'error').mockImplementation(() => {})
  return connection.migrate.latest()
})

afterAll(() => {
  vi.clearAllMocks()
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

describe('getSightingByID', () => {
  it('should get a single sighting', async () => {
    const sighting = await db.getSightingById(2)
    expect(sighting).toHaveLength(1)
    expect(sighting[0].id).toBe(2)
  })
})

describe('getSightingByLocation', () => {
  it('should get all sightings from a single location', async () => {
    const locationSightings = await db.getSightingsByLocation(
      'Grampians National Park, Victoria, Australia',
    )
    expect(locationSightings).toHaveLength(1)
    expect(locationSightings[0].display_name).toBe(
      'Grampians National Park, Victoria, Australia',
    )
  })
})

describe('addSighting', () => {
  it('should add a new sighting', async () => {
    const newSighting = await db.addSighting({
      id: 4,
      display_name: 'Kosciuszko National Park, New South Wales, Australia',
      lat: 36.5006,
      lon: 148.267,
      date: '2024-04-13',
      time: '23:00:00',
      description:
        'Lost in my thoughts, I barely registered the faint rustle of leaves overhead. Then, with a sudden thud, a dark silhouette descended, landing mere inches from where I sat. My heart leaped into my throat as I locked eyes with the formidable creature before me - a drop bear, its sharp claws poised to strike. With trembling hands, I fumbled for my flashlight, the beam revealing its fearsome form. In a desperate bid for survival, I scrambled to my feet, the adrenaline surging through my veins as I dashed into the darkness, the echoes of its growls haunting my every step. It was a harrowing encounter that left me shaken to the core, a stark reminder of the unforgiving wilderness that lay beyond the safety of civilization.',
      is_approved: true,
    })

    expect(newSighting[0].id).toBe(4)
  })
})

afterAll(() => {
  connection.destroy()
})
