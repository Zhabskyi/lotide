const check = String.fromCodePoint(0x2705);
const wrong = String.fromCodePoint(0x274C);

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


// TEST CODE
assertArraysEqual([1, 2, 3], [1, 2, 3]); 
assertArraysEqual([1, 2, 3, 4, 5], [1, 2, 3, 6, 5]); 
assertArraysEqual(['a', 2, 3], ['a', 2, 3]); 
assertArraysEqual([1, 2, 3, 4], [1, 2, 3]); 
assertArraysEqual(['e', 2, 3], [1, 2, 3]);