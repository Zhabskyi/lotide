const head   = require('./head');
const tail   = require('./tail');
const middle = require('./middle');
const flatten = require('./flatten');
const countOnly = require('./countOnly');
const letterPositions = require('./letterPositions');
const findKeyByValue = require('./findKeyByValue');
const assertArraysEqual = require ('./assertArraysEqual');
const assertEqual = require ('./assertEqual');
const eqArrays = require ('./eqArrays');

module.exports = {
  head,
  tail,
  middle,
  flatten,
  countOnly,
  findKeyByValue,
  letterPositions,
  assertArraysEqual,
  assertEqual,
  eqArrays
};