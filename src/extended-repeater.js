const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let resStr = str;
  let temp = "";
  let tempCount = 0;
  let tempSeparator = "";
  let tempStr = "";
  let res = "";

  if (options.addition !== undefined)
    temp = options.addition;

  if (options.additionRepeatTimes !== undefined)
    tempCount = options.additionRepeatTimes;

  if (options.additionSeparator !== undefined)
    tempSeparator = options.additionSeparator;
  else tempSeparator = '|';

  tempStr = temp;

  for (let i = 1; i <= tempCount - 1; i++) {
    tempStr = tempStr + tempSeparator + temp;
  }
  resStr += tempStr;
  if (options.repeatTimes !== undefined)
    tempCount = options.repeatTimes;
  else tempCount = 0;

  if (options.separator !== undefined)
    tempSeparator = options.separator;
  else tempSeparator = "+";

  res = resStr;

  for (let i = 1; i < tempCount; i++) {
    res = res + tempSeparator + resStr;
  }
  return res;
}

module.exports = {
  repeater
};
