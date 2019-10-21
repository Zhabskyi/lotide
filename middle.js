const middle = function(array) {
  let result = [];
  if (array.length === 1) {
    return array;
  } else if (array.length < 3) {
    return result;
  } else if (array.length % 2 === 0) {
    let index = array.length / 2;
    result = [...result, array[index - 1], array[index]];
    return result;
  } else {
    let index = Math.floor(array.length / 2);
    result = [...result, array[index]];
    return result;
  }
};

module.exports = middle;