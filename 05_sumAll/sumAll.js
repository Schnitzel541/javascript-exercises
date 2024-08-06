const sumAll = function(firstNum, lastNum) {
    let sum = "";

    if (firstNum < 0 && lastNum < 0) {
        return "ERROR";
    }
    for (let i = firstNum; i <= lastNum; i++) {
       
       if (i < lastNum) {
        sum += `${i} + `; 
       }
       else if (i === lastNum) {
        sum += `${i}`;
       }
       else {
        break;
       }
    }
    const result = eval(sum);
    return result;
}
    


// Do not edit below this line
module.exports = sumAll;
