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

const flatten = function(array) {
  let result = [];
  for (let i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      for (let j = 0; j < array[i].length; j++) {
        result.push(array[i][j]);
      }
    } else {
    result.push(array[i])
    }
  }
  return result;
}

console.log(flatten([1, [5 ,6], 5, [7]]))

// TEST CODE
assertArraysEqual(flatten([1, [5 ,6], 5, [7]]), [1, 5, 6, 5, 7]);
assertArraysEqual(flatten([1, [5 ,6, 1], 5]), [1, 5, 6, 1, 5]);
assertArraysEqual(flatten([1, [2 , 1], 5, [3, 6, 7, 9]]), [1, 2, 1, 5, 3, 6, 7, 9]);
