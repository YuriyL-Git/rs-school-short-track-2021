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
  /* ----- function generate array of coordinates around given point ----- */
  function generateCoords(indexI, indexJ, lengthI, lenghtJ) {
    const result = [];
    const initial = [-1, 1, 0];

    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        const resI = indexI + initial[i];
        const resJ = indexJ + initial[j];
        if (resI >= 0 && resJ >= 0 && resI < lengthI && resJ < lenghtJ) {
          result.push([resJ, resI]);
        }
      }
    }
    result.pop();
    return result;
  }

  if (matrix.length === 0) return 0;

  const lengthI = matrix.length;
  const lengthJ = matrix[0].length;

  /* ------ generate result array ---------*/
  const resArr = [];
  for (let i = 0; i < lengthI; i++) {
    const tempArr = [];
    for (let j = 0; j < lengthJ; j++) {
      tempArr.push(0);
    }
    resArr.push(tempArr);
  }

  /* ----- generate mine sweper field ----- */
  for (let i = 0; i < lengthI; i++) {
    for (let j = 0; j < lengthJ; j++) {
      const cellsArray = generateCoords(i, j, lengthI, lengthJ);

      for (let k = 0; k < cellsArray.length; k++) {
        const resI = cellsArray[k][0];
        const resJ = cellsArray[k][1];
        if (matrix[i][j]) resArr[resI][resJ]++;
      }
    }
  }
  return resArr;
}

module.exports = minesweeper;
