"use strict";

// Задание 1


/* Пример 1
Префиксный инкремент увеличил значение переменной а на 1, потом чисто 2 присвоилось 
переменной с
*/
let a = 1, b = 1, c, d;
c = ++a;
alert(c); // ответ 2

/* Пример 2
d присвоилось значение переменной b, т.е. 1, затем постфиксный инкремент увеличил значение 
переменной b на 1
*/
d = b++
alert(d); // ответ 1

/* Пример 3
Сначало сработает префиксный инкремент (а станет = 3). Затем будет сложение 2 + 3 и переменной с присвоится значение 5.
*/
c = 2 + ++a;
alert(c); // ответ 5

/* Пример 4
Переменная b = 2, d = 2 + 2. Постфиксный инкремент увеличивает значение b уже после
присвоения переменной d результата выражения.
*/
d = 2 + b++;
alert(d); // ответ 4

alert(a); //3
alert(b); //3


// Задание 2

/* x = 5, a = 4
Сначало считаем выражение в скобках, т.к. у них высший приоритет а = а * 2, получаем 4, 
прибавляем 1, х получает значение 5
а стала равна 4 в результате выражения (а *= 2)
*/
let a = 2;
let x = 1 + (a *= 2);


// Задание 3

let a = -3, b = 7;

if (a >= 0 && b >= 0) {
    console.log(a - b);
} else if (a < 0 && b < 0) {
    console.log(a * b);
} else if (a >= 0 && b < 0 || a < 0 && b >= 0) {
    console.log(a + b);
}


// Задание 4

/**
 * Функция вычисляет сумму параметров.
 * @param {number} num1 
 * @param {number} num2 
 */
function sum(num1, num2) {
    return num1 + num2;
}

/**
 * Функция вычисляет разность параметров.
 * @param {number} num1 
 * @param {number} num2 
 */
function difference(num1, num2) {
    return num1 - num2;
}

/**
 * Функция вычисляет частное параметров.
 * @param {number} num1 
 * @param {number} num2 
 */
function divide(num1, num2) {
    return num1 / num2;
}

/**
 * Функция вычисляет произведение параметров.
 * @param {number} num1 
 * @param {number} num2 
 */
function multiply(num1, num2) {
    return num1 * num2;
}


// Задание 5

function mathOperation(arg1, arg2, operation) {
    switch(operation) {
        case "сумма":
            console.log(sum(arg1, arg2));
            break;
        case "разность":
            console.log(difference(arg1, arg2));
            break;
        case "частное":
            console.log(divide(arg1, arg2));
            break;
        case "произведение":
            console.log(multiply(arg1, arg2));
            break;
    }
}