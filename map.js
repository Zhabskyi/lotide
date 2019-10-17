const words = ["ground", "control", "to", "major", "tom"];

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

//TEST CODE
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


assertArraysEqual(map(words, word => word[0]), ['g', 'c', 't', 'm', 't']);
assertArraysEqual(map(words, word => word.toUpperCase()), ["GROUND", "CONTROL", "TO", "MAJOR", "TOM"]);
assertArraysEqual(map(words, word => word + 'Hey'), ["groundHey", "controlHey", "toHey", "majorHey", "tomHey"]);