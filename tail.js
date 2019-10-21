const tail = function(array) {
  if (array.lenght === 1 || array.lenght === 0) {
    return [];
  } else {
    return array.slice(1);
  }
};

module.exports = tail;