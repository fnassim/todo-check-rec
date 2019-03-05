const todoCheckRec = require('../todo-check-rec');
const assert = require('assert');

const testFlattenDeep = () => {
    const arr1 = [1, 2, 3, [4, 5, [6]], 7];
    const arr2 = [1, 2, 3, 4, 5, 6, 7];

    try {
        assert.deepEqual(todoCheckRec.flattenDeep(arr1), arr2);
        console.log('testFlattenDeep: Passed.');
    } catch (error) {
        console.error('testFlattenDeep: Failed. ');
    }
};

const testFlattenDeepFail = () => {
    const arr1 = [1, 2, 3, [4, 5, [6]], 7];
    const arr2 = [1, 2, 3, 4];

    try {
        assert.notEqual(todoCheckRec.flattenDeep(arr1), arr2);
        console.log('testFlattenDeepFail: Passed.');
    } catch (error) {
        console.error('testFlattenDeepFail: Failed. ');
    }
};

const testGetFilesRec = () => {
    const testPathOutput = 'src/test/mock/test';

    try {
        assert.equal(todoCheckRec.getFilesRec('./src/test/mock'), testPathOutput);
        console.log('testGetFilesRec: Passed.');
    } catch (error) {
        console.error('testGetFilesRec: Failed. ');
    }
};

const testGetFilesRecFail = () => {
    const testPathOutput = [''];

    try {
        assert.notEqual(todoCheckRec.getFilesRec('./src/test'), testPathOutput);
        console.log('testGetFilesRecFail: Passed.');
    } catch (error) {
        console.error('testGetFilesRecFail: Failed. ');
    }
};

testFlattenDeepFail();
testFlattenDeep();
testGetFilesRec();
testGetFilesRecFail();