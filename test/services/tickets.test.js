'use strict'

const { test } = require('tap')
const {
  build,
} = require('../helper')

test('cannot create a ticket without a login', async (t) => {
  const app = build(t)

  const res = await app.inject({
    method: 'POST',
    url: '/tickets',
    body: {
      title: 'A support ticket',
      body: 'this is a long body'
    }
  })

  t.equal(res.statusCode, 401)
})
