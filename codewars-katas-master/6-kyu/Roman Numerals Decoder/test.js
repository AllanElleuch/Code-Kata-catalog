// import { solution } from './solution';
// import { assert } from 'chai';
const solution = require('./index.ts')
const assert = require('assert');

describe("solution", function () {
  it('tests for I', () => {
    assert.equal(solution('I'), 1);
  });

  it('tests for IV', () => {
    assert.equal(solution('IV'), 4);
  });

  it('tests for IX', () => {
    assert.equal(solution('IX'), 9);
  });

  it('tests for XXI', () => {
    assert.equal(solution('XXI'), 21);
  });
  it('tests for MMVIII', () => {
    assert.equal(solution('MMVIII'), 2008);
  });
  it('tests for MDCLXVI', () => {
    assert.equal(solution('MDCLXVI'), 1666);
  });
});