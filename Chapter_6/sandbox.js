/* const para = document.querySelector('div.error');

console.log(para); */

let paras = document.querySelectorAll('p');
let errors = document.querySelectorAll('.error')

paras.forEach(para => {
    console.log(para);
})

errors.forEach(error => {
    console.log(error);
})

console.log(paras[2]);

// Get an Element by ID
let title = document.getElementById('page-title');
console.log(title);

// Get Elements by their Class Name
errors = document.getElementsByClassName('error');
console.log(errors);
console.log(errors[0]);

// Get Elements by their Tag Name
paras = document.getElementsByTagName('p');
console.log(paras);
console.log(paras[1]);

//
/* const para = document.querySelector('p');

console.log(para.innerText);

para.innerText = 'Ninjas are awesome!'; */

paras = document.querySelectorAll('p');

/* paras.forEach(para => {
    console.log(para);
    para.innerText += "New Text";
}); */

let content = document.querySelector('.content');

/* console.log(content.innerHTML)
content.innerHTML += '<h2>This is a new h2</h2>'; */

const people = ['Linus', 'John', 'Denzel'];

people.forEach(person => {
    content.innerHTML += `<p>${person}</p>`;
});

const link = document.querySelector('a');

console.log(link.getAttribute('href'));
link.setAttribute('href', 'https://www.github.com')
link.innerText = 'Link to Github'

/* const mssg = document.querySelector('p.error');
console.log(mssg.getAttribute('class'));
mssg.setAttribute('class', 'success');
mssg.setAttribute('style', 'color:green;');
console.log(mssg.getAttribute('class')); */

title = document.querySelector('h1');

//title.setAttribute('style', 'margin:50px;');

/* console.log(title.style);
console.log(title.style.color);

title.style.margin = '50px';
title.style.color = 'crimson';
title.style.fontSize = '60px';
title.style.margin = ''; */

/* content = document.querySelector('p');

console.log(content.classList);
content.classList.add('error');
content.classList.remove('error');
content.classList.add('success'); */

paras = document.querySelectorAll('p')

paras.forEach(para => {
    console.log(para.innerText);
    if (para.innerText.includes('error')){
        para.classList.add('error');
    } else if (para.innerText.includes('success')){
        para.classList.add('success');
    }
})

title = document.querySelectorByID('title-page');

title.classList.toggle('test');