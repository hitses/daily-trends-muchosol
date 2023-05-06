import feedModel from '../../models/feed.model'
import { FeedInterface } from '../../models/feed.interface'
import { FILTER } from '../../constants'

export const getFeedService = async (_id: string) => {
  try {
    const feed: FeedInterface[] = await feedModel.find(
      { _id, delete: false },
      FILTER.MONGOOSE_FILTER
    )

    return { status: 200, data: feed }
  } catch (err) {
    return { status: 500, data: { message: 'Get Feed Service', err } }
  }
}
