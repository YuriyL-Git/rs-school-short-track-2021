/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */

function deleteDigit(input) {
  const inputArr = input.toString()
    .split('');

  let current = inputArr[0];
  let found = false;
  for (let i = 1; i < inputArr.length; i++) {
    if (inputArr[i] > current) {
      found = true;
      inputArr.splice(i - 1, 1);
      break;
    }
    current = inputArr[i];
  }
  if (!found) inputArr.pop();

  return (+inputArr.join(''));
}

module.exports = deleteDigit;
