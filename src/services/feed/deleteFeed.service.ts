import feedModel from '../../models/feed.model'

export const deleteFeedService = async (_id: string) => {
  try {
    const feed = await feedModel.findOneAndUpdate(
      { _id, delete: false },
      { delete: true },
      { new: true }
    )

    if (!feed) return { status: 404, data: { message: 'Feed not found' } }

    return { status: 200, data: { message: 'Feed deleted succesfully' } }
  } catch (err) {
    return { status: 500, data: { message: 'Delete Feeds Service', err } }
  }
}
