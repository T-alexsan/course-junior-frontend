let userString = prompt('Введите текст для обрезки').trim();
console.log(userString, typeof (userString));

let sliceIn = prompt('Введите индекс, с которого нужно начать обрезку строки').trim();
let startSliceIndex = Number(sliceIn);
console.log(startSliceIndex, typeof (startSliceIndex));

let sliceOut = prompt('Введите индекс, которым нужно закончить обрезку строки').trim();
let endSliceIndex = Number(sliceOut);
console.log(endSliceIndex, typeof (endSliceIndex));

let finalIndex = userString.slice(sliceIn, sliceOut);
console.log(`Результат: ${finalIndex}`);
alert(`Результат: ${finalIndex}`);
