const capitals = require('.')

test('Test 1', () => {
  expect(capitals('CodEWaRs')).toEqual([0, 3, 4, 6])
})
