const existingUserLogin = 'user';
const existingUserPassword = '123';

const userLogin = prompt('Введите логин').trim();
// if (userLogin === existingUserLogin){
//     console.log('Пользователь найден')
//         //alert('Пользователь найден, введите пароль!')
// } else {
//     console.log('Пользователь не найден')
//     //alert('Пользователь не найден!')
// }

const userPassword = prompt('Введите пароль').trim();
// if (Number(userPassword) === existingUserPassword){
//     console.log('Пароль верный')
//     //alert('Пароль верный')
// } else {
//     console.log('Пароль не верный!')
//     //alert('Пароль не верный!')
// }


if (userLogin === existingUserLogin && userPassword === existingUserPassword) {
    console.log('Авторизация успешная');
    alert('Авторизация успешная');
} else {
    console.log('Введенный логин или пароль, неверный');
    alert('Введенный логин или пароль, неверный');
}




