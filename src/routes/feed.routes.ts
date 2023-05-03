import { Router } from 'express'
import {
  createFeed,
  deleteFeed,
  getFeed,
  getFeeds,
  patchFeed
} from '../controllers'

const router = Router()

router.post('/new', createFeed)
router.get('/', getFeeds)
router.get('/:id', getFeed)
router.patch('/:id', patchFeed)
router.delete('/:id', deleteFeed)

export default router
