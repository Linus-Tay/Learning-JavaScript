// Object Literals

let user = {
    name: 'crystal',
    age: 30,
    email: 'crystal@notascam.com',
    location: 'berlin',
    blogs: ['Why Mac & Cheese Rules!', '10 Things to Make with Marmite.'],
    login: () => {
        console.log('The user is logged in.');
    }
};

console.log(user);
console.log(user.name);

// user.age = 35;
console.log(user.age);

const key = 'location';
console.log(user[key]);

console.log(user['email']);
user['name'] = 'chun-li';
console.log(user.name);

console.log(typeof user);

const blogs = [
    { title: 'Why Mac & Cheese Rules!', likes: 30},
    { title: '10 Things to Make with Marmite.'}
]

console.log(blogs);

user = {
    name: 'crystal',
    age: 30,
    email: 'crystal@notascam.com',
    location: 'berlin',
    blogs: [   
         { title: 'Why Mac & Cheese Rules!', likes: 30},
        { title: '10 Things to Make with Marmite.', likes:50}
    ],
    login(){
        console.log('The user is logged in.');
    },
    logout(){
        console.log('The user logged out.');
    },
    logBlogs(){
        //console.log(this.blogs);
        console.log('This user has written the follow blogs:');
        this.blogs.forEach(blog => {
            console.log(blog.title, blog.likes);
        })
    }
};

user.login();
user.logout();

user.logBlogs();
console.log(this);

// Math Object
console.log(Math);
console.log(Math.PI);
console.log(Math.E);

const area = 7.7;

console.log(Math.round(area));
console.log(Math.floor(area));
console.log(Math.ceil(area));
console.log(Math.trunc(area));

// Random Numbers

const random = Math.random();

console.log(random);
console.log(Math.round(random * 100));

// Primitive Values
let scoreOne = 50;
let scoreTwo = scoreOne;

console.log(`scoreOne: ${scoreOne}`, `scoreTwo: ${scoreTwo}`);

scoreOne = 100;
console.log(`scoreOne: ${scoreOne}`, `scoreTwo: ${scoreTwo}`);

// Reference Values

const userOne = {name: 'rye', age:30};
const userTwo = userOne;

console.log(userOne, userTwo);

userOne.name = 'John';
console.log(userOne, userTwo);