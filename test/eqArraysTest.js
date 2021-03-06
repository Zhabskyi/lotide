const assertEqual = require('../assertEqual');
const eqArrays = require('../eqArrays');


// TEST CODE
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); 
assertEqual(eqArrays([1, 2, 3, 4, 5], [1, 2, 3, 6, 5]), false); 
assertEqual(eqArrays(['a', 2, 3], ['a', 2, 3]), true); 
assertEqual(eqArrays([1, 2, 3, 4], [1, 2, 3]), false); 
assertEqual(eqArrays([1, [1, 2], 3], [1, [1, 1], 3]), false); 