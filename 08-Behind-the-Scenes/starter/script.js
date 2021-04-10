'use strict';

// Scoping
/*
function calcAge(birthYear) {
  const age = 2037 - birthYear;
  //   console.log(firstName);

  function printAge() {
    let output = `${firstName}, You are ${age}, born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      var millenial = true; //var is function scoped
      // Creating New variable with same name as outer scope's variable
      const firstName = 'Steven';
      //Reassigning outer scope's variable
      output = 'NEW OUTPUT!';
      const str = `Oh you are a millenial, ${firstName}`;
      console.log(str);

      function add(a, b) {
        return a + b;
      }
    }
    // console.log(str);  //script.js:15 Uncaught ReferenceError: str is not defined
    console.log(millenial); //Pre Es6 //true showing
    //  console.log(add(2, 3)); //function are blocked scope
    //don't understand
    console.log(output);
  }
  printAge();
  return age;
}

const firstName = 'Jonas';
calcAge(1991);
//console.log(age); //Reference error
//printAge(); //Reference error
*/
/*
console.log(me);
// console.log(job);
// console.log(year);

var me = 'Jonas';
let job = 'teacher';
const year = 1991;

// Function
console.log(addDecl(2, 3));
// console.log(addExp(2, 3)); //script.js:52 Uncaught ReferenceError: Cannot access 'addExp' before initialization
// console.log(addArrow(2, 3)); //script.js:53 Uncaught TypeError: addArrow is not a function

function addDecl(a, b) {
  return a + b;
}

const addExp = function addArrow(a, b) {
  return a + b;
};

var addArrow = (a, b) => a + b;

//Example
//console.log(!numProducts);

if (!numProducts) deleteShoppingCart();

var numProducts = 10;
function deleteShoppingCart() {
  console.log('All Products are deleted');
}

var x = 1;
let y = 2;
const z = 3;

console.log(x === window.x); // true
console.log(y === window.y); // false
console.log(z === window.z); // false
*/
/*
console.log(this);

const calcAge = function (birthYear) {
  console.log(2037 - birthYear);
  console.log(this);
};
calcAge(1991);

const calcAgeArrow = birthYear => {
  console.log(2037 - birthYear);
  console.log(this);
};

calcAgeArrow(1991);

const jonas = {
  year: 1991,
  calcAge: function () {
    console.log(this);
    console.log(2037 - this.year);
  },
};

jonas.calcAge();

const matilda = {
  year: 2017,
};

matilda.calcAge = jonas.calcAge;
matilda.calcAge();

const f = jonas.calcAge;
//f();
*/
/*
var firstName = 'Matilda';
const jonas = {
  firstName: 'Jonas',
  year: 1991,
  calcAge: function () {
    //  console.log(this);
    console.log(2037 - this.year);

    //Soultion 1
    // const self = this; // self or that
    // const isMillenial = function () {
    //   console.log(self);
    //   console.log(self.year >= 1981 && self.year <= 1986);
    //   //console.log(this.year >= 1981 && this.year <= 1986);
    // };

    //Solution 2 : Arrow function
    const isMillenial = () => {
      console.log(this);
      console.log(this.year >= 1981 && this.year <= 1986);
    };

    isMillenial();
  },

  // greet: () => console.log(`Hey ${this.firstName}`),
  greet: function () {
    console.log(this);
    console.log(`Hey ${this.firstName}`);
  },
};

jonas.greet();
jonas.calcAge();

//Argument Keyword
const addExpr = function addArrow(a, b) {
  console.log(arguments);
  return a + b;
};

addExpr(2, 5);
addExpr(2, 5, 8, 12);
var addArrow = (a, b) => {
  console.log(arguments);
  return a + b;
};
//addArrow(2, 5, 8);
*/
/*
let age = 30;
let oldage = age;
age = 31;
console.log(age);
console.log(oldage);

const me = {
  name: 'Jonas',
  age: 30,
};
const friend = me;
friend.age = 27;
console.log('Friend: ', friend);
console.log('Me', me);
*/

//Primitive types
let lastName = 'Williams';
let oldLastName = lastName;
lastName = 'Devis';
console.log(lastName, oldLastName);

//REference types
const jessica = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
};

const marriedJessica = jessica;
marriedJessica.lastName = 'Devis';
console.log('Before marriage: ', jessica);
console.log('After marriage: ', marriedJessica);

//marriedJessica = {};

//Copying objects

const jessica2 = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
  family: ['Alice', 'Bob'],
};

const jessicaCopy = Object.assign({}, jessica2);
jessicaCopy.lastName = 'Devis';

jessicaCopy.family.push('Marry');
jessicaCopy.family.push('John');

console.log('Before marriage: ', jessica2);
console.log('After marriage: ', jessicaCopy);
