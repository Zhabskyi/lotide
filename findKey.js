const findKeyByValue = function(object, value) {
  for (const key in object) {
    if (object[key] === value) {
      return key;
    }
  }
};

const findKey = (obj, callback) => {
  for (const key in obj) {
    if (callback(obj[key])) {
      return key;
    }
  }
};

// TEST CODE
const check = String.fromCodePoint(0x2705);
const wrong = String.fromCodePoint(0x274C);

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`${check} ${check} ${check}: ${actual} === ${expected}`);
  } else {
    console.log(`${wrong} ${wrong} ${wrong} : ${actual} !== ${expected}`);
  }
};

const result = findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2) // => "noma"

 assertEqual(result, "noma");

 const result1 = findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 3) // => "noma"

 assertEqual(result1, "Akaleri");