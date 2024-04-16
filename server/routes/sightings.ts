import { Router } from 'express'

import * as db from '../db/functions/sightings'

const router = Router()

// GET /api/v1/sightings
router.get('/', async (req, res) => {
  try {
    const posts = await db.getAllSightings()
    res.json(posts)
  } catch (error) {
    res.sendStatus(500)
  }
})

// GET /api/v1/sightings/home/location/:location
router.get('/location/:location', async (req, res) => {
  const location = req.params.location
  try {
    const sighting = await db.getSightingsByLocation(location)
    res.json(sighting)
  } catch (error) {
    console.error(`Database error: ${error}`)
    res.sendStatus(500)
  }
})

// GET /api/v1/sightings/:id
router.get('/:id', async (req, res) => {
  const id = Number(req.params.id)
  try {
    const sighting = await db.getSightingById(id)
    res.json(sighting)
  } catch (error) {
    console.error(`Database error: ${error}`)
    res.sendStatus(500)
  }
})

// POST /api/v1/sightings
router.post('/', async (req, res) => {
  try {
    const newSighting = req.body
    await db.addSighting(newSighting)
    res.sendStatus(200)
  } catch (error) {
    res.sendStatus(500)
  }
})

export default router
