// import Feed from 'feeds model route'

export const createFeedService = async () => {
  try {
    return { status: 201, data: { message: 'Create Feed Service' } }
  } catch (err) {
    return { status: 500, data: { message: 'Create Feed Service', err } }
  }
}
