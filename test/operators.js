const filter = require('../lib/index').default

describe('Operators', () => {

  it('should create empty object', () => {
    const query = ''
    filter(query).toObject().should.eql({})
  })

  it('should create filter object', () => {
    const query = 'a EQ b AND c EQ d'
    filter(query).toObject().should.deepEqual({
      '$and': [{a: 'b'}, {c: 'd'}]
    })
  })

})
