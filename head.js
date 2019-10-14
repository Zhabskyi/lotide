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

const head = function(array){
  return array[0];
}

// TEST CODE
assertEqual(head([5,6,7]), 5);
assertEqual(head([7]), 7);
assertEqual(head([1,'Hello',7]), 7);
assertEqual(head([]), undefined);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");