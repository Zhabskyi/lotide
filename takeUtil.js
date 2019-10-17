const takeUntil = function(array, callback) {
  let result = [];
  for (const item of array) {
    if (callback(item)) {
      break;
    }
    result.push(item);
  }
  return result;
};


//TEST
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

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');

assertArraysEqual(results1, [ 1, 2, 5, 7, 2 ]);
assertArraysEqual(results2, [ 'I\'ve', 'been', 'to', 'Hollywood' ]);