// FUNCTION IMPLEMENTATION
const check = String.fromCodePoint(0x2705);
const wrong = String.fromCodePoint(0x274C);

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`${check} ${check} ${check}: ${actual} === ${expected}`);
  } else {
    console.log(`${wrong} ${wrong} ${wrong} : ${actual} !== ${expected}`);
  }
};

module.exports = assertEqual;