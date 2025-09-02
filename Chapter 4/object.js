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



const blogs = [
    {title: 'why mac & cheese rules', likes: 30},
    {title: '10 things to make with marmite', likes: 50}
]

console.log(blogs);

let user =  {
    name: 'crystal', 
    age: 30,
    email: 'crystal@gmail.com',
    location: 'berlin',
    blogs: ['Why mac & cheese rules', '10 things to make with marmite'],
    login(){
        console.log('the user logged in');
    },
    logout(){
        console.log('the user logged out');
    },
    logBlogs(){
        console.log('this user has written the following blogs:');
        this.blogs.forEach(blog => {
            console.log(blog);
        })
    }
};

user.logBlogs();
console.log(this);
 
user.login();
user.logout();

const name = 'mario';
name.toUpperCase();

