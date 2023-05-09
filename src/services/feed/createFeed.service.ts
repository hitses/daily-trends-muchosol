import { RESPONSE } from '../../constants'
import feedModel from '../../models/feed.model'
import { FeedInterface } from '../../models/feed.interface'

export const createFeedService = async (feed: FeedInterface) => {
  try {
    const newFeed = await feedModel.create(feed)

    newFeed.save()

    return {
      status: RESPONSE.CREATED.status,
      data: {
        status: RESPONSE.CREATED.status,
        type: RESPONSE.CREATED.type,
        data: {
          _id: newFeed._id,
          text: newFeed.text,
          href: newFeed.href,
          newspaper: newFeed.newspaper
        }
      }
    }
  } catch (err) {
    return {
      status: RESPONSE.SERVER_ERROR.status,
      data: {
        status: RESPONSE.SERVER_ERROR.status,
        type: RESPONSE.SERVER_ERROR.type,
        message: 'createFeedService()',
        err
      }
    }
  }
}
