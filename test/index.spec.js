'use strict'
const Common = require('../src/index')

describe('Common Test', () => {
  it('Default initialize should succeed', () => {
    Common.initialize().then(() => {
      expect(true)
    })
  })
  it('Initialize with coinfig should succeed', () => {
    const config = { test: true }

    Common.initialize(config).then(() => {
      expect(Common.configuration).objectContaining(config)
    })
  })
  it('Clonned objects match', () => {
    const a = { test: { test: 'hello' } }
    const b = Common.clone(a)
    expect(b).toEqual(a)
  })
})
