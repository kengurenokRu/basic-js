const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  let namesNew = names;
    let count = -1;
    for (let i = 0; i < names.length; i++) {
      for (let j = 0; j <= namesNew.length; j++) {
        if (namesNew[j] === names[i]) {
          count++;
          if (count>0)
            namesNew[j] += "("+count+")";
          }
        }      
      count = -1;
    }
return namesNew;

  

}

module.exports = {
  renameFiles
};
