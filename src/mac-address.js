const { NotImplementedError } = require('../extensions/index.js');

/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {Number} inputString
 * @return {Boolean}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */
function isMAC48Address(n) {
  let temp = n.split('-');
  if (temp.length > 6) return false;
  if (temp[0].length !== 2 || isNaN(parseInt(temp[0], 16))) return false;
  if (temp[1].length !== 2 || isNaN(parseInt(temp[1], 16))) return false;
  if (temp[2].length !== 2 || isNaN(parseInt(temp[2], 16))) return false;
  if (temp[3].length !== 2 || isNaN(parseInt(temp[3], 16))) return false;
  if (temp[4].length !== 2 || isNaN(parseInt(temp[4], 16))) return false;
  if (temp[5].length !== 2 || isNaN(parseInt(temp[5], 16))) return false;
  return true;
}
module.exports = {
  isMAC48Address
};
