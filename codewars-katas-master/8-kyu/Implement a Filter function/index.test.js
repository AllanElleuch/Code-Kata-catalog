/* eslint no-unused-vars: 0 */

const Array = require('.')

test('Test 1', () => {
  const biggerThanFour = [1, 2, 3, 4].filter(number => number > 3)
  expect(biggerThanFour).toEqual([4])
})
