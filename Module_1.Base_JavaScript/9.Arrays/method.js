// splice - удалить и заменить элемент, перезаписывает массив

const cars = ['BMW', 'Mersedes', 'Lada'];

//cars.splice(0, 1); //удалить элементы с 0 по 1 (т.е первый элемент в массиве)
const removeElements = cars.splice(0, 1, 'Audi'); //Удалить и заменить элемент
console.log(removeElements); //можно посмотреть удаленные элементы, если сделать переменную
console.log(cars);

//slice - обрезает массив, не перезаписывает, а создает новый массив

const agesofDevelopers = [15, 20, 25, 30, 35];
//console.log(agesofDevelopers.slice(0, 2));

const slicesAgesofDevelopers = agesofDevelopers.slice(0, 2);
console.log(slicesAgesofDevelopers);


//indexOf

const favoriteFood = ['Pizza', 'Burger', 'Spagetti'];
