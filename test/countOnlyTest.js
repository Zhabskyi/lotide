const assert = require('chai').assert;
const countOnly = require('../countOnly');

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const count = { "Jason": true, "Karima": true, "Fang": true }

describe("#countOnly", () => {
  it("returns { Fang: 2, Jason: 1 } for firstNames && count", () => {
    assert.deepEqual(countOnly(firstNames, count), { Fang: 2, Jason: 1 });
  });
});