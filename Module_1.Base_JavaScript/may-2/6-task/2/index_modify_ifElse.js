let correctAnswers = 0;
let incorrectAnswers = 0;

const askQuestion1 = +prompt('Сколько будет 2 + 2?').trim();
askQuestion1 === 4 ? correctAnswers++ : incorrectAnswers++;

const askQuestion2 = +prompt('Сколько будет 2 * 2?').trim();
askQuestion2 === 4 ? correctAnswers++ : incorrectAnswers++;

const askQuestion3 = +prompt('У Пети было 5 яблок. 3 из них он съел, 1 отдал другу. Сколько яблок у Пети осталось?').trim();
askQuestion3 === 1 ? correctAnswers++ : incorrectAnswers++;

const askQuestion4 = +prompt('У Маши было 10 конфет. 2 она съела, 1 отдала другу. После мама дала Маше еще 5 конфет. Сколько в итоге конфет осталось у Маши?').trim();
askQuestion4 === 12 ? correctAnswers++ : incorrectAnswers++;

const askQuestion5 = +prompt('Сколько будет 2 + 2 * 2?').trim();
askQuestion5 === 6 ? correctAnswers++ : incorrectAnswers++;

console.log(`correctAnswers: ${correctAnswers}`);
console.log(`incorrectAnswers: ${incorrectAnswers}`);
alert(`Правильных ответов: ${correctAnswers} \n Неправильных ответов: ${incorrectAnswers}`);