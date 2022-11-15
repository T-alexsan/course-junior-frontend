/** Функция это кусок кода, который можно вызывать в разных местах, вставляя название функции */

// //sayHello(); функцию можно вызывать до объявления
//
// function sayHello() {
//     console.log('Hello');
// }
// sayHello(); // так же и после объявления

function sum1(a, b) { //можно не обявлять значения параметров сразу
   console.log(a + b);
}
sum1(5, 3); // а объявить их при вызове

function sum2(a = 5, b = 3) { //а можно сразу объявить значения
    console.log(a + b);
}
sum2(); //и просто вызвать фунцкию

/** callback */
// function sum3(a, b, callback) {
//     const result = a + b;
//     callback(result);
// }
//
// function displayer(res) {
//     console.log(res);
// }
// sum3(3, 10, displayer);

/** return */

function sum4(a, b) {
 return a + b;
}
const result = sum4(10, 5);
console.log(result);