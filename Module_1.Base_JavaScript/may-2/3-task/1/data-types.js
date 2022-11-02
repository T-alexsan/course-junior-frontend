/** string - текстовое значение */
const bestAuto = "BMW";
console.log("bestAuto", bestAuto, typeof bestAuto);

/** number - числовое значение */
const modelCar = 5;
console.log("modelCar", modelCar, typeof modelCar);

/** boolean - Да/Нет Истина/Ложь */
const carRepair = false;
console.log("carRepair", carRepair, typeof carRepair);

/** null - пусто, значение неизвестно */
const priceAuto = null;
console.log("priceAuto", priceAuto, typeof priceAuto);

/** undefined - значение не было присвоено (ничего не получил/не передалось) */
const carOwner = undefined;
console.log("carOwner", carOwner, typeof carOwner);

/** object - содержит множество значений (контейнер) */
const auto = {
    bestAuto: "BMW",
    modelCar: 5,
    carRepair: false,
    //key: value,
};
console.log("auto", auto, typeof auto);

/** symbol - нужен для создания уникальных ключей объекта (object) */
const id = Symbol("id");
console.log("id", id, typeof id);

/** bigint - большое число  */
// const bigIntNumber = BigInt(10);
const bigIntNumber = 10n;
console.log("bigIntNumber", bigIntNumber, typeof bigIntNumber);