let userText = prompt('Введите текст: ').trim();
console.log(`Введите текст: ${userText}`);

let wordFromText = prompt('Введите слово: ').trim();
console.log(`Введите слово: ${wordFromText}`);

let indexOfWord = userText.indexOf(wordFromText);
console.log(indexOfWord);

let finalResult = userText.slice(0, indexOfWord);
alert(`Результат: ${finalResult}`);

