// FUNCTION IMPLEMENTATION
const check = String.fromCodePoint(0x2705);
const wrong = String.fromCodePoint(0x274C);

const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    return false;
  }
  return true;
};

const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  } else {
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) {
        return false;
      }
    }
    return true;
  }
};

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {
  const inspect = require('util').inspect;
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    console.log(`${wrong} ${wrong} ${wrong} Assertion Failed : ${inspect(object1)} !== ${inspect(object2)}`);
  } else {
    for (const key in object1) {
      if (typeof object1[key] === 'object' && object1[key] !== null && !Array.isArray(object1[key])) {
        eqObjects(object1[key], object2[key]);
      } else {
        if (Array.isArray(object1[key])) {
          if (!eqArrays(object1[key], object2[key])) {
            console.log(`${wrong} ${wrong} ${wrong} Assertion Failed : ${inspect(object1)} !== ${inspect(object2)}`);
            return;
          }
        } else {
          if (!assertEqual(object1[key], object2[key])) {
            console.log(`${wrong} ${wrong} ${wrong} Assertion Failed : ${inspect(object1)} !== ${inspect(object2)}`);
            return;
          }
        }
      }
    }
    console.log(`${check} ${check} ${check} Assertion Passed: ${inspect(object1)} === ${inspect(object2)}`);
    return true;
  }
};

// FUNCTION IMPLEMENTATION
const assertObjectsEqual = function(actual, expected) {
  eqObjects(actual, expected);
};

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
//eqObjects(ab, ba); // => true

const abc = { a: "1", b: "2", c: "3" };
//eqObjects(ab, abc);  // => false
assertObjectsEqual(ab, ba);
assertObjectsEqual(ab, abc);
