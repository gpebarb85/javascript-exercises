const reverseString = function(str) {
    let stringArrary = Object.values(str);
    let reverseString = '';
    while (stringArrary.length > 0) {
        reverseString += stringArrary.splice(-1);
    };
    return reverseString;
};

// Do not edit below this line
module.exports = reverseString;
