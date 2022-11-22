const salariesofDevelopers = [200, 350, 400, 500, 1000, 2000, 5000];

//map (применить какое то действие к каждому элементу массива)

const updateSalary = salariesofDevelopers.map((salary, index, array) => {
  return salary * 2;
});
console.log(updateSalary);

//filter 

const filterSalary = salariesofDevelopers.filter((salary, index, array) => {
    return salary > 600;
  });
  console.log(filterSalary);

  //find - ищет элемент по условию

  const findSalary = salariesofDevelopers.filter((salary, index, array) => {
    return salary === 500;
  });
  console.log(findSalary);

  //findIndex

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