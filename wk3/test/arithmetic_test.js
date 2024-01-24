const assert = require('assert');
const Arithmetic = require('../app/Arithmetic');

describe('Validating Arithmetic Function', () => {
  it('should return 2 when value is 1 + 1', () => {
    assert.equal(Arithmetic.add(1,1), 2);
  });

  it('should return 0 when the value is 1 - 1', () => {
    assert.equal(Arithmetic.subtract(1,1), 0);
  })

})