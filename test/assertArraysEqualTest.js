const assertArraysEqual = require('../assertArraysEqual');

// TEST CODE
assertArraysEqual([1, 2, 3], [1, 2, 3]); 
assertArraysEqual([1, 2, 3, 4, 5], [1, 2, 3, 6, 5]); 
assertArraysEqual(['a', 2, 3], ['a', 2, 3]); 
assertArraysEqual([1, 2, 3, 4], [1, 2, 3]); 
assertArraysEqual(['e', 2, 3], [1, 2, 3]);