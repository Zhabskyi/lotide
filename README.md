# LOTIDE

### The Lotide project is a modular collection of functions that operate on data, namely Arrays and Objects. In creating these functions, we will become more comfortable with FOCAL as well as writing modular code and Automated Testing (by writing unit tests).

## takeUtil.js

Function keep collecting items from a provided array until the callback provided returns a truthy value.

```js
  const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
  const results1 = takeUntil(data1, x => x < 0);
  console.log(results1);
```
Expected Output [ 1, 2, 5, 7, 2 ];

## findKey.js

Function takes in an object and a callback. It should scan the object and return the first key for which the callback returns a truthy value. If no key is found, then it should return undefined.

```js
  findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
  }, x => x.stars === 2);
```

Expected Output "noma".