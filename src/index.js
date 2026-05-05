module.exports = function towelSort(matrix) {
  const res = [];
  if (!matrix || matrix.length === 0) return res;
  for (let i = 0; i < matrix.length; i += 1) {
    if (i % 2 !== 0) {
      res.push(matrix[i].reverse());
    } else {
      res.push(matrix[i]);
    }
  }
  return res.flat();
};
