const tail = require('../tail');
const assertEqual = require('../assertEqual');

// Test Case 1: Check the returned array elements
const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result.length, 2); // ensure we get back two elements
assertEqual(result[0], "Lighthouse"); // ensure first element is "Lighthouse"
assertEqual(result[1], "Labs"); // ensure second element is "Labs"

// Test Case2: Check the original array
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!

// Test Case 3: Array with one element
const oneElement = tail(["Hello"]);
assertEqual(oneElement[0], undefined);

// Test Case 4: Empty array
const emptyArray = tail([]);
assertEqual(emptyArray[0], undefined);