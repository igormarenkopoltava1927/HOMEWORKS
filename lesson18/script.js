'use strict'

//1
let a = '1';

if (a === '1') {
    console.log('Верно');    
} else{
    console.log('Неверно');
}

//2.1
let item = true;


if (item != true){
    console.log('Верно');
}else{
    console.log('Неверно');
}

//2.2
item != true ? console.log('Верно') : console.log('Неверно');

//3
let a3 = 0;

if (a3 > 0 && a3 < 4) {
    console.log('Верно');
}else {
    console.log('Неверно');
}

//4
let a4 = 1;
let b4 = 6;

if ((a4 > 3 ) && (a4 < 12) || (b4 >= 7) && (b4 < 15)) {
    console.log ('Верно')
} else {
    console.log('Неверно');
}

//5
let month = 17;

if ((month == 12) || (month == 1) || (month == 2)) {
    console.log( 'Winter');
}

else if (month >=3 && month <= 5) {
    console.log('Srping');
}
else if (month >=6 && month <= 8) {
    console.log('Summer');
}
else if (month >=9 && month <= 11) {
    console.log('Autumn');
} else {
    console.log('Its not a month of the year');
}
 
//6
for ( let number = 0; number <= 100; number ++) {
    if (number % 2 === 0) {
        console.log(number);
    }
}



