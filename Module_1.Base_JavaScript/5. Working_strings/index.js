
/** Варианты вывода строк */
const name1 = 'Maksim';
const name2 = 'Dmitry';
const name3 = `Alex`;

console.log(name1, name2, name3);

/** Конкатенация */
const name = 'Maksim';
const profession = 'JS - разработчик';

//const allInfo = name + ' ' + profession;
//const allInfo = `${name} ${profession}`; // лучше использовать эту конструкцию
let allInfo = name + ' ';
allInfo += profession;
console.log(allInfo);

/** lenght - длинна строки */
const progLanguage = 'JavaScript';
console.log(progLanguage.length);

console.log(progLanguage[0]); // вывести символ по индексу (какой он по счету)
