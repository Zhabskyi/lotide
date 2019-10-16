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

const countLetters = function(str) {
  const noSpaces = str.split(" ").join("");
  let result = {};
  for (const iterator of noSpaces) {
    if (result[iterator]) {
      result[iterator] += 1;
    } else {
      result[iterator] = 1;
    }
  }
  return result;
};

console.log(countLetters("lighthouse in the house"));


const result1 = countLetters("lighthouse in the house");

assertEqual(result1["l"], 1);
assertEqual(result1["i"], 2);
assertEqual(result1["g"], 1);
assertEqual(result1["h"], 4);
assertEqual(result1["t"], 2);
assertEqual(result1["o"], 2);
assertEqual(result1["u"], 2);
assertEqual(result1["s"], 2);
assertEqual(result1["e"], 3);
assertEqual(result1["n"], 1);