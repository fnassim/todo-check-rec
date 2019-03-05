const fs = require('fs');
const Path = require('path');

const DEFAULT_PATH = './';
const STRING_TO_MATCH = 'TODO';
const DEFAULT_ENCODING = 'utf8';

//This function flattens an array that contains multiple dimensions
const flattenDeep = (arr1) => {
    return arr1.reduce((acc, val) => Array.isArray(val) ? acc.concat(flattenDeep(val)) : acc.concat(val), []);
};

//This function returns all the files paths contained within a given path.
const getFilesRec = (path) => {
    if (!fs.lstatSync(path).isDirectory()) return path;
    return flattenDeep(fs.readdirSync(path).map((file) => getFilesRec(Path.join(path, file))));
};

//This function outputs the paths of every files containing the word "TODO" in their content.
const outputFilesContainingTodo = (path) => {
    const files = getFilesRec(path);
    const resultArray = [];

    files.map((filePath) => {
        const fileContent = fs.readFileSync(filePath, DEFAULT_ENCODING);
        const fileAbsolutePath = Path.normalize(`${__dirname}/${filePath}`);

        fileContent.match(STRING_TO_MATCH) ? resultArray.push(fileAbsolutePath) : null;
    });
    return resultArray;
};

outputFilesContainingTodo(DEFAULT_PATH).map((item) => {console.log(item)});

module.exports = {
    outputFilesContainingTodo: outputFilesContainingTodo,
    getFilesRec : getFilesRec,
    flattenDeep : flattenDeep
};
