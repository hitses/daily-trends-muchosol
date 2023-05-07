import { paramsIdNotFound } from '../paramsIdNotFound'
import { feedNotFound } from '../feedNotFound'
import { notObjectId } from '../notObjectId'

export const getFeedValidations = [paramsIdNotFound, notObjectId, feedNotFound]
