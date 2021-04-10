/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 * @param fileNames
 */

function renameFiles(fileNames) {
  const usedNames = {};

  const result = fileNames.map((fileName) => {
    let newName = fileName;

    if (usedNames[fileName] === undefined) {
      usedNames[fileName] = 0;
      return newName;
    }
    /* map usedNames */
    newName = `${fileName}(${usedNames[fileName] + 1})`;
    usedNames[newName] = usedNames[fileName];
    usedNames[fileName]++;

    return newName;
  });

  return result;
}

module.exports = renameFiles;
