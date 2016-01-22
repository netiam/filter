import filter from '../src/index'
import util from 'util'

describe('Functions', () => {

  it('should test functions', () => {
    let query

    query = 'between(1, 2)'

    filter(query)
      .toObject()
      .should.eql({'$between': [1, 2]})

    query = 'notBetween(1, 2)'

    filter(query)
      .toObject()
      .should.eql({'$notBetween': [1, 2]})

    query = 'in(1, 2)'

    filter(query)
      .toObject()
      .should.eql({'$in': [1, 2]})

    query = 'notIn(1, 2)'

    filter(query)
      .toObject()
      .should.eql({'$notIn': [1, 2]})

    query = 'overlap(1, 2)'

    filter(query)
      .toObject()
      .should.eql({'$overlap': [1, 2]})

    query = 'contains(1, 2)'

    filter(query)
      .toObject()
      .should.eql({'$contains': [1, 2]})

    query = 'contained(1, 2)'

    filter(query)
      .toObject()
      .should.eql({'$contained': [1, 2]})

    query = 'any(1, 2)'

    filter(query)
      .toObject()
      .should.eql({'$any': [1, 2]})
  })

  it('should combine functions with expressions', () => {
    let query

    query = 'between(1, 2) AND a EQ 1'

    filter(query)
      .toObject()
      .should.eql(
      {
        '$and': [
          {'$between': [1, 2]},
          {a: 1}
        ]
      })
  })

})
