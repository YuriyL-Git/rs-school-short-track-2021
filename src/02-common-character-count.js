/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let maxS = s1.split('');
  let minS = s2.split('');
  let res = 0;
  if (minS.length > maxS.length) [maxS, minS] = [minS, maxS];

  for (const s of minS) {
    if (maxS.includes(s)) {
      res++;
      maxS.splice(maxS.indexOf(s), 1);
    }
  }
  return res;
}


module.exports = getCommonCharacterCount;
