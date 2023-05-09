import { Router } from 'express'
import {
  createFeedValidations,
  deleteFeedValidations,
  getFeedValidations,
  patchFeedValidations
} from '../middlewares'
import {
  createFeed,
  createFeeds,
  deleteFeed,
  getFeed,
  getFeeds,
  patchFeed
} from '../controllers'

const router = Router()

router.post('/', createFeeds)
router.post('/new', createFeedValidations, createFeed)
router.get('/', getFeeds)
router.get('/:id', getFeedValidations, getFeed)
router.patch('/:id', patchFeedValidations, patchFeed)
router.delete('/:id', deleteFeedValidations, deleteFeed)

export default router
