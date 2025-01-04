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