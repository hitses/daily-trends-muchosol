import { RESPONSE } from '../../constants'
import { scrapElMundo, scrapElPais } from '../../helpers/playwright'
import { FeedInterface } from '../../models/feed.interface'
import feedModel from '../../models/feed.model'

export const createFeedsService = async () => {
  try {
    // Get by scraping feeds from El Mundo and El País
    const elMundo = (await scrapElMundo()) as FeedInterface[]
    const elPais = (await scrapElPais()) as FeedInterface[]

    let mundoTimeout = false
    let paisTimeout = false

    // Check if scraping failed and return timeout by El Mundo
    if (typeof elMundo === 'string' && elMundo === 'Timeout')
      mundoTimeout = true

    // Check if scraping failed and return timeout by El País
    if (typeof elPais === 'string' && elPais === 'Timeout') paisTimeout = true

    // Return timeout if scraping failed
    if (mundoTimeout || paisTimeout)
      return {
        status: RESPONSE.TIMEOUT.status,
        data: {
          status: RESPONSE.TIMEOUT.status,
          type: RESPONSE.TIMEOUT.type,
          mundoTimeout,
          paisTimeout,
          message: 'Timeout! Try again'
        }
      }

    const feeds = [...elMundo, ...elPais]

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

    return {
      status: RESPONSE.CREATED.status,
      data: {
        status: RESPONSE.CREATED.status,
        type: RESPONSE.CREATED.type,
        message: 'Feeds created'
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
