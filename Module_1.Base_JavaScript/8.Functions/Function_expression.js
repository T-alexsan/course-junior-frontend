// Function Expression

// const sum = function (a, b) {
//     console.log(a + b);
// }
// sum(5, 10);

//Стрелочная функция arrow Function Expression

// const name = () => {

// }

// const sum = (a, b) => {
//     return a + b;
// };
// // const result = sum(10, 12);
// // console.log(result);
// console.log(sum(2,2));

function multiply (a, b, callback) {
    const result = a * b;
    callback(result);
}
multiply(5, 2, (multiplyResult) => {
    console.log(multiplyResult);
});