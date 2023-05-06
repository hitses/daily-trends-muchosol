import { FeedInterface } from '../../models/feed.interface'
import feedModel from '../../models/feed.model'

export const createFeeds = async (feeds: FeedInterface[]) => {
  try {
    // Get feeds that already exist in the database
    const existingFeeds: FeedInterface[] = await feedModel
      .find(
        { href: { $in: feeds.map(feed => feed.href) } },
        { _id: 0, href: 1 }
      )
      .lean()

    // Filter feeds to get only those that do not exist in the database
    const newFeeds: FeedInterface[] = feeds.filter(
      feed =>
        !existingFeeds.some(existingFeed => existingFeed.href === feed.href)
    )

    // Insert new feeds into the database
    if (newFeeds.length > 0)
      await feedModel.insertMany(newFeeds, { ordered: false })
  } catch (err) {
    console.log(err)
  }
}
