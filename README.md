# LOTIDE

### The Lotide project is a modular collection of functions that operate on data, namely Arrays and Objects. In creating these functions, we will become more comfortable with FOCAL as well as writing modular code and Automated Testing (by writing unit tests).

## takeUntil.js

Function keep collecting items from a provided array until the callback provided returns a truthy value.

```js
  const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
  const results1 = takeUntil(data1, x => x < 0);
  console.log(results1);

  console.log('---');

  const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
  const results2 = takeUntil(data2, x => x === ',');
  console.log(results2);
```