"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.moveZerosToEnd = void 0;
const moveZerosToEnd = (data) => {
    let counter = 0;
    let filteredData = data.filter((data) => {
        if (data !== 0) {
            counter++;
            return data;
        }
    });
    const numberOfZeros = data.length - counter;
    for (let i = 0; i < numberOfZeros; i++) {
        filteredData.push(0);
    }
    console.log("Input data: " + data);
    console.log("Output Data:" + filteredData);
};
exports.moveZerosToEnd = moveZerosToEnd;
(0, exports.moveZerosToEnd)([1, 2, 4, 0, 0, 0, "abc", true]);
