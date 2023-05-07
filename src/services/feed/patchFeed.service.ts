import { RESPONSE } from '../../constants'
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
      { _id, delete: false },
      { text, href, newspaper },
      { runValidators: true, new: true }
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
    return {
      status: RESPONSE.SERVER_ERROR.status,
      data: {
        status: RESPONSE.SERVER_ERROR.status,
        type: RESPONSE.SERVER_ERROR.type,
        message: 'Patch Feeds Service',
        err
      }
    }
  }
}
