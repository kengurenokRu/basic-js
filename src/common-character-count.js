const { NotImplementedError } = require('../extensions/index.js');

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
  let count = 0;    
  if (s1 === "" || s2 === "") return count;
    for (let i = 0; i < s1.length; i++) {
      let k = 0;
      for (k=0; k<s2.length; k++)
      if (s1[i] === s2[k]) break;
      console.log(s2);
      if (k!==s2.length) {
      count++;
        s2 = s2.substring(0, k) + s2.substring(k+1, s2.length);
        console.log(s2);
      }
    } 
  return count;
}

module.exports = {
  getCommonCharacterCount
};
