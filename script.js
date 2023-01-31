/* //!Задание 1. 
с циклом for:
for (let i = 1; i <= 2; i++) {
  console.log("Hello");
};

с циклом while:
let i = 1;
while (i <= 2) {
  console.log("Hello");
  i++;
};

с циклом do while:
let i = 1;
do {
  console.log("Hello World");
  i++;
} while (i <= 2);
{
};
*/

/* //!Задание 2.
С циклом while:
let i = 1; 
while (i <= 15) {
  console.log(i);
  i++;
};

С циклом for:
for (let i = 0; i <= 15; i++) {
  if (i === 0) {
    continue;
  }
  console.log(i);
};

С циклом do while:
let i = 0;
do {
  i++;
  console.log(i);
} while (i < 15);
{
}
*/

/* //!Задание 3.
с цилом for:
for (let i = 0; i <= 22; i++) {
    if (i <= 6) {
        continue;
    }
    console.log(i);
}

с циклом while:
let a = 0;

while (a < 22) {
    if (a < 6) {
        a++;
        continue;
    }
    a++;
    console.log(a);
}
с циклом do while: 
 let k = 0;

do {
    if (k < 6) {
        k++;
        continue;
    }
    k++;
    console.log(k);
} while (k <= 22); {}
}
*/

/* //!Задание 4

let obj = {
    Коля: 200,
    Вася: 300,
    Петя: 400,
};
for (let key in obj) {
    console.log(`${key} - зарплата ${obj[key]} долларов`);
}
 */

/* //!Задание 5
с циклом while: 

let n = 1000;
while (true) {
    if (n >= 50) {
        n = n / 2;
        console.log(n);
        continue;
    }
    let num;
    num = n;
    break;
}

с циклом for: 
for (let i = 1000;;) {
    if (i >= 50) {
        i = i / 2;
        continue;
    }
    let num;
    num = i;
    console.log(num);
    break;
}

с циклом do while: 

let key = 1000;
do {
    key = key / 2;
    console.log(key);
    let number = key;
    console.log(number);
    continue;
} while (key >= 50); {}
*/

/* //! Задание 6
цикл while:
let key = 5;
while (key < 31) {
    console.log(`Сегодня ${key} пятница, пора делать отчет`);
    key += 7;
}

цикло for:
for (let i = 5; i < 31; i = i + 7) {
    console.log(`Сегодня ${i} пятница, пора делать отчет`);
}

цикл do while:
let i = 5;
do {
    i = i + 7;
    console.log(`Сегодня ${i} пятница, пора делать отчет`);
    continue;
} while (i + 7 < 31); {}
 */