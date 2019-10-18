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

const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  } else {
    for (let i = 0; i < arr1.length; i++) {
      if (Array.isArray(arr1[i])) {
        eqArrays(arr1[i], arr2[i]);
      } else {
        if (arr1[i] !== arr2[i]) {
          return false;
        }
      }
    }
    return true;
  }
}

// TEST CODE
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); 
assertEqual(eqArrays([1, 2, 3, 4, 5], [1, 2, 3, 6, 5]), false); 
assertEqual(eqArrays(['a', 2, 3], ['a', 2, 3]), true); 
assertEqual(eqArrays([1, 2, 3, 4], [1, 2, 3]), false); 
assertEqual(eqArrays([1, [1, 2], 3], [1, [1, 1], 3]), false); 