export const RESPONSE = Object.freeze({
  NOT_FOUND: {
    status: 404,
    type: 'Not found'
  },
  BAD_REQUEST: {
    status: 400,
    type: 'Bad request'
  },
  SERVER_ERROR: {
    status: 500,
    type: 'Server error'
  },
  OK: {
    status: 200,
    type: 'Ok'
  },
  CREATED: {
    status: 201,
    type: 'Created'
  },
  DELETED: {
    status: 204,
    type: 'Deleted'
  },
  TIMEOUT: {
    status: 408,
    type: 'Timeout. Try again later'
  }
})
