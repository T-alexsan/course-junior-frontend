const trueQuestion1 = 4;
const trueQuestion2 = 4;
const trueQuestion3 = 1;
const trueQuestion4 = 12;
const trueQuestion5 = 6;
let correctAnswers = 0;
let incorrectAnswers = 0;

const askQuestion1 = prompt('Сколько будет 2 + 2?').trim();
const answerQuestion1 = Number(askQuestion1);
if (answerQuestion1 === trueQuestion1) {
    ++correctAnswers;
    console.log('Вопрос 1 - true');
    alert('Ответ верный');
} else {
    ++incorrectAnswers;
     console.log('Вопрос 1 - false');
    alert('Ответ неверный');
}


const askQuestion2 = prompt('Сколько будет 2 * 2?').trim();
const answerQuestion2 = Number(askQuestion2);
if (answerQuestion2 === trueQuestion2) {
    ++correctAnswers;
    console.log('Вопрос 2 - true');
    alert('Ответ верный');
} else {
    ++incorrectAnswers;
    console.log('Вопрос 2 - false');
    alert('Ответ неверный');
}


const askQuestion3 = prompt('У Пети было 5 яблок. 3 из них он съел, 1 отдал другу. Сколько яблок у Пети осталось?').trim();
const answerQuestion3 = Number(askQuestion3);
if (answerQuestion3 === trueQuestion3) {
    ++correctAnswers;
    console.log('Вопрос 3 - true');
    alert('Ответ верный');
} else {
    ++incorrectAnswers;
    console.log('Вопрос 3 - false');
    alert('Ответ неверный');
}


const askQuestion4 = prompt('У Маши было 10 конфет. 2 она съела, 1 отдала другу. После мама дала Маше еще 5 конфет. Сколько в итоге конфет осталось у Маши?').trim();
const answerQuestion4 = Number(askQuestion4);
if (answerQuestion4 === trueQuestion4) {
    ++correctAnswers;
    console.log('Вопрос 4 - true');
    alert('Ответ верный');
} else {
    ++incorrectAnswers;
    console.log('Вопрос 4 - false');
    alert('Ответ неверный');
}


const askQuestion5 = prompt('Сколько будет 2 + 2 * 2?').trim();
const answerQuestion5 = Number(askQuestion5);
if (answerQuestion5 === trueQuestion5) {
    ++correctAnswers;
    console.log('Вопрос 5 - true');
    alert('Ответ верный. Конец теста!');
} else {
    ++incorrectAnswers;
    console.log('Вопрос 5 - false');
    alert('Ответ неверный. Конец теста!');
}

console.log(`correctAnswers: ${correctAnswers}`);
console.log(`incorrectAnswers: ${incorrectAnswers}`);
alert(`Правильных ответов: ${correctAnswers} \n Неправильных ответов: ${incorrectAnswers}`);