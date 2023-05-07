import { feedNotFound } from '../feedNotFound'
import { notObjectId } from '../notObjectId'
import { paramsIdNotFound } from '../paramsIdNotFound'

export const deleteFeedValidations = [
  paramsIdNotFound,
  notObjectId,
  feedNotFound
]
