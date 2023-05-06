import feedModel from '../../models/feed.model'

export const getFeedsService = async () => {
  try {
    const result = await feedModel.aggregate([
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

    return { status: 200, data: result }
  } catch (err) {
    return { status: 500, data: { message: 'Get Feeds Service', err } }
  }
}
