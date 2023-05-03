// import Feed from 'feeds model route'

export const deleteFeedService = async () => {
  try {
    return { status: 200, data: { message: 'Delete Feeds Service' } }
  } catch (err) {
    return { status: 500, data: { message: 'Delete Feeds Service', err } }
  }
}
