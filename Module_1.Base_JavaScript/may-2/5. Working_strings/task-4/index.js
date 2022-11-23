let enterName = prompt('Введите ваше имя');
const userName = enterName.trim().toLowerCase();
console.log(`Отредактированное имя пользователя ${userName}`);

let enterOld = prompt('Введите ваш возраст');
const userOld = Number(enterOld);
console.log(`Возраст пользователя приведенное к типу number ${userOld}`);

alert(`Вас зовут ${userName}, вам ${userOld} лет`);