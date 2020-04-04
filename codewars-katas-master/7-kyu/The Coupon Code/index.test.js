const checkCoupon = require('.')

test('Test 1', () => {
  expect(
    checkCoupon('123', '123', 'September 5, 2014', 'October 1, 2014')
  ).toBeTrue()
})

test('Test 2', () => {
  expect(
    checkCoupon('123a', '123', 'September 5, 2014', 'October 1, 2014')
  ).toBeFalse()
})
