// for (let i = 0; i < 3; i += 1) {
//     let newStudent = prompt("Введите имя нового студента!");
//     if (newStudent) {
//         newStudent = newStudent.trim();
//         alert(`Добро пожаловать, ${newStudent}!`);
//     }
// }

//while
// let newStudent = 0;
// while (newStudent < 3) {
//     let nameStudent = prompt("Введите имя нового студента!").trim();
//     alert(`Добро пожаловать, ${nameStudent}!`);
//     newStudent++;
// }


//do while
let newStudent = 0;
do {
    let nameStudent = prompt("Введите имя нового студента!").trim();
    alert(`Добро пожаловать, ${nameStudent}!`);
    newStudent++;
} while (newStudent < 3);