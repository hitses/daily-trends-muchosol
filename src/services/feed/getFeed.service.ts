// import Feed from 'feeds model route'

export const getFeedService = async () => {
  try {
    return { status: 200, data: { message: 'Get Feed Service' } }
  } catch (err) {
    return { status: 500, data: { message: 'Get Feed Service', err } }
  }
}
