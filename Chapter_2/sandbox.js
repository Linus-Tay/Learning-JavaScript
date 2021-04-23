let age = 25;
let year = 2019;

// log things to console
// console.log(age, year);

/* age = 30;
console.log(age);

const points = 100;
console.log(points); */

var score = 75;
console.log(score);


// Strings
console.log("Hello, world!");

let email = 'johncena@notascam.com';
console.log(email);

// String Concatenation
let firstName = 'John';
let lastName = 'Cena';

let fullName = firstName + ' ' + lastName;
console.log(fullName);

// Getting Characters
console.log(fullName[2]);

// String Length
console.log(fullName.length);

// String Methods
console.log(fullName.toUpperCase());
let result = fullName.toLowerCase();
console.log(result, fullName);

let index = email.indexOf('@');
console.log(index);

// Common String Methods
email = 'jackblack@notascam.com';

/* let emailIndex = email.lastIndexOf('m');

let emailIndex = email.slice(2,5);

let emailIndex = email.substr(0,10);

let emailIndex = email.replace('b', 'c'); */

let emailIndex = email.replace('a', 'o');

console.log(emailIndex);

// Numbers

let radius = 10;
const pi = 3.14;

console.log(radius, pi);

// Math Operators +, -, *, /, **, %

/* console.log(10/2);
let calculation = radius % 3; 
let calculation = pi * radius**2; */

// order of operation - Brackets Indices Division Multiplication Addition Subtraction

/* let calculation = 5 * (10-3)**2; 

console.log(calculation); */

let likes = 10;

/* likes = likes + 1;
likes++;
likes--;

likes += 10;
likes -= 5;
likes *= 2; 
likes /= 2;

console.log(likes); */

// NaN - not a number

/* console.log(5/'hello');
console.log(2*'hello'); */

let sentence = 'The blog has ' + likes + ' likes!';
console.log(sentence);

// Template Strings
const title = 'Best reads of 2019';
const author = 'John';
const like = 30;

// Concatenation Way
/* let statement = 'The blog called ' + title + 'by ' + author + 'has ' + like + " likes!";
console.log(statement); */

// Template String Way - ` not '
let statement = `The blog called ${title} by ${author} has ${like} likes!`;
console.log(statement);

// Creating html Templates
let html = `
    <h2>${title}</h2>
    <p>by ${author}.</p>
    <span>This blog has ${like} likes!</span>
`;

console.log(html);

// Arrays
let ninjas = ['shaun', 'ryu', 'chun-li'];
console.log(ninjas[1]);

ninjas[1] = 'ken';
console.log(ninjas[1])

let ages = [20, 25, 30, 35];
console.log(ages[2]);

let random = ['shaun', 'crystal', 30, 20];
console.log(random);

console.log(ninjas.length);

// Array Methods
/* let endResult = ninjas.join(', '); 
let endResult = ninjas.indexOf('chun-li'); 
let endResult = ninjas.concat('ken', 'crystal'); */
let endResult = ninjas.push('ken'); 
endResult = ninjas.pop()

console.log(endResult);
console.log(ninjas);

// Undefined;
let number;

console.log(number, number + 3, `the number is ${number}`);

// Null;
let nothing = null;

console.log(nothing, nothing + 3, `the number is ${nothing}`);

// Booleans & Comparisons
console.log(true, false, "true", "false");

// Methods can Return Booleans
email = 'conan@notascam.com'
let names = ['mario', 'luigi', 'toad'];

let isAnEmail = email.includes('.com')
let hasBowser = names.includes('bowser');

console.log(isAnEmail);
console.log(hasBowser);

// Comparison Operators
let aNumber = 25;

console.log(aNumber == 25);
console.log(aNumber == 30);
console.log(aNumber != 30);
console.log(aNumber != 25);
console.log(aNumber > 20);
console.log(aNumber < 20);
console.log(aNumber <= 25);

let aString = 'Linus';

console.log(aString == 'linus');
console.log(aString == 'Linus');
console.log(aString > 'Crystal');
console.log(aString > 'crystal');

// Loose Comparision (different types can still be equal)
console.log(aNumber == 25);
console.log (aNumber == "25"); 
console.log(aNumber != 25);
console.log(aNumber != '25');

// Strict Comparison (different types cannot be equal)
console.log(aNumber === 25);
console.log(aNumber === '25');
console.log(aNumber !== 25);
console.log(aNumber !== '25');

// Type Conversion
let data = '100';
console.log(typeof data);

data = Number(data);
console.log(data + 1);
console.log(typeof data);

/* let conversion = Number('hello');
let conversion = String(50); 
let conversion = Boolean(0);
let conversion = Boolean('0'); */
let conversion = Boolean('');

console.log(conversion, typeof conversion);
///////////////////