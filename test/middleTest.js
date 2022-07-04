// const middle = require('../middle');
// const assertArraysEqual = require('../assertArraysEqual');

// assertArraysEqual((middle([1, 2, 3])), 2); // => [2]
// assertArraysEqual((middle([1, 2, 3, 4, 5, 6])), [3,4]); // => [3,4]


const assert = require('chai').assert;
const middle = require('../middle');

describe("#middle", () => {
  it("returns 2 for [1, 2, 3]", () => {
    assert.deepEqual(middle([1, 2, 3]), [2]);
  });

  it("returns '3,4' for ['1,2,3,4,5,6']", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5, 6]), [ 3, 4 ]); 
  });

});
