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

export default router
