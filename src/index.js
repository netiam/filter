import Filter from './filter'

export default function(query) {
  if (typeof query !== 'string') {
    throw new Error('Query must be of type string')
  }

  return new Filter(query)
}
