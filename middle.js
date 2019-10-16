const check = String.fromCodePoint(0x2705);
const wrong = String.fromCodePoint(0x274C);

// TEST/ASSERTION FUNCTIONS
const assertArraysEqual = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    console.log(`${wrong} ${wrong} ${wrong} : ${arr1} !== ${arr2}`);
  } else {
    for (let i = 0; i < arr1.length; i++) {
      if (!assertEqual(arr1[i], arr2[i])) {
        console.log(`${wrong} ${wrong} ${wrong} : ${arr1} !== ${arr2}`);
        return;
      }
    }
    console.log(`${check} ${check} ${check}: ${arr1} === ${arr2}`);
    return true;
  }
};

const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    return false;
  }
  return true;
};

// ACTUAL FUNCTION
const middle = function(array) {
  let result = [];
  if (array.length < 3) {
    return result;
  } else if (array.length % 2 === 0) {
    let index = array.length / 2;
    result = [...result, array[index - 1], array[index]];
    return result;
  } else {
    let index = Math.floor(array.length / 2);
    result = [...result, array[index]];
    return result;
  }
};

// TEST CODE
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3, 4]);
assertArraysEqual(middle([1, 2]), []);
assertArraysEqual(middle([1]), [1]);
assertArraysEqual(middle([1, 3, 5]), [3]);