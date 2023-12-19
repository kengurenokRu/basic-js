const { NotImplementedError } = require('../extensions/index.js');

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
  if (str === "") return "";
  let temp = str;
  let str2 = "";
  let count = 1;
  for (let i = 0; i < temp.length - 1; i++) 
  {
    if (temp[i] === temp[i + 1]) count++;
    else 
    {
      if (count === 1) str2 = str2 + temp[i];
      else str2 = str2 + count + temp[i];
      count = 1;
    }
  }
  if (count === 1) str2 = str2 + temp[temp.length - 1];
      else str2 = str2 + count + temp[temp.length - 1];
  return str2;
}

module.exports = {
  encodeLine
};
