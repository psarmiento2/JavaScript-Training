// function declaration 
function greet(){
    console.log('hello there');
}

// function expression
// const speak = function(){
//     console.log('good day');
// };

greet();
greet();
greet();

// speak();
// speak();
// speak();

// function declaration
function greet(){
    console.log('hello there');
}

// argument % parameters 

// const speak = function(name = 'luigi', time = 'night'){
//     console.log('good ${time} ${name}');
// };

// speak();
// speak('shaun');


/* ----------------------------------------------------------------------------*/

// returning values || regular function

// const calcArea = function (radius){
//     let area = 3.14 * radius**2;
// };

// const area = calcArea(5);
// console.log(area);


// arrow function 

// const calcArea = radius => 3.14 * radius**2;

// const area = calcArea(5);
// console.log('area is: ', area);


/* ----------------------------------------------------------------------------*/

// practice arrow functions 

// const greet = function(){
//     return 'hello, world';
// };

// const greet = () => 'hello, world';
// const result = greet();
// console.log(result);

// const bill = function(products, tax){
//     let total = 0;
//     for (let i = 0; i < products.length; i++){
//         total += products[i] + products[i] * tax;
//     }
//     return total;
// }

// const bill = (products, tax) => {
//     let total = 0;
//     for (let i = 0; i < products.length; i++){
//         total += products[i] + products[i] * tax;
//     }
//     return total;
// }

// console.log(bill([10, 15, 30], 0.2));

/* ----------------------------------------------------------------------------*/

// // functions
//     const greet = () => 'hello';

//     let resultOne = greet();
//     console.log(resultOne);

// // methods

// let resulTwo = name.toUpperCase();
// console.log(resulTwo);


/* ----------------------------------------------------------------------------*/

// callbacks & foreach 

// let people = ['mari', 'luigi', 'ryu', 'shaun', 'chun-li'];

// const logPerson = (person, index) => {
//     console.log('${index} - hello ${person} ');
// };

// people.forEach(logPerson);


/* ----------------------------------------------------------------------------*/

// get a reference to the 'ul'
const ul = document.querySelector('.people');

const people = ['mario', 'luigi', 'ryu', 'shaun', 'chun-li'];

let html = ``;

people.forEach(function(people){
    // create html template
    html += `<li style= "color: purple">${person}</li>`
});

console.log(html);
ul.innerHTML = html;
