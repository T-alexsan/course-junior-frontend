/**Типы данных*/
/**
 1. Примитивы (простые типы)
 2. Не примитивы (сложные типы) - object
 3. Чтобы определить тип данных, использовать typeof
 */

//Пример работы typeof
console.log(typeof 5);
console.log(typeof "Aleksandr");

//Исключения
console.log(typeof null); //Выведет object
console.log(typeof console.log); //Выведет function

/** string - текстовое значение */
const favoritDrink = "Coffe";
console.log(favoritDrink);

/** number - числовое значение */
const numberofCups = 5;
console.log(numberofCups);

/** boolean - Да/Нет Истина/Ложь */
const isColdDrink = true;
console.log(isColdDrink);

/** null - пусто, значение неизвестно */
const studentFavoritDrink = null;
console.log(studentFavoritDrink);

/** undefined - значение не было присвоено (ничего не получил/не передалось) */
let carOwner;
console.log(carOwner);

/** object - содержит множество значений (контейнер) */
const drink = {
    favoritDrink: "Coffe",
    numberofCups: 5,
    isColdDrink: true,
    //key: value,
};
console.log(drink);

/** symbol - нужен для создания уникальных ключей объекта (object) */
const id = Symbol("id");
console.log(id);

/** bigint - большое число  */
const bigIntNumber = BigInt(10);
// или можно написать const bigIntNumber = 10n;
console.log(bigIntNumber);