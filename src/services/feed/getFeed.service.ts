import feedModel from '../../models/feed.model'
import { FeedInterface } from '../../models/feed.interface'
import { FILTER, RESPONSE } from '../../constants'

export const getFeedService = async (_id: string) => {
  try {
    const feed: FeedInterface[] = await feedModel.find(
      { _id, delete: false },
      FILTER.MONGOOSE_FILTER
    )

    return {
      status: RESPONSE.OK.status,
      data: {
        status: RESPONSE.OK.status,
        type: RESPONSE.OK.type,
        feed
      }
    }
  } catch (err) {
    return { status: 500, data: { message: 'Get Feed Service', err } }
  }
}
