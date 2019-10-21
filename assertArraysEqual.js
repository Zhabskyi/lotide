const assertEqual = require('/assertEqual');

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

module.exports = assertArraysEqual;