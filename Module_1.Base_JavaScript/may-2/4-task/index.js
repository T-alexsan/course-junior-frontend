/**
 JS имеет динамическую типизацию
 */

/** 1. К строке */
const age = 20;
console.log("number age", typeof age);
console.log("string age", typeof String(age)); //Явное преобразование (В данном примере преобразуем строку к строке)

const updatedAge = "1" + 20; // Неявное преобразование
console.log("updatedAge", typeof updatedAge);

/** 2. К числу */
const experienceInJs = "5"; //Явное преобразование
console.log("string experienceInJs", typeof experienceInJs);
console.log("number experienceInJs", typeof Number(experienceInJs));// Явное преобразование (В данном примере преобразуем строку к числу)

console.log("experienceInJs", typeof +experienceInJs); // Неявное преобразование (дописав символ + к переменной, преобразуется в тип Число)
console.log("Hello World", Number("Hello World")); // Нельзя преобразовать строку к числу?

/** 3. Boolean */
console.log("Hello", Boolean('Hello'));
console.log(5, Boolean('Hello'));
//почти все значения при приведению к Boolean будут отдавать true, но есть исключения:
//Исключения null, undefined, NaN, 0, ''