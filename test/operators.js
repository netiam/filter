import filter from '../src/index'

describe('Operators', () => {

  it('should create filter object', () => {
    const query = 'a EQ b AND c EQ d'
    filter(query).toObject().should.deepEqual({
      '$and': [{a: 'b'}, {c: 'd'}]
    })
  })

})
