import request from 'superagent'
import { NewSighting, Sighting } from '../../models/sightings'

const rootUrl = '/api/v1/sightings'

export async function getAllSightings(): Promise<Sighting[]> {
  return await request.get(rootUrl).then((res) => {
    return res.body
  })
}

export async function getSightingById(id: number): Promise<Sighting> {
  const res = await request.get(`${rootUrl}/${id}`)
  return res.body
}

export async function getSightingsByLocation(
  location: string,
): Promise<Sighting[]> {
  const res = await request.get(`${rootUrl}/location/${location}`)
  return res.body
}

export async function addSighting(newSighting: NewSighting) {
  const res = await request.post(`${rootUrl}`).send(newSighting)
  return res
}
