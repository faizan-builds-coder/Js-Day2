// 1. Positive Negative Zero Checker
let num = -5;
if (num > 0) {
    console.log("Positive");
}
else if (num < 0) {
    console.log("Negative");
}
else {
    console.log("Zero");
}
console.log("");


// 2. Leap Year Checker

let year = 2024;

if (year % 4 == 0 && (year % 100 != 0 || year % 400 == 0)) {
    console.log("Leap Year");
}
else {
    console.log("Not Leap Year");
}
console.log("");


// 3. Print 1 to 100

for (let i = 1; i <= 100; i++) {
    console.log(i);
}
console.log("");


// 4. Even and Odd Numbers

for (let i = 1; i <= 20; i++) {

    if (i % 2 == 0) {
        console.log(i + " Even");
    }
    else {
        console.log(i + " Odd");
    }

}
console.log("");


// 5. Multiplication Table

let table = 5;

for (let i = 1; i <= 10; i++) {

    console.log(table + " x " + i + " = " + table * i);

}
console.log("");


// 6. Sum of 1 to N

let n = 10;
let total = 0;

for (let i = 1; i <= n; i++) {

    total = total + i;

}

console.log("Sum =", total);
console.log("");


// 7. Number Guessing Game

let correctNumber = 7;
let guess = 4;

if (guess == correctNumber) {

    console.log("You Win");

}
else if (guess < correctNumber) {

    console.log("Try Higher Number");

}
else {

    console.log("Try Lower Number");

}
console.log("");
