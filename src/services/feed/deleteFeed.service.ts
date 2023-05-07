import { RESPONSE } from '../../constants'
import feedModel from '../../models/feed.model'

export const deleteFeedService = async (_id: string) => {
  try {
    await feedModel.findOneAndUpdate(
      { _id, delete: false },
      { delete: true },
      { new: true }
    )

    return {
      status: RESPONSE.DELETED.status,
      data: {
        status: RESPONSE.DELETED.status,
        type: RESPONSE.DELETED.type,
        message: 'Feed deleted succesfully'
      }
    }
  } catch (err) {
    return {
      status: RESPONSE.SERVER_ERROR.status,
      data: {
        status: RESPONSE.SERVER_ERROR.status,
        type: RESPONSE.SERVER_ERROR.type,
        message: 'Delete Feeds Service',
        err
      }
    }
  }
}
