////---- ОБЛАСТІ ВИДИМОСТІ ----////

/* const a = 5;

if (true) {
    const b = 10;
    console.log("Block", b);
}

console.log("Global", a); */


////---- ЦИКЛИ ----////

//--WHILE--//

/* let a = 0;

while (a < 5) {
    a++;   
    console.log("a", a);
}

// a++ те саме, що a+1;   a-- те саме, що а-1 */

//let a = 0;

/* while (a) {
    console.log("a", a);
    a--;
} */

// АБО //

//while(a) console.log(a--);



//--DO WHILE--//

/*do {
    console.log(a++);
} while (a<5);*/



//--FOR--//

/*for (let a = 0; a < 3; a++) {
    console.log(a);
}*/

// АБО //

/*let a = 0
for (; a < 5; a++) {
    console.log(a);
}*/



//--BREAK & CONTINUE--//

/*let sum = 0;

while (true) {
    let value = +prompt("Введіть число")
    if (!value) break
    sum += value
}

console.log("Сума", sum);*/


/*for (let i = 0; i < 10; i++) {
    if (i % 2 === 0) continue;
    console.log(i);
}*/






////////-------- МАСИВИ --------////////

/* let arr = ["Apple", "Orange", "Plum"];

arr[2] = "Lemon";

arr[3] = "Cherry";

//console.log(arr.length);

arr.push("Tomato");

arr.pop();

arr.shift();

arr.unshift("Tomato");

//for (let i = 0; i < arr.length; i++) {          ////СТАРИЙ МЕТОД ПЕРЕБОРУ////
//    console.log(arr[i]);
//}

arr.shift();

for (let item of arr) {
    console.log(item);
}

for (let key in arr) {
    console.log(key);
} */



/* let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
];
console.log(matrix[1][1]); */


/// МАСИВИ НЕ МОЖНА ПОРІВНЮВАТИ, ТІЛЬКИ ЧЕРЕЗ ПЕРЕБОРИ КОЖНОГО ЕЛЕМЕНТУ ///




////////-------- МЕТОДИ ПРИСВОЄННЯ --------////////

/* let a = 5;
let b = a;

a = 10;

console.log(a,b); */


/* let arr = [1, 2, 3];
let arr2 = arr;

arr.push(4);

console.log(arr, arr2); */



////////-------- МЕТОДИ МАСИВУ --------////////

//let arr = ["a", "b", "c", "d", "f"];

//delete arr[2];         //ТАК ВИДАЛЯТИ НЕ МОЖНА, БО ВИДАЛЯЄТЬСЯ ЛИШЕ ЗНАЧЕННЯ//
//console.log(arr);

//arr.splice(2, 1)       //Перший аргумент - з якого індексу, другий аргумент - скільки елементів//
//console.log(arr);

//Метод slice копіює і повертає вибрані елементи масиву//

//console.log(arr.slice(1,3));

//let a = [1, 2, 3];
//console.log(arr.concat(a, "test"));

//console.log(arr.indexOf("c", 1));

//console.log(arr.lastIndexOf("c", 4));

//console.log(arr.includes("c"));    ///ПОВЕРТАЄ TRUE АБО FALSE



/* const fruits = [
    {id:0, name:'Apple'},
    {id:1, name:'Tomato'},
    {id:2, name:'Cherry'},
    {id:3, name:'Orange'},
]; */

//console.log(fruits.find((item) => item.id === 2));   //.FIND ПІДХОДИТЬ ДЛЯ ПОШУКУ ЧОГОСЬ ОДНОГО

//console.log(fruits.filter((item) => item.id < 2));   //.FILTER ПІДХОДИТЬ ДЛЯ ПОШУКУ БАГАТЬОХ ЕЛЕМЕНТІВ


//let result = fruits.map((item) => item.name.length);
//console.log(result);

/* let names = "Оля, Юля, Аня, Петя";

let arr = names.split(", ");
console.log(arr);

let newString = arr.join(", ")
console.log(newString); */


//let value = arr.reduce(
//  function (accumulator, item, index, array) {
//     // ... 
//  },
//  [initial]
// );


/* let arr = [1, 2, 3, 4, 5];

let red = arr.reduce((summ, item) => summ+item);

console.log(red); */


/* let arr = [23, 45, 30,];

let summ = arr.reduce((summ, item) => summ + item) / arr.length;

console.log(summ);

let roundedSumm = Math.round(summ);
console.log(roundedSumm); */









////////-------- ДОМАШНЄ ЗАВДАННЯ --------////////

//  -- 1 --
// У вас є масив об’єктів fruts, і в кожному з них є name
// Напишіть код, який перетворює їх в масив імен.

// const fruts = [
//   { id: 0, name: "Apple" },
//   { id: 1, name: "Tomat" },
//   { id: 2, name: "Cherry" },
//   { id: 3, name: "Orange" },
// ];

//  -- 2 --
//Виведіть парні числа від 2 до 10, використовуючи цикл for.

//  -- 3 --
//Замініть цикл "for" на "while"
// for (let i = 0; i < 5; i++) {
//     console.lpg( `цифра ${i}!` );
//   }

//  -- 4 --
//Напишіть цикл, який пропонує prompt ввести число більше за 100.
//Якщо відвідувач введе менше число – попросити ввести ще раз, і так далі.
//Цикл повинен запитувати число доти, доки відвідувач не введе число,
// більше за 100, або не скасує ввід/введе порожній рядок.

//  -- 5 --
// Вирахуйте середній вік

// const girls = [
//   { age: 23, name: "Оля" },
//   { age: 29, name: "Аня" },
//   { age: 10, name: "Юля" },
//   { age: 20, name: "Катя" },
// ];

