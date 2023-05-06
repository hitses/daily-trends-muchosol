import { Router } from 'express'
import {
  createFeeds,
  deleteFeed,
  getFeed,
  getFeeds,
  patchFeed
} from '../controllers'

const router = Router()

router.post('/new', createFeeds)
router.get('/', getFeeds)
router.get('/:id', getFeed)
router.patch('/:id', patchFeed)
router.delete('/:id', deleteFeed)

export default router
