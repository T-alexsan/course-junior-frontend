/** string - текстовое значение */
let favoritDrink = "Coffe";
console.log(Number(favoritDrink), Boolean(favoritDrink), String(favoritDrink));

/** number - числовое значение */
let numberofCups = 5;
console.log(Number(numberofCups), Boolean(numberofCups), String(numberofCups));

/** boolean - Да/Нет Истина/Ложь */
let isColdDrink = true;
console.log(Number(isColdDrink), Boolean(isColdDrink), String(isColdDrink));

/** null - пусто, значение неизвестно */
let studentFavoritDrink = null;
console.log(Number(studentFavoritDrink), Boolean(studentFavoritDrink), String(studentFavoritDrink));

/** undefined - значение не было присвоено (ничего не получил/не передалось) */
let carOwner;
console.log(Number(carOwner), Boolean(carOwner), String(carOwner));

/** object - содержит множество значений (контейнер) */
let drink = {
    favoritDrink: "Coffe",
    numberofCups: 5,
    isColdDrink: true,
    //key: value,
};
console.log(Number(drink), Boolean(drink), String(drink)); //Тут не понятно почему так выводит !

/** symbol - нужен для создания уникальных ключей объекта (object) */
let id = Symbol("id");
//console.log(Number(id), Boolean(id), String(id)); выводит ошибку

/** bigint - большое число  */
let bigIntNumber = BigInt(10);
console.log(Number(bigIntNumber), Boolean(bigIntNumber), String(bigIntNumber));
// или можно написать const bigIntNumber = 10n;
console.log(bigIntNumber);