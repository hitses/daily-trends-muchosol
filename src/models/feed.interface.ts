export interface FeedInterface {
  newspaper: NewspaperType
  href: string
  text: string
}

export type NewspaperType = 'El País' | 'El Mundo'
