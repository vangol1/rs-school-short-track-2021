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
  const arr = str.split('');
  let current = arr[0];
  let count = 0;
  let res = '';
  arr.forEach((elem, index) => {
    if (elem !== current) {
      if (count > 1) {
        res += `${count}${current}`;
      } else {
        res += current.toString();
      }
      count = 1;
      current = elem;
    } else {
      count++;
    }
    if (index === arr.length - 1) {
      if (count > 1) {
        res += `${count}${current}`;
      } else {
        res += current.toString();
      }
    }
  });
  return res;
}

module.exports = encodeLine;
