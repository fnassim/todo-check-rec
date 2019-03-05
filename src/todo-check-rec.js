const fs = require('fs');
const Path = require('path');

//This function flattens an array that contains multiple dimensions
const flattenDeep = (arr1) => {
    return arr1.reduce((acc, val) => Array.isArray(val) ? acc.concat(flattenDeep(val)) : acc.concat(val), []);
};

//This function returns all the files paths contained within a given path.
const getFilesRec = (path) => {
    if (!fs.lstatSync(path).isDirectory()) return path;
    return flattenDeep(fs.readdirSync(path).map((file) => getFilesRec(Path.join(path, file))));
};

getFilesRec('./');