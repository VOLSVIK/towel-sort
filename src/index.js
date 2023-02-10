
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if ('object' === typeof (matrix)) {
    let c = []
    matrix.forEach((element, i) => {
      if (i / 2 % 1 != 0) {
        c = c.concat([...element].sort((a, b) => b - a))
      } else {
        c = c.concat([...element])
      }
    });
    return c;
  } else {
    return [];
  }
}
