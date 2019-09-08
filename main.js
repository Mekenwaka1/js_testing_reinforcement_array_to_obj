function arrayToObj(nestedArray) {
  const result = {};
  nestedArray.forEach(value => {
    result[value[0]] = value[1];
  });

  return result;
}

module.exports = arrayToObj;
