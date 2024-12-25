////---- ВИВЕДЕННЯ ----////

//const message = "JavaScript is awesome";
//alert(message);


////---- ОТРИМАННЯ ----////

//const isConfirm = confirm("Please confirm reservation");
//console.log(isConfirm);

//const test = confirm("Yes or no?");
//console.log(test);

//const userName = prompt("Please enter your name");
//console.log(userName);

//const userNumber = prompt("Please enter your phone number");
//console.log(userNumber);


////---- ПЕРЕТВОРЕННЯ ТИПУ ----////

//const value = prompt("Please enter number");
//console.log(value);
//console.log(typeof value);

//--String--//

/*value = false;
console.log(typeof value);

const newValue = String(value);
console.log(typeof newValue);*/

//--Number--//

/*const value = "123";
console.log(typeof value);

const newValue = Number(value);
console.log(typeof newValue);*/

//const test = Number("qwerty");
//console.log(test);

//--Boolean--//

////---- ПРАВИЛА ПЕРЕТВОРЕННЯ: ----////

//ЗНАЧЕННЯ, ЯКІ ІНТУІТИВНО "ПОРОЖНІ", ТАКІ ЯК 0, ПОРОЖНІЙ РЯДОК, NAN, NULL, UNDEFINED СТАЮТЬ FALSE;
//ІНШІ ЗНАЧЕННЯ СТАЮТЬ TRUE

/*console.log(Boolean(1));              //true
console.log(Boolean(0));              //false
console.log(Boolean(1383847465664));  //true
console.log(Boolean());               //false

console.log(Boolean("Hello world"));  //true
console.log(Boolean(""));             //false*/



////---- ОПЕРАТОРИ ----////

//ОСТАЧА ВІД ДІЛЕННЯ %

//console.log(8 % 3);
//console.log(9 % 3);
//console.log(10 % 3);

//ПІДНЕСЕННЯ ДО СТЕПЕНЯ **

/*console.log(5 ** 1);
console.log(5 ** 2);
console.log(5 ** 3);
console.log(5 ** 4);
console.log(5 ** 5);*/


////---- ОПЕРАТОРИ ПОРІВНЯННЯ ----////

/*console.log(5 > 3);
console.log(5 < 3);
console.log(5 >= 5);
console.log(7 <= 3);*/

// = оператор присвоєння 

//let a = 5;
//console.log(a);

// == оператор дорівнення; приведення до типу

/*let a = 5;
console.log(a == 5);    //true

let b = "7";
console.log(b == 7);    //true

// === оператор строгого дорівнення 

let c = 3;
console.log(c === 3);   //true

let d = "4";
console.log(d === 4);   //false

//-- ! not --//

// != не дорівняє 

let e = 8;
console.log(e != 8);   //false
console.log(!true);    //false

// !== строго не дорівняє

let f = "9";
console.log (e !== 9);  //true */

//-- && and --//

/*console.log(5 === 5 && 5 > 3);            //true
console.log(6 + 3 >= 9 && 8 + 1 ===9);    //true

//-- || or --//

console.log(5 === 5 || 6 === 7);          //true
console.log(5 + 5 === 25 || 2 * 2 === 6); //false
console.log(5 * 5 === 26 || 40 / 10 ===4);//true */



////---- УМОВИ IF ELSE ----////

//Одинарні (або можна використати тернарний оператор)

/* if (5 + 5 === 10) {
    console.log("Hello");
}

if (5 + 5 === 25) {
    console.log("Hello");
}   else {
    console.log("Bye");
} */

//Якщо умов багато

/* if (5 + 5 === 12) {
    console.log("almost");
} else if (10 + 10 === 12) {
    console.log("no");
} else {
    console.log("yes");
}  */

/*let name = "Nikita"

if (name === "Kate") {
    console.log("Hi");
} else if (name === "Nikita") {
    console.log("Hello");
} else {
    console.log("Bye");
}*/

/*let country = "ababab";

if (country === "Ukraine") {
    console.log("Ukraine");
}  else if (country === "UK") {
    console.log("UK");
}  else {
    console.log("nothing");
}*/

////---- ТЕРНАРНИЙ ОПЕРАТОР ----////

//2 + 2 === 4 ? console.log("1") : console.log("2");

//4 + 5 === 8 ? console.log("1") : console.log("2");



////---- АНАЛОГ SWITCH/CASE ----////

/*let num = 5
switch (num) {
    case 0:
    console.log(0);
    break;

    case 10:
    console.log(10);
    break;

    case 5:
    console.log("success");
    break;
}*/

/* let cost = null;
const sub = "premium"

switch (sub) {
    case "free":
    cost = 0
    break;

    case "pro":
    cost = 100
    break;

    case "premium":
    cost = 500;

    default: console.log("Invalid sub");
}

console.log(cost); */



////---- ВИРІШЕННЯ ЛОГІЧНИХ ЗАДАЧ ТА ПОБУДОВА АЛГОРИТМІВ ----////

/*const min = prompt("Введіть хвилину")

if (min >= 0 && min <= 14) {
    console.log("Перша чверть");
} else if (min >= 15 && min <= 29) {
    console.log("Друга чверть");
} else if (min >= 30 && min <= 44) {
    console.log("Третя чверть");
} else if (min >= 45 && min <= 59) {
    console.log("Четверта чверть");
}*/

/* const value = prompt("Введіть назву товару").toLowerCase();
let cost;

switch (value) {
    case "яблуко":
    cost = 10;
    alert(`${value} коштує ${cost} гривень`);
    break;

    case "вишня":
    cost = 50;
    alert(`${value} коштує ${cost} гривень`);
    break;

    case "грушка":
    cost = 45;
    alert(`${value} коштує ${cost} гривень`);
    break;

    case "кавун":
    cost = 70;
    alert(`${value} коштує ${cost} гривень`);
    break;

    case "чорниця":
    cost = 100;
    alert(`${value} коштує ${cost} гривень`);
    break;

    case "диня":
    cost = 150;
    alert(`${value} коштує ${cost} гривень`);
    break;

    default: alert(`Товару ${value} немає в наявності`);
} */