/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  if (str === '') return '';

  const inputArr = [...str.replace(/\s/g, '')];
  inputArr.push(' ');
  let result = '';
  let currentChar = inputArr[0];
  let counter = -1;
  for (let i = 0; i < inputArr.length; i++) {
    counter++;
    if (inputArr[i] !== currentChar || i === inputArr.length - 1) {
      result += counter === 1 ? currentChar : counter + currentChar;
      counter = 0;
      currentChar = inputArr[i];
    }
  }
  return result;
}

module.exports = encodeLine;
