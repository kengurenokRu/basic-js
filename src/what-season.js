const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
 if (arguments.length === 0) return "Unable to determine the time of year!";
 let month;
 try
 {
  month = date.getMonth();
}
catch
{
  return "Invalid date!";
}
  if (month === 11 || month <=1) return 'winter';
  else if (month<=4) return 'spring';
  else if (month<=7) return 'summer';
  else if (month<=10) return 'autumn'; 
}

module.exports = {
  getSeason
};
