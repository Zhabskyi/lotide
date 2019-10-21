# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @username/lotide`

**Require it:**

`const _ = require('@username/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `middle`:

Function should return an array with only the middle element(s) of the provided array. This means that the length of the returned elements could vary.

  * For arrays with one or two elements, there is no middle. Return an empty array.
```js
  middle([1]) // => []
  middle([1, 2]) // => []
```
  * For arrays with odd number of elements, an array containing a single middle element should be returned.
```js
  middle([1, 2, 3]) // => [2]
  middle([1, 2, 3, 4, 5]) // => [3]
```
  * For arrays with an even number of elements, an array containing the two elements in the middle should be returned
```js
  middle([1, 2, 3, 4]) // => [2, 3]
  middle([1, 2, 3, 4, 5, 6]) // => [3, 4]
```
Expected Output [ 1, 2, 5, 7, 2 ];

* `withOut`

Function return a subset of a given array, removing unwanted elements.
```j
without([1, 2, 3], [1]) // => [2, 3]
without(["1", "2", "3"], [1, 2, "3"]) // => ["1", "2"]
```
* `flatten`

Function take in an array of arrays and return a "flattened" version of the array.
```js
flatten([1, 2, [3, 4], 5, [6]]) // => [1, 2, 3, 4, 5, 6]
```

* `countOnly`

Function should report back how many instances of each string were found in the allItems array of strings.
```js
countLetters("lighthouse in the house");
{
  l: 1,
  i: 2,
  g: 1,
  h: 4,
  t: 2,
  o: 2,
  u: 2,
  s: 2,
  e: 3,
  n: 1,
}
```

* `letterPosition`

Function return all the indices (zero-based positions) in the string where each character is found.

* `findKeyByValue`

Function takes in an object and a value. It should scan the object and return the first key which contains the given value. If no key with that given value is found, then it should return undefined.

* `eqObjects` 

Function take in two objects and returns true or false, based on a perfect match.

* `countLetters`

Function return an object where each unique character encountered is a property of the object and the value for that property/key should be the number of occurrences for that character.

* `takeUtil`:

Function keep collecting items from a provided array until the callback provided returns a truthy value.
```js
  const data = [1, 2, 5, 7, 2, -1, 2, 4, 5];
  const results = takeUntil(data, x => x < 0);
```
Expected Output [ 1, 2, 5, 7, 2 ];

* `findKey`:

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