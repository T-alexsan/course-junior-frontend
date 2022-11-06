/** toUpperCase (сделать символы заглавными), toLowerCase (сделать символы маленькими)*/

const animal = 'Lion';
console.log(animal.toUpperCase()); //Не изменяет значение переменной
console.log(animal.toLowerCase()); //Не изменяет значение переменной

/** Найти индекс символа (порядковый номер) в строчке -indexOf, includes */
const text = 'мой любимый язык программирования JS';
console.log(text.indexOf('JS'));
console.log(text.includes('JS'));

/** Обрезка строки - slice, substring */
//const progLang = 'JavaScript';
//console.log(progLang.slice(3,5)); //в скобках числами через запятую указываем индексы
//console.log(progLang.substring(1, 3));

/** Замена символов в строке - replace, replaceAll*/
const progLang = 'JavaScript';
console.log(progLang.replace('Java', '123')); //заменяет чтото на что то
console.log(progLang.replaceAll('a', 'A')); //заменяет что то на что то везде

/** repeat - потвторить строчку несколько раз */
const helloText = 'Hello';
console.log(helloText.repeat(3)); //repet принимает 1 значение, в нем указывается количество повторений

/** trim очистить пробелы */
const nameofUser = prompt('Введите имя');
console.log(nameofUser.trim());

