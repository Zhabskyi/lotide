const assert = require('chai').assert;
const flatten = require('../flatten');

describe("#flatten", () => {
  it("returns [1, 5, 6, 5, 7] for [1, [5 ,6], 5, [7]]", () => {
    assert.deepEqual(flatten([1, [5 ,6], 5, [7]]), [1, 5, 6, 5, 7]);
  });

  it("returns [1, 5, 6, 1, 5] for [1, [5 ,6, 1], 5]", () => {
    assert.deepEqual(flatten([1, [5 ,6, 1], 5]), [1, 5, 6, 1, 5]);
  });

  it("returns [1, 5, 6, 1, 5] for [1, [2 , 1], 5, [3, 6, 7, 9]]", () => {
    assert.deepEqual(flatten([1, [2 , 1], 5, [3, 6, 7, 9]]), [1, 2, 1, 5, 3, 6, 7, 9]);
  });
});