//I. 
// A. Q and A

//1. Use const = a value for a variable that won't change and let for ones that will
//2. let variable = the new value.
//3. let old variable = new varaible.
//4. Assigning a varible means giving a variable a value. Declaring a variable is stating that the variable will be used in the code
//   but does not need a value assigned at that point.  Define
//5. Pseudocoding is writing out what you want the code to do in plain English as a way to
//   get a handle on where you want the code to go without getting bogged down in technicalities to start.
//6. Planning should be about 75-90% of the time spent and typing the code
//   should be about 10-25%.

// B. Strings
// 1.
/*
let firstVariable = "Hello World";
firstVariable = 25;
let secondVariable = firstVariable;
secondVariable = "this";

// Answer is 25

// 2.

let yourName = "James";
console.log("Hello, my name is " + yourName);
*/

// C. Booleans
/*
const a = 4;
const b = 53;
const c = 57;
const d = 16;
const e = 'Kevin';

console.log(a < b);
console.log(c > d);
console.log('Name' == 'Name');
console.log(true != false);
console.log(false == false == false == false == false == false == true);
console.log(false == false)
console.log(e == 'Kevin');
console.log(a && b < c);
console.log(a == a != d);
console.log(48 == '48');
*/
/*
const animal = "cow";
    if (animal == "cow") {
    console.log("mooooo"); 
    } else {
     console.log("Hey! You're not a cow.")     
}
*/

// D.Driver's Ed
/*
const driversAge = 14;
    if (driversAge >= 16) {
    console.log("Here are the keys");
}   else if (driversAge < 16) {
    console.log("Sorry, you're too young.")
}
    
*/

// II. Loops

//A. The basics

//1.
/*
for (let i = 0; i <= 10; i++) {
    console.log(i);
}
*/
//2.
/*
for (let i = 10; i <= 400; i++) {
    console.log(i);
}
*/

//3.
/*
for (let i = 12; i <= 4000; i+=3) {
    console.log(i);
}
*/

//B. Get even
//1 and 2
/*
for (let i = 1; i <= 100; i++) {
   if (i % 2 === 0)
   console.log(i + "<-- is an even number"); 
}
*/

//C.Give me Five
//1.
/*
for (let i = 0; i <= 100; i++) {
    if (i % 5 === 0)
    console.log('I found a ' + i + '.  High Five!');
}

//2.
for (let i = 1; i <= 100; i++) {
    if (i % 5 === 0) {
        console.log('I found a ' + i + '.  High Five!');
    } else if (i % 3 === 0)
        console.log('I found a ' + i + '.  Three is a crowd');
    }
*/
//D. Savings account
//1.
/*
let bankAccount = 0;
for (let i = 1; i <= 10; i++) {
     bankAccount += i;
}
console.log(bankAccount);
*/

//2.
/*
let bankAccount = 0;
for (let i = 1; i <= 100; i++) {
     bankAccount += 2 * i;
}
console.log(bankAccount);
*/

//E.
/*
let sum = 0;
for (let i = 1; i < 1000; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
        sum += i;
    }
}
console.log(sum);
*/
// III. Arrays and Control flow
//A.
//1. Elements
//2. Since arrays are ordered, I assume yes, although the elements can be moved around.
//3. I collect temperature data ever 15 minutes that can be stored in an array

