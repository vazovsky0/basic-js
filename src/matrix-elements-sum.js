const { NotImplementedError } = require("../lib");

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 *
 * matrix = [
 * [0, 1, 1, 2],
 * [0, 5, 0, 0],
 * [2, 0, 3, 3],
 * ];
 */

function getMatrixElementsSum(matrix) {
  if (!Array.isArray(matrix)) {
    throw new Error("'matrix' parameter must be an instance of the Array!");
  }

  const numRows = matrix.length;
  if (numRows === 0) {
    return 0;
  }

  const numCols = matrix[0].length;
  let totalSum = 0;

  for (let j = 0; j < numCols; j++) {
    for (let i = 0; i < numRows; i++) {
      const element = matrix[i][j];
      if (element === 0) {
        break;
      }
      totalSum += element;
    }
  }

  return totalSum;
}
