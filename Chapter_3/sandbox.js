// for loops

/* for(let i = 0; i < 5; i++){
    console.log('In loop: ', i);
} 

console.log('Loop finished'); */

/* const names = ['John', 'Cena', 'Niki', 'Bella']

for(let i = 0; i < names.length; i++){
    //console.log(names[i]);
    let html = `<div>${names[i]}</div>`
    console.log(html);
} */

// while loops
const names = ['John', "Cena", "Niki", "Bella"];
/* let i = 0;

while (i < 5){
    console.log('In loop: ', i);
    i++;
} */

/* let i = 0;
while (i < names.length){
    console.log(names[i]);
    i++;
} */

// do while loops
/* let i = 3;
do{
    console.log('Value of i is: ', i);
    i++;
} while (i < 5); */

// if statements
/* const age = 25;

if(age > 20){
    console.log('You are over 20 years old!');
}

const ninjas = ['linus', 'john', 'denzel', 'carmen'];

if(ninjas.length > 3){
    console.log("That's a lot of ninjas!");
} */

// Logical Operators - OR || and AND &&
const password = 'p@ssword1234';


if(password.length >= 12 && password.includes('@')){
    console.log("That password is mighty strong!")
} else if (password.length >= 8 || password.includes('@') && password.length >= 5){
    console.log("That password is long enough!");
} else {
    console.log("That password is not long enough!");
}

// Logical NOT (!)
let user = false;

if (!user) {
    console.log('You must be logged in to continue!')
}

console.log(!true);
console.log(!false);

// Break and Continue

const scores = [50, 25, 0, 30, 100, 20, 10];

for(let i = 0; i < scores.length; i++){
    console.log('Your score: ', scores[i]);

    if(scores[i] !== 100){
        continue;
    }

    if(scores[i] === 100){
        console.log('Congratulations, you have the top score!')
        break;
    } 
}

// Switch Statements
const grade = 'A';

switch(grade){
    case 'A':
        console.log('You got an A!');
        break;
    case 'B':
        console.log('You got an B!');
        break;
    case 'C':
        console.log('You got an C!');
        break;
    case 'D':
        console.log('You got an D!');
        break;
    case 'E':
        console.log('You got an E!');
        break;
    default:
        console.log('Not a valid grade!')
}

// Variables and Block Scope
let age = 30;

if(true){
    let age = 40;
    let name = 'Linus';
    console.log("Inside first code block: ", age, name);

    if(true){
        let age = 50;
        console.log('Inside second code block: ', age);
    }
}

console.log('Outside code block: ', age, name);