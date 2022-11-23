/**
 && (И)
 || (ИЛИ)
 ! (НЕ)
 */

const userAgent = 16;
if (userAgent > 5 && userAgent <= 18) {
    console.log('Тестовый текст 1');
}

const test1 = 15;
if (test1 > 4 || test1 <= 20) {
    console.log('Тестовый текст 2');
}

const test2 = 15;
if (test2 > 4 && test2 != 20) {
    console.log('Тестовый текст 3');
}