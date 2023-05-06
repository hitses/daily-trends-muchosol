import { NewspaperType } from '../../models/feed.interface'
import feedModel from '../../models/feed.model'

export const patchFeedService = async (
  _id: string,
  newspaper: NewspaperType,
  text: string,
  href: string
) => {
  try {
    const feed = await feedModel.findOneAndUpdate(
      { _id, deleted: false },
      { text, href, newspaper },
      { runValidators: true, new: true }
    )

    if (!feed) return { status: 404, data: { message: 'Feed not found' } }

    return { status: 200, data: feed }
  } catch (err) {
    return { status: 500, data: { message: 'Patch Feeds Service', err } }
  }
}
