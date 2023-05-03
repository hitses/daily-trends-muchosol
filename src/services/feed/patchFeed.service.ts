// import Feed from 'feeds model route'

export const patchFeedService = async () => {
  try {
    return { status: 200, data: { message: 'Patch Feeds Service' } }
  } catch (err) {
    return { status: 500, data: { message: 'Patch Feeds Service', err } }
  }
}
