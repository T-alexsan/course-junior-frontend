/** 1. console.log */
console.log("console.log", typeof String("comsole.log"), typeof Number("comsole.log'"), Boolean("comsole.log'"));

/** 2. { name: 'Maxim' } */
console.log("", typeof String('Maxim'), typeof Number("Maxim"), Boolean("Maxim"));

/** 3. Symbol('key') */
console.log("Symbol('key')", typeof String('Symbol(\'key\')'), typeof Number("Symbol('key')"), Boolean("Symbol('key')"));

/** 4. Number */
console.log("Number ", typeof String('Number'), typeof Number("Number"), Boolean("Number"));

/** 5. '' */
console.log("''", typeof String('\'\''), typeof Number("''"), Boolean("''"));

/** 6. 0 */
console.log("0", typeof String('0'), typeof Number("0"), Boolean("0"));

/** 7. -10 */
console.log("-10", typeof String('-10'), typeof Number("-10"), Boolean("-10"));

/** 8. '-105' */
console.log("'-105'", typeof String('\'-105\''), typeof Number("'-105'"), Boolean("'-105'"));
