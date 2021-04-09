/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  const res = matrix.map((el) => el.slice());
  res.map((el) => el.fill(0));
  const width = matrix[0].length;
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < width; j++) {
      if (matrix[i][j] === true) {
        if (res[i - 1]) {
          if (j !== 0) {
            res[i - 1][j - 1]++;
          }
          if (j !== width) {
            res[i - 1][j + 1]++;
          }
          res[i - 1][j]++;
        }
        if (j !== 0) {
          res[i][j - 1]++;
        }
        if (j !== width) {
          res[i][j + 1]++;
        }
        if (res[i + 1]) {
          if (j !== 0) {
            res[i + 1][j - 1]++;
          }
          if (j !== width) {
            res[i + 1][j + 1]++;
          }
          res[i + 1][j]++;
        }
      }
    }
  }
  return res;
}

module.exports = minesweeper;
