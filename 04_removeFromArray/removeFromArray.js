const { idText } = require("typescript");

const removeFromArray = function(array, ...popIndex) {

    const newArray = [];

    array.forEach((item) => {
        if (!popIndex.includes(item)) {
            newArray.push(item);
        }
    })

    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
