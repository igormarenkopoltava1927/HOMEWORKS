'use strict'
//1
let number = 7;
function isNumberInRange(number) {
    if (number > 0 && number < 10) {
        return true;
    } else {
        return false;
    }
}

console.log(isNumberInRange(number)); 

//2
let n = 5;
function isEven (n) {
    if(n%2 == 0) {
        return true;
    } else {
        return false
    }
}
console.log(isEven(n));
//3
let value = +prompt('value?','');

switch (value) {
    case 0:
        alert (0);
        break;

    case 1:
        alert (1);
        break;

    case 2:
    case 3:    
        alert ('2,3');
        break;
    }    
    
//4
let a = 5, b = 5;
function min (a,b) {
    if(a < b) {
      return a;
    } else if(a > b) {
        return b;
    } else {
        return 'Равные аргументы';
    }
    /*return a < b ? a : b;*/
}
console.log(min(a,b));
 
