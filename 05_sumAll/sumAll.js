const sumAll = function(integer1, integer2) {
    if (typeof integer1 !== 'number' || typeof integer2 !== 'number' || integer1 < 0 || integer2 < 0 || !Number.isInteger(integer1) || !Number.isInteger(integer2)) {
        return 'ERROR';
    }
    
    let sum = 0;
    let start = integer1 < integer2 ? integer1 : integer2;
    let end = integer1 > integer2 ? integer1 : integer2;
    
    for (let i = start; i <= end; i++) {
        sum += i;
    }
    
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
