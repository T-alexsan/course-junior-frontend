//Перебор массива

const developersName = ['Irina', 'Maksim', 'Alex', 'Dima', 'Misha'];
const salariesofDevelopers = [200, 350, 400, 500, 1000, 2000, 5000];

//for

// for (начальное значение; условие; шаг) {
    
// }

//Вывести значение массива по индексу
console.log(developersName[2]);

//Узнать длинну массива + вывести index и его значение
for (let i = 0; i < developersName.length; i += 1) {
    console.log(i);
    console.log(developersName[i]);
}   

// for of

// for (const name of developersName) {
//     console.log(name);
// }

//forEach

developersName.forEach((name, index, array) => {
    console.log(name);
    console.log(index);
    console.log(array);
})


//map (применить какое то действие (изменяет) к каждому элементу массива)

const updateSalary = salariesofDevelopers.map((salary, index, array) => {
  return salary * 2;
});
console.log(updateSalary);

//filter - фильтрует массив по условию

const filterSalary = salariesofDevelopers.filter((salary, index, array) => {
    return salary > 600;
  });
  console.log(filterSalary);

  //find - ищет элемент по условию

  const findSalary = salariesofDevelopers.filter((salary, index, array) => {
    return salary === 500;
  });
  console.log(findSalary);

  //findIndex - возвращает индекс по условию

  const findIndexSalary = salariesofDevelopers.findIndex((salary, index, array) => {
    return salary === 500;
  });
  console.log(findIndexSalary);

  //some (возвращает true/false если хотя бы 1 элемент true), every (возвращает true когда все элементы true)

  const someSalary = salariesofDevelopers.some((salary, index, array) => {
    //return salary === 500;
    return salary > 500;

  });
  console.log(someSalary);


//reduce - считает сумму массива

const sum = salariesofDevelopers.reduce((acc, salary, index, array) => {
    console.log(acc + salary);
    return acc + salary;
}, 0);
console.log(sum);

//sort 

salariesofDevelopers.sort((a, b) => {
    //return a - b; // сортировка по возрастанию
    return b - a; // сортировка по убыванию
});
console.log(salariesofDevelopers);