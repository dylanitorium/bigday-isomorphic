export default (array, key, value) => {
  const result = {};
  array.forEach((item) => {
    if (item[value]) {
      result[item[key]] = item[value];
    }
  });
  return result;
};
