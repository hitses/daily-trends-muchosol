import { Router } from 'express'
import {
  deleteFeedValidations,
  getFeedValidations,
  patchFeedValidations
} from '../middlewares'
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
router.get('/:id', getFeedValidations, getFeed)
router.patch('/:id', patchFeedValidations, patchFeed)
router.delete('/:id', deleteFeedValidations, deleteFeed)

export default router
