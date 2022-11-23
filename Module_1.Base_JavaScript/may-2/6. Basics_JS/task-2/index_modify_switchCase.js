let correctAnswers = 0;
let incorrectAnswers = 0;

const askQuestion1 = prompt("Сколько будет 2 + 2?").trim();
const answerQuestion1 = Number(askQuestion1);
switch (answerQuestion1) {
    case 4:
        console.log('Вопрос 1 - true');
        alert('Ответ верный');
        correctAnswers++;
        break;
    default:
        console.log('Вопрос 1 - false');
        alert('Ответ неверный');
        incorrectAnswers++;
}

const askQuestion2 = prompt("Сколько будет 2 * 2?").trim();
const answerQuestion2 = Number(askQuestion2);
switch (answerQuestion2) {
    case 4:
        console.log('Вопрос 2 - true');
        alert('Ответ верный');
        correctAnswers++;
        break;
    default:
        console.log('Вопрос 2 - false');
        alert('Ответ неверный');
        incorrectAnswers++;
}

const askQuestion3 = prompt("У Пети было 5 яблок. 3 из них он съел, 1 отдал другу. Сколько яблок у Пети осталось?").trim();
const answerQuestion3 = Number(askQuestion3);
switch (answerQuestion3) {
    case 1:
        console.log('Вопрос 3 - true');
        alert('Ответ верный');
        correctAnswers++;
        break;
    default:
        console.log('Вопрос 3 - false');
        alert('Ответ неверный');
        incorrectAnswers++;
}

const askQuestion4 = prompt("У Маши было 10 конфет. 2 она съела, 1 отдала другу. После мама дала Маше еще 5 конфет. Сколько в итоге конфет осталось у Маши?").trim();
const answerQuestion4 = Number(askQuestion4);
switch (answerQuestion4) {
    case 12:
        console.log('Вопрос 4 - true');
        alert('Ответ верный');
        correctAnswers++;
        break;
    default:
        console.log('Вопрос 4 - false');
        alert('Ответ неверный');
        incorrectAnswers++;
}

const askQuestion5 = prompt("Сколько будет 2 + 2 * 2?").trim();
const answerQuestion5 = Number(askQuestion5);
switch (answerQuestion5) {
    case 6:
        console.log('Вопрос 5 - true');
        alert('Ответ верный');
        correctAnswers++;
        break;
    default:
        console.log('Вопрос 5 - false');
        alert('Ответ неверный');
        incorrectAnswers++;
}

console.log(`correctAnswers: ${correctAnswers}`);
console.log(`incorrectAnswers: ${incorrectAnswers}`);
alert(`Правильных ответов: ${correctAnswers} \n Неправильных ответов: ${incorrectAnswers}`);