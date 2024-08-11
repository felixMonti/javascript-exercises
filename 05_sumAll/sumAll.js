const sumAll = function(num1,num2) {
    let result = 0
    if (num1 < num2) {
        for (let i = num1 ; i <= num2; i++) {
            result += i; 
         }
         return result;
    } else{
        for (let i = num2 ; i <= num1; i++) {
            result += i; 
         }
         return result;
    }

    
    }
;

// Do not edit below this line
module.exports = sumAll;
