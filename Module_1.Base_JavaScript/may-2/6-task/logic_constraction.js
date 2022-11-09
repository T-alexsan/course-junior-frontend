/**
 if
 if else
 switch case
 ?:
 */

//пример работы if
const frontDeveloper = false;
if (frontDeveloper) {
    console.log('Этот текст выведется если значение равно =  true');
} else {
    console.log('Этот текст выведется если значение равно =  false');
};

//пример работы if else
const developerJobType = 'Python';
if (developerJobType === 'JavaScript') {
    console.log('1000$');
}else if (developerJobType === 'Python') {
    console.log('2000$');
}else {
    console.log('Переменная пуста');
};

//switch case
switch(developerJobType) {
    case 'JavaScript':
        console.log('1000$');
        break;
    case 'Python':
        console.log('2000$');
        break;
    default:
        console.log('Переменная пуста');
}

//?: замена if else
const favoritDrink = 'Tea';
let message = '';
if (favoritDrink === 'Coffe') {
    message = 'You like Cofffe';
} else {
    message = 'You like Tea';
}
console.log(message);


const messageNew = favoritDrink === 'Coffe'
? 'You like Coffe'
    : 'You like Tea';
console.log(messageNew);