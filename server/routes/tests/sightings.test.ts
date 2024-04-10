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
