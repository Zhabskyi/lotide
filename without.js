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
const without = function(source, itemsToRemove) {
  let resultArray = [];
  for (let i = 0; i < source.length; i++) {
    if (!itemsToRemove.includes(source[i])) {
        resultArray.push(source[i]);
      }
    }
  return resultArray;
}

// TEST CODE

const words = ["hello", "world", "lighthouse"];
without(["hello", "world", "lighthouse"], ["lighthouse"]);
assertArraysEqual(without(words, ["lighthouse"]), ["hello", "world"]); 

assertArraysEqual(without([1, 2, 3, 4], [2, 3]), [1, 4]);
assertArraysEqual(without([1, 5, 3, 4], [2, 5]), [1, 3, 4]);
assertArraysEqual(without([5, 5, 5, 4], [5]), [4]);

console.log(words); // Make sure the original array was not altered by the without function
