// 1. Массивы. Добавление, удаление и изменение элементов

// const salariesofDevelopers = [350, 400, 500, 1000, 2000];
// console.log(salariesofDevelopers);
// console.log(salariesofDevelopers.length);

// const namesofDevelopers = ['Dima', 'Aleksandr', 'Maxim'];
// console.log(namesofDevelopers);
// console.log(namesofDevelopers.length);


//Добавление элементов: push (добавить в конец), unshift (добавить в начало)

const salariesofDevelopers = [350, 400, 500, 1000, 2000];

const newDevelopers = 5000;
salariesofDevelopers.push(newDevelopers);
console.log(salariesofDevelopers);

const newDevelopers2 = 200;
salariesofDevelopers.unshift(newDevelopers2);
console.log(salariesofDevelopers);


//Удаление элементов: unshift (удалить первый элемент/вывести), pop (удалить с конца/вывести)

const firstRemovedElemet = salariesofDevelopers.shift();
salariesofDevelopers.shift();
console.log(firstRemovedElemet);
console.log(salariesofDevelopers);


//Изменение элементов массива

salariesofDevelopers[4] = 666;
console.log(salariesofDevelopers);

