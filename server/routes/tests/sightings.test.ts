import { it, expect, describe, vi } from 'vitest'
import request from 'supertest'
import * as sightingsDb from '../../db/functions/sightings'
import server from '../../server'

vi.mock('../../db/functions/sightings')

const mockSightings = [
  {
    id: 1,
    location: 'Grampians National Park, Victoria, Australia',
    date: '2024-04-10',
    time: '21:00:00',
    description:
      "The crackle of the campfire and the laughter of my friends filled the air as we sat beneath the starry outback sky. Lost in the warmth of camaraderie, I didn't notice the subtle rustle in the trees above. Suddenly, a dark shape plummeted from the canopy, landing amidst our circle with a menacing growl. My heart pounded as I scrambled to escape its grasp, the adrenaline-fueled sprint through the forest a harrowing reminder of the dangers lurking in the night.",
    email: 'example1@email.com',
    is_approved: true,
  },
  {
    id: 2,
    location: 'Blue Mountains National Park, New South Wales, Australia',
    date: '2024-04-11',
    time: '13:30:00',
    description:
      'Each step through the bush felt like a triumph, until a sudden thud shattered my confidence. Looking up, I was met with the chilling sight of a drop bear poised to strike. With lightning reflexes, I dodged its descent, my pulse racing as I fled through the dense undergrowth. The memory of those piercing eyes haunted me long after the encounter had passed, a stark reminder of the perilous beauty of the Australian wilderness.',
    email: 'example2@email.com',
    is_approved: true,
  },
]

describe('GET api/v1/sightings', async () => {
  it('should get all sightings', async () => {
    vi.mocked(sightingsDb.getAllSightings).mockResolvedValue(mockSightings)

    const res = await request(server).get('/api/v1/sightings')

    expect(res.statusCode).toBe(200)
  })
  it('should send an error message', async () => {
    vi.mocked(sightingsDb.getAllSightings).mockRejectedValue(mockSightings)

    const res = await request(server).get('/api/v1/sightings')

    expect(res.statusCode).toBe(500)
  })
})

describe('GET api/v1/sightings/:id', async () => {
  it('should get one sighting', async () => {
    vi.mocked(sightingsDb.getSightingById).mockResolvedValue(mockSightings)

    const res = await request(server).get('/api/v1/sightings/2')

    expect(res.statusCode).toBe(200)
  })
  it('should send an error message', async () => {
    vi.mocked(sightingsDb.getSightingById).mockRejectedValue(mockSightings)

    const res = await request(server).get('/api/v1/sightings/2')

    expect(res.statusCode).toBe(500)
  })
})

describe('GET api/v1/sightings/:location', async () => {
  it('should get all sightings from a single location', async () => {
    vi.mocked(sightingsDb.getSightingsByLocation).mockResolvedValue(
      mockSightings,
    )
    console.log(mockSightings)

    const res = await request(server).get(
      '/api/v1/sightings/Blue%20Mountains%20National%20Park,%20New%20South%20Wales,%20Australia',
    )
    console.log(res)
    expect(res.statusCode).toBe(200)
  })
  it('should send an error message', async () => {
    vi.mocked(sightingsDb.getSightingsByLocation).mockRejectedValue(
      mockSightings,
    )

    const res = await request(server).get(
      '/api/v1/sightings/Blue%20Mountains%20National%20Park,%20New%20South%20Wales,%20Australia',
    )

    expect(res.statusCode).toBe(500)
  })
})

describe('POST api/v1/sightings', () => {
  it('should add a new sighting', async () => {
    const newSighting = {
      id: 4,
      location: 'Kosciuszko National Park, New South Wales, Australia',
      date: '2024-04-13',
      time: '23:00:00',
      description:
        'Lost in my thoughts, I barely registered the faint rustle of leaves overhead. Then, with a sudden thud, a dark silhouette descended, landing mere inches from where I sat. My heart leaped into my throat as I locked eyes with the formidable creature before me - a drop bear, its sharp claws poised to strike. With trembling hands, I fumbled for my flashlight, the beam revealing its fearsome form. In a desperate bid for survival, I scrambled to my feet, the adrenaline surging through my veins as I dashed into the darkness, the echoes of its growls haunting my every step. It was a harrowing encounter that left me shaken to the core, a stark reminder of the unforgiving wilderness that lay beyond the safety of civilization.',
      email: 'example4@email.com',
      is_approved: true,
    }

    const addSightingSpy = vi.spyOn(sightingsDb, 'addSighting')

    const res = await request(server)
      .post('/api/v1/sightings')
      .send(newSighting)

    expect(res.statusCode).toBe(200)
    expect(addSightingSpy).toHaveBeenLastCalledWith(newSighting)
  })
  it('should send an error message', async () => {
    const newSighting = {
      id: 4,
      location: 'Kosciuszko National Park, New South Wales, Australia',
      date: '2024-04-13',
      time: '23:00:00',
      description:
        'Lost in my thoughts, I barely registered the faint rustle of leaves overhead. Then, with a sudden thud, a dark silhouette descended, landing mere inches from where I sat. My heart leaped into my throat as I locked eyes with the formidable creature before me - a drop bear, its sharp claws poised to strike. With trembling hands, I fumbled for my flashlight, the beam revealing its fearsome form. In a desperate bid for survival, I scrambled to my feet, the adrenaline surging through my veins as I dashed into the darkness, the echoes of its growls haunting my every step. It was a harrowing encounter that left me shaken to the core, a stark reminder of the unforgiving wilderness that lay beyond the safety of civilization.',
      email: 'example4@email.com',
      is_approved: true,
    }

    vi.mocked(sightingsDb.addSighting).mockRejectedValue(newSighting)

    const res = await request(server)
      .post('/api/v1/sightings')
      .send(newSighting)

    expect(res.statusCode).toBe(500)
  })
})
