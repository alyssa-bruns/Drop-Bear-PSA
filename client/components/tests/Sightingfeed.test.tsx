//@vitest-environment jsdom

import { describe, it, expect, vi, afterEach, beforeAll } from 'vitest'
import { screen } from '@testing-library/react'
import { renderRoute } from '../../test-setup.tsx'
import nock from 'nock'

const mockSighting = [
  {
    id: 3,
    display_name: 'Daintree Rainforest, Queensland, Australia',
    lat: -16.1653032,
    lon: 145.41839146675824,
    date: '2024-04-12',
    time: '10:45',
    description:
      'Excitement coursed through me as I ventured deeper into the lush rainforest, camera in hand. But my sense of wonder was shattered by a sudden shadow overhead. Before I could react, a drop bear plummeted from the canopy, its sharp claws gleaming in the sunlight. Frozen in fear, I could only watch as it loomed over me, its hungry gaze sending chills down my spine. It was a brush with death I would never forget, a stark warning of the dangers that lurk in the untamed wilds.',
    is_approved: 1,
  },
]

// beforeAll(() => {
//   nock.disableNetConnect()

//   vi.spyOn(console, 'error').mockImplementation(() => {})
// })

afterEach(() => {
  vi.clearAllMocks()
})

describe('<Sightingfeed/>', () => {
  it('should render some sightings', async () => {
    const scope = nock('http://localhost')
      .get('/api/v1/sightings/')
      .reply(200, mockSighting)

    renderRoute('/home')

    const displayName = await screen.findByText(
      'Daintree Rainforest, Queensland, Australia',
    )
    expect(displayName).toBeVisible()

    expect(scope.isDone()).toBe(true)
  })
})
