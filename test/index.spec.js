'use strict'
const Common = require('../src/index')

describe('Common Test', () => {
  it('Initialize should succeed', () => {
    Common.initialize().then(() => {
      expect(true)
    })
  })
  it('Initialize should fail', () => {
    Common.config = null
    Common.initialize({}).catch((err) => {
      expect(err).toBeDefined()
    })
  })
  it('Clonned objects match', () => {
    const a = { test: { test: 'hello' } }
    const b = Common.clone(a)
    expect(b).toEqual(a)
  })
})
