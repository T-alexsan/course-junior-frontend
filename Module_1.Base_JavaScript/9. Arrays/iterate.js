//Перебор массива

const developersName = ['Irina', 'Maksim', 'Alex', 'Dima', 'Misha'];

//for

// for (начальное значение; условие; шаг) {
    
// }

//Вывести значение массива по индексу
console.log(developersName[2]);

//Узнать длинну массива + вывести index и его значение
for (let i = 0; i < developersName.length; i += 1) {
    console.log(i);
    console.log(developersName[i]);
}   

// for of

// for (const name of developersName) {
//     console.log(name);
// }

//forEach

developersName.forEach((name, index, array) => {
    console.log(name);
    console.log(index);
    console.log(array);
})