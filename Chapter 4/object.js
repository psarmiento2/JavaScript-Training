// object literals 

// let user =  {
//     name: 'crystal', 
//     age: 30,
//     email: 'crystal@gmail.com',
//     location: 'berlin',
//     blogs: ['Why mac & cheese rules', '10 things to make with marmite']

// };

// console.log(user);
// console.log(user.name);

// // user.age = 35; // update the age
// console.log(user.age);

// console.log(user['location']);
// user['name'] = 'chun-li'
//  console.log(user['name']);

//  console.log(typeof user);

/* ---------------------------------------------------------------------------------------*/

// const blogs = [
//     {title: 'why mac & cheese rules', likes: 30},
//     {title: '10 things to make with marmite', likes: 50}
// ]

// console.log(blogs);

// let user =  {
//     name: 'crystal', 
//     age: 30,
//     email: 'crystal@gmail.com',
//     location: 'berlin',
//     blogs: [
//         {title: 'why mac & cheese rules', likes: 30},
//         {title: '10 things to make with marmite', likes: 50}
//     ],
//     login(){
//         console.log('the user logged in');
//     },
//     logout(){
//         console.log('the user logged out');
//     },
//     logBlogs(){
//         console.log('this user has written the following blogs:');
//         this.blogs.forEach(blog => {
//             console.log(blog.title, blog.likes);
//         })
//     }
// };

// user.logBlogs();
// console.log(this);
 
// user.login();
// user.logout();

// const name = 'mario';
// name.toUpperCase();

/* ---------------------------------------------------------------------------------------*/

// // Math Object

// console.log(Math);
// console.log(Math.PI);
// console.log(Math.E);

// const area = 7.7;

// console.log(Math.round(area));
// console.log(Math.floor(area));
// console.log(Math.ceil(area));
// console.log(Math.trunc(area));

// // random  numbers

// const random = Math.random();

// console.log(random);
// console.log(Math.round(random * 100));


/* ---------------------------------------------------------------------------------------*/

// primitive values

// let scoreOne = 50;
// let scoreTwo = scoreOne;

// console.log('scoreOne: ${scoreOne', 'scoreTwo: ${scoretTwo}');

// scoreOne = 100;

// console.log('scoreOne: ${scoreOne', 'scoreTwo: ${scoretTwo}');

// references values

const userOne  = {name: 'ryu', age: 30};
const userTwo = userOne;

console.log(userOne, userTwo);

userOne.age = 40;
userOne.name = 'chun-li'
console.log(userOne, userTwo);
