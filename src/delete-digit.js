const { NotImplementedError } = require('../extensions/index.js');

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
function deleteDigit(n) {
  let temp = n.toString();
  let max = -1;
  for (let i=0; i<temp.length; i++)
  {
    let temp2 = temp.slice(0, i)+temp.slice(i+1, temp.length);
    if (Number(temp2) >max) max = Number(temp2);
  }
  return max;  
}

module.exports = {
  deleteDigit
};
