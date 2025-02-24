const removeFromArray = function(arr, ...num) {
    let newArr = [];
    arr.forEach((element) => {
        if (!num.includes(element)) {
            newArr.push(element);
        }
    });
    return newArr;
};

// Do not edit below this line
module.exports = removeFromArray;
