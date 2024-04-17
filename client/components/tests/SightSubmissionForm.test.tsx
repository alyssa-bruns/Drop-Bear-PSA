//@vitest-environment jsdom
import { describe, it, expect, vi, afterEach, beforeAll } from 'vitest'
import { screen, within } from '@testing-library/react'
import nock from 'nock'
import { renderRoute } from '../../test-setup'

const mockSightings = {
  sightings: [
    {
      id: 3,
      display_name: 'Daintree Rainforest, Queensland, Australia',
      lat: -16.1653032,
      lon: 145.41839146675824,
      date: '2024-04-12',
      time: '10:45',
      description:
        'Excitement coursed through me as I ventured deeper into the lush rainforest',
      is_approved: 1,
    },
  ],
}

const newSighting = {
  display_name: 'Daintree Rainforest, Queensland, Australia',
  lat: -16.1653032,
  lon: 145.41839146675824,
  date: '2024-04-12',
  time: '10:45',
  description:
    'Excitement coursed through me as I ventured deeper into the lush rainforest',
}

beforeAll(() => {
  nock.disableNetConnect()
})

vi.spyOn(console, 'error').mockImplementation(() => {})

afterEach(() => {
  vi.clearAllMocks()
})

describe('<SightSubmissionForm/>', async () => {
  it('should add a new sighting', async () => {
    const scope = nock('http://localhost')
      .get('/api/v1/sightings')
      .reply(200, mockSightings)

    const addScope = nock('http://localhost')
      .post('/api/v1/sightings', { newSighting })
      .reply(201)

    const moreScope = nock('http://localhost')
      .get('/api/vi/sightings')
      .reply(200, {
        sightings: [
          ...mockSightings.sightings,
          {
            ...newSighting,
            id: 2,
            display_name: 'Daintree Rainforest, Queensland, Australia',
            is_approved: true,
            lat: -16.1653032,
            lon: 145.41839146675824,
          },
        ],
      })

    const { user, ...screen } = renderRoute('/home')

    // const addButton = await screen.getByRole('button', {
    //   name: 'Add your own drop bear sighting!',
    // })

    // await user.click(addButton)

    // const timeInput = await screen.getByLabelText(/time/i)
    // const dateInput = await screen.getByLabelText(/date/i)
    // const descriptionInput = await screen.getByLabelText(/description/i)

    // await user.type(timeInput, '10:45')
    // await user.type(dateInput, '2024-04-12')
    // await user.type(
    //   descriptionInput,
    //   'Excitement coursed through me as I ventured deeper into the lush rainforest',
    // )

    // const addSubmit = await screen.getByRole('button', {
    //   name: 'Submit encounter!',
    // })

    // await user.click(addSubmit)

    // const mapElement = screen.getByTestId('map-container')
    // const mapItems = mapElement.getElementsByClassName('card')

    const list = (await screen.findAllByRole('list')) as HTMLElement[]
    // const listItems = within(list[0])
    //   .getAllByRole('div')
    //   .map((div) => div.textContent)

    console.log(list)
    // console.log(mapItems)
    // expect(mapItems.length).toBe(2)

    // expect(mapItems).toMatchInlineSnapshot(`
    //   [
    //     "Banana",
    //     "Apple",
    //     "Mango",
    //   ]
    // `)
    expect(scope.isDone()).toBe(true)
    expect(addScope.isDone()).toBe(true)
    expect(moreScope.isDone()).toBe(true)
  })
})
