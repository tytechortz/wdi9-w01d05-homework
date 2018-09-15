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

//B. Easy Does it
/*
const quotes = ["Be excellent to each other-Bill and Ted", "Have a good time, all the time-Viv Savage", "Reckon you got any mustard for them biscuits?-Karl"];
*/

//C. Accessing elements
/*
const randomThings = [1, 10, "Hello", true];
//1.  randomThings[0];
console.log(randomThings[0]);
//2.
randomThings[2] = "World";

//3.
console.log(randomThings);
*/

//D. Change values
/*
const ourClass = ["Salty", "Zoom", "Sardine", "Slack", "Github"];
//1.
ourClass[2];

//2. 
ourClass[4] = "Octocat";

//3.
ourClass.push("Cloud City");
console.log(ourClass);
*/

//E. Mix it up
//1.
/*
const myArray = [5, 10, 500, 20];

myArray.push("Egon", "Long live Koshka!");
console.log(myArray);

//2. 
myArray.shift();
console.log(myArray);

//3.
myArray.unshift("Bob Marley");
console.log(myArray); 

//4.
myArray.pop();
console.log(myArray);

//5.
myArray.reverse();
console.log(myArray);
// Yes the array is mutated, meaning the source element is changed.  It returns the
// of the reversed original array.
*/

//F. Biggie Smalls
/*
let num = 100;
    if (num < 100) {
     console.log("little number");
    } else console.log("big number");
*/

//G. Monkey in the Middle
//1.
/*
let num = 11;
if (num < 5) {
    console.log("little number");
    } else if (num > 10) {
     console.log("big number");
        } else {
     console.log("monkey");
    }
*/
//H. What's in Your Closet
/*
const kristynsCloset = [
    "left shoe",
    "cowboy boots",
    "right sock",
    "GA hoodie",
    "green pants",
    "yellow knit hat",
    "marshmallow peeps"
  ];
  const thomsCloset = [
  [
    // These are Thom's shirts
    "grey button-up",
    "dark grey button-up",
    "light blue button-up",
    "blue button-up",
  ],[
    // These are Thom's pants
    "grey jeans",
    "jeans",
    "PJs"
  ],[
    // Thom's accessories
    "wool mittens",
    "wool scarf",
    "raybans"
  ]
]


  //1.
  //console.log("Kristyn is rocking that " + kristynsCloset[2] + " today!");

  //2. 
  kristynsCloset.splice(6, 0, "raybans");
  //console.log(kristynsCloset);

  //3. 
  kristynsCloset[5] = "stained knit hat";
  //console.log(kristynsCloset);

  //4.
  console.log(thomsCloset[0][0]);

  //5.
  console.log(thomsCloset[1][1]);

  //6.
  console.log(thomsCloset[2][0]);

  //7.
  console.log("Thom is looking fierce in a " + thomsCloset[0][0] + ", " + thomsCloset[1][1] + ", and " + thomsCloset[2][0] + "!");

  //8.
  thomsCloset[1][2] = "Footie Pajamas";
  console.log(thomsCloset);

  */

  //IV.
  //A.

  //B.
   const printCool = (name) => {
    console.log(name + " is cool");
    }
    printCool("Captain Reynolds");
 



 
    

