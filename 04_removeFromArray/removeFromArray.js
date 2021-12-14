const removeFromArray = function(arr, ...value) {
    arr = arr.filter(item => !value.includes(item));
    return arr;
}

// Do not edit below this line
module.exports = removeFromArray;
