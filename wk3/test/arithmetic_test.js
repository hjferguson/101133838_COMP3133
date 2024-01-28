const assert = require('assert');
const Arithmetic = require('../app/Arithmetic');

describe('Validating Arithmetic Function', () => {
  it('should return 2 when value is 1 + 1', () => {
    assert.equal(Arithmetic.add(1,1), 2);
  });

  it('should return 2, but Im going to assert that it should be 1, to make fail', () => {
    assert.equal(Arithmetic.add(1,1), 1);
  })

  it('should return 0 when the value is 1 - 1', () => {
    assert.equal(Arithmetic.subtract(1,1), 0);
  })

  it('should fail because im expecting a 1 instead of a 0', () => {
    assert.equal(Arithmetic.subtract(1,1), 1);
  })

  it('should return 4 when values are 2 and 2', () => {
    assert.equal(Arithmetic.multiply(2,2), 4);
  })

  it('shouldnt return 1 when values are 2 and 2', () => {
    assert.equal(Arithmetic.multiply(2,2), 1);
  })

  it('should return 1 when values are 2 and 2', () => {
    assert.equal(Arithmetic.divide(2,2), 1);
  })

  it('shouldnt return 4 when values are 2 and 2', () => {
    assert.equal(Arithmetic.divide(2,2), 4);
  })



})