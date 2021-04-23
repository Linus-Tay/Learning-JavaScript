// Function Declaration
function greet(){
    console.log("Hello there!")
}

// Function Expression
let speak = function(){
    console.log("Good day!");
};

greet();
greet();
greet();

speak();
speak();
speak();

// Argumnets and Parameters
speak = function(name = 'Linus', time = 'morning'){
    console.log(`Good ${time} ${name}!`);
};

speak();
speak('John', 'night')

// Returning Values
/* const calcArea = function(radius){
    let area = 3.14 * radius**2;
    return area;
} */

/* const calcArea = function(radius){
    return 3.14 * radius**2;
};

const a = calcArea(5);
console.log(a); */

// Regular Function
/* const calcArea = function(radius){
    return 3.14 * radius**2;
}; */

// Arrow Function
const calcArea = (radius) => 3.14 * radius**2;

const area = calcArea(5);
console.log("The area is:", String(area));

// Practice Arrow Functions

const hello = () => 'Hello world!';

console.log(hello());

const bill = (products, tax) => {
    let total = 0;
    for (let i = 0; i < products.length; i++){
        total += products[i] + products[i] * tax;
    }
    return total;
};

console.log(bill([10, 15, 30], 0.2))


const name = 'Linus'
// Functions
const greet1 = () => 'Hello';

let resultOne = greet1();
console.log(resultOne);

// Methods
let resultTwo = name.toUpperCase();
console.log(resultTwo);

// Callbacks & foreach

const myFunc = (callbackFunc) => {
    // do something
    let value = 50;
    callbackFunc(value);
};

myFunc(value => {
    // do something
    console.log(value);
});

let people = ['mario', 'luigi', 'ryu', 'linus', 'chun-li'];

const logPerson = (person, index) => {
    console.log(`${index} - Hello ${person}`);
};

people.forEach(logPerson);

// Get a Reference to the 'ul'
const ul = document.querySelector('.people')

people = ['mario', 'luigi', 'ryu', 'linus', 'chun-li'];

let html = ``;

people.forEach((person) => {
    // create html template
    html += `<li style="color: purple">${person}</li>`;
});

console.log(html);
ul.innerHTML = html;
