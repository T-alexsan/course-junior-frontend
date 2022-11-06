const myName = 'Alex';
const programmingLanguage = 'JavaScript';
const courseCreatorName = 'Vladilen';
const reasonText = 'Money';
const numberOfMonth = 5;

let myInfoText = `Всем привет! Меня зовут ${myName}. Сейчас я изучаю язык программирования ${programmingLanguage} на курсе по ${programmingLanguage} у ${courseCreatorName}. Я хочу стать веб-разработчиком, потому что ${reasonText}. До этого я изучал(а) ${programmingLanguage} ${numberOfMonth} месяцев(а). Я уверен(а), что пройду данный курс до конца!`;

console.log(myInfoText);

let myInfoTextReplace = myInfoText;
console.log(myInfoTextReplace.replaceAll('JavaScript', 'JAVASCRIPT'));
console.log(myInfoTextReplace.length);
console.log(myInfoTextReplace[0]);
console.log(myInfoTextReplace[254]);