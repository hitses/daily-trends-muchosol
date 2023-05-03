import { Router } from 'express'
import feed from './feed.routes'

const router = Router()

router.use('/feed', feed)

export default router
