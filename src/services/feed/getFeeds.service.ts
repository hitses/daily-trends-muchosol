import { RESPONSE } from '../../constants'
import feedModel from '../../models/feed.model'

export const getFeedsService = async () => {
  try {
    const feeds = await feedModel.aggregate([
      // Get the five front page stories of each newspaper
      { $sort: { updatedAt: -1 } },
      {
        $group: {
          _id: '$newspaper',
          feeds: { $push: '$$ROOT' }
        }
      },
      {
        $project: {
          newspaper: '$_id',
          feeds: {
            $slice: [
              {
                $slice: ['$feeds', 5]
              },
              0,
              5
            ]
          }
        }
      },
      { $unwind: '$feeds' },
      {
        $project: {
          _id: '$feeds._id',
          text: '$feeds.text',
          href: '$feeds.href',
          newspaper: '$newspaper',
          updatedAt: '$feeds.updatedAt'
        }
      },
      { $sort: { updatedAt: -1 } },
      { $limit: 10 }
    ])

    return {
      status: RESPONSE.OK.status,
      data: {
        status: RESPONSE.OK.status,
        type: RESPONSE.OK.type,
        feeds
      }
    }
  } catch (err) {
    return {
      status: RESPONSE.SERVER_ERROR.status,
      data: {
        status: RESPONSE.SERVER_ERROR.status,
        type: RESPONSE.SERVER_ERROR.type,
        message: 'Get Feeds Service',
        err
      }
    }
  }
}
