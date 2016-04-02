/* global describe, it */

'use strict'

require('should')
var Ardent = require('..')

describe('schema defintion', function () {
  it('simple rule', function () {
    [{age: Number}, {age: { type: Number }}].forEach(function (rule) {
      Ardent(rule)({age: '23'}).should.be.eql({age: 23})
    })
  })
})
