// import Feed from 'feeds model route'

export const getFeedsService = async () => {
  try {
    return { status: 200, data: { message: 'Get Feeds Service' } }
  } catch (err) {
    return { status: 500, data: { message: 'Get Feeds Service', err } }
  }
}
