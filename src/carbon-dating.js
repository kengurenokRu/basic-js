const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample( sampleActivity ) {
  if (arguments.length === 0) return false;
  if (typeof sampleActivity !== 'string') return false;
  if (isNaN(Number(sampleActivity))) return false;
  let N = Number(sampleActivity);
  if (N>MODERN_ACTIVITY || N<0) return false;
  let N0 = MODERN_ACTIVITY;
  let k = 0.693/HALF_LIFE_PERIOD;
  let t = Math.ceil(Math.abs(Math.log(N0/N)/k));
  if (t === Infinity) return false;
  return t;

}

module.exports = {
  dateSample
};
