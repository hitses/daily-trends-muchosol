import { bodyNotFound } from '../bodyNotFound'
import { falsyBodyProperties } from '../falsyBodyProperties'
import { feedNotFound } from '../feedNotFound'
import { notObjectId } from '../notObjectId'
import { invalidNewspaperType } from '../invalidNewspaperType'
import { paramsIdNotFound } from '../paramsIdNotFound'

export const patchFeedValidations = [
  paramsIdNotFound,
  notObjectId,
  feedNotFound,
  bodyNotFound,
  falsyBodyProperties,
  invalidNewspaperType
]
