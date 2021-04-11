/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */

function getDNSStats(domains) {
  const result = {};

  for (let i = 0; i < domains.length; i++) {
    const elements = domains[i].split('.').reverse();

    const currentSet = [];
    elements.forEach((element) => {
      currentSet.push(element);
      const key = `.${currentSet.join('.')}`;

      if (!result[key]) {
        result[key] = 1;
      } else {
        result[key]++;
      }
    });
  }
  return result;
}

module.exports = getDNSStats;
