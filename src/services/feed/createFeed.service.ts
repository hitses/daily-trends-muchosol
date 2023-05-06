import { createFeeds } from '../../controllers'
import { scrapElMundo, scrapElPais } from '../../helpers/playwright'
import { FeedInterface } from '../../models/feed.interface'

export const createFeedService = async () => {
  try {
    const elMundo = (await scrapElMundo()) as FeedInterface[]
    const elPais = (await scrapElPais()) as FeedInterface[]

    let mundoTimeout = false
    let paisTimeout = false

    if (typeof elMundo === 'string' && elMundo === 'Timeout')
      mundoTimeout = true
    else await createFeeds(elMundo)

    if (typeof elPais === 'string' && elPais === 'Timeout') paisTimeout = true
    else await createFeeds(elPais)

    if (mundoTimeout || paisTimeout)
      return {
        status: 408,
        data: { mundoTimeout, paisTimeout, message: 'Timeout. Try again' }
      }

    return { status: 201, data: { message: 'Feeds created' } }
  } catch (err) {
    console.log(err)
    return { status: 500, data: { message: 'createFeedService()', err } }
  }
}
