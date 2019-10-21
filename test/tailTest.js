const tail = require('../tail');
const assert = require('chai').assert;
const expext = require('chai').expect;

describe("#tail", () => {
  it("returns [Lighthouse, Labs] for [Hello, Lighthouse, Labs]", () => {
    assert.deepEqual(tail(["Hello", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"]);
  });

  it("returns empty array for array with one element", () => {
    assert.deepEqual(tail(["Labs"]), []);
  });

  it("returns empty array for empty array", () => {
    expext(tail([])).to.deep.equal([]);
  });
});