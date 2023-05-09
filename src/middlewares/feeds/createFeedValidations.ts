import { bodyNotFound } from '../bodyNotFound'
import { falsyBodyProperties } from '../falsyBodyProperties'
import { notObjectId } from '../notObjectId'
import { invalidNewspaperType } from '../invalidNewspaperType'
import { paramsIdNotFound } from '../paramsIdNotFound'

export const createFeedValidations = [
  paramsIdNotFound,
  notObjectId,
  bodyNotFound,
  falsyBodyProperties,
  invalidNewspaperType
]
