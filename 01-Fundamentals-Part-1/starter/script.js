/*
let js = "amazing";
//if (js === 'amazing') alert("Javascript is Fun")
console.log(40 + 8 + 23 - 10);
console.log("Jonas")
console.log('Jonas')

let firstName = "Jonas";
console.log(firstName)

// variable names only contain name,number,dollar,underscore _  $
// reserved keyword cannot be variable like new function
//new can work but better to call it
// variable is used to camel case
// Object Oriented Language can use uppercase and constant value is uppercase, real constant is all uppercase
let $name = 'James'
let $function = 'JM'

let myFirstJob = 'Programmer'
let myCurrentJob = 'Teacher'

let job1 = 'Programmer'
let job2 = 'Teacher'


let javascriptIsFun = true;
console.log(javascriptIsFun);

console.log(typeof true)
console.log(typeof javascriptIsFun)
console.log(typeof 23)
console.log(typeof 'Jones')

javascriptIsFun = 'Yes!';
console.log(typeof javascriptIsFun);

let year;
console.log(year) //undefined
console.log(typeof year) //undefined

year = 1991;
console.log(typeof year)

console.log(typeof null) //object


let age = 30
age = 31 //mutate

//const is not changed
const birthYear = 1991;
// birthYear = 1990
lastname = 'Azam' //creating property not use that
console.log(lastname)


//Mathematical operator
const now = 2037
const ageJonas = now - 1991
const ageSarah = now - 2010
console.log(ageJonas, ageSarah)

console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);
// 2 ** 3 means 2 to the power of 3 = 2 * 2 * 2

const firstName = 'Jonas';
const lastName = 'Schmedtmann';
console.log(firstName + ' ' + lastName);
//Assignmenment opeator
let x = 10 + 5;
x += 10;
x *= 4
x++;
x--;
console.log(x);

//comparison operator
console.log(ageJonas > ageSarah)
console.log(ageSarah >= 18)

const isFullAge = ageSarah >= 18
console.log(now - 1991 > now - 2010)

let x, y;
x = y = 25 - 10 - 5
console.log(x, y)
*/
////////////////////////////////////
// Coding Challenge #1

/*
Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / height ** 2 = mass / (height * height). (mass in kg and height in meter).

1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both versions)
3. Create a boolean variable 'markHigherBMI' containing information about whether Mark has a higher BMI than John.

TEST DATA 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.
TEST DATA 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 m tall.

GOOD LUCK 😀
*/
/*
const weightMark = 78;
const heightMark = 1.69

const weightJohn = 92;
const heightJohn = 1.95;

let BMIMark, BMIJohn;

BMIMark = weightMark / heightMark ** 2
console.log(BMIMark)

BMIJohn = weightJohn / (heightJohn * heightJohn);
console.log(BMIJohn);


const markHigherBMI = BMIMark > BMIJohn;
console.log(markHigherBMI)

const firstName = 'Jonas'
const job = 'teacher'
const birthYear = 1991
const year = 2037

const jonas = "I'm " + firstName + ', a ' + (year - birthYear) + ' years old ' + job + "!";

console.log(jonas)

const jonasNew = `I'm ${firstName} a ${year - birthYear} years old ${job}!`
console.log(jonasNew)

console.log(`Just a regular string.....`)
console.log('String with \n\
multiple \n\lines')
console.log(`String with
multiple
lines`)


const age = 19
const isOldEnough = age >= 18;

if (isOldEnough) {
    console.log('Sarah can start driving license ')
}
else {
    const yearsLeft = 18 - age;
    console.log(`Sarah is too young, Well another ${yearsLeft} years : `)
}

const birthYear = 1991;
if (birthYear <= 2000) {
    let century = 20
} else {
    let century = 21
}
//console.log(century)

const weightMark = 78;
const heightMark = 1.69

const weightJohn = 92;
const heightJohn = 1.95;

let BMIMark, BMIJohn;

BMIMark = weightMark / heightMark ** 2
console.log(BMIMark)

BMIJohn = weightJohn / (heightJohn * heightJohn);
console.log(BMIJohn);


const markHigherBMI = BMIMark > BMIJohn;
if (markHigherBMI) {
    console.log(` Mark BMI (${BMIMark}) is higher than John (${BMIJohn}) `)
}
else {
    console.log(` John BMI ${BMIJohn} is higher than Mark ${BMIMark} `)
}

//type conversion
const inputYear = '1991'
console.log(Number(inputYear))
console.log(inputYear + 18)
console.log(Number(inputYear) + 18)
console.log(Number('Jonas'))
console.log(typeof Nan)

console.log(String(23), 23)

//type coersion
console.log('I am' + 23 + ' years old')
console.log('23' - '10' - 3)
console.log('23' + '10' + 3)
console.log('23' > '18')

let n = '1' + 1
n = n - 1
console.log(n)

// 5 falsy value 0,'',undefined,null,NaN
console.log(Boolean(''))
console.log(Boolean(undefined))
console.log(Boolean(0))
console.log(Boolean(NaN))

// === does not type coersion
const ages = 18
if (ages === 18) {
    console.log("You just became an adult :D")
}

// == does type coersion

const age = '18';
if (age === 18) console.log('You just became an adult :D (strict)');

if (age == 18) console.log('You just became an adult :D (loose)');

const favourite = Number(prompt("What's your favourite number?"));
console.log(favourite);
console.log(typeof favourite);




// Coding challange

const scoreDolphins = (96 + 108 + 89) / 3;
const scoreKoalas = (88 + 91 + 110) / 3;
console.log(scoreDolphins, scoreKoalas);

if (scoreDolphins > scoreKoalas) {
    console.log('Dolphins win the trophy 🏆');
} else if (scoreKoalas > scoreDolphins) {
    console.log('Koalas win the trophy 🏆');
} else if (scoreDolphins === scoreKoalas) {
    console.log('Both win the trophy!');
}

// BONUS 1
// const scoreDolphins = (97 + 112 + 80) / 3;
// const scoreKoalas = (109 + 95 + 50) / 3;
// console.log(scoreDolphins, scoreKoalas);

// if (scoreDolphins > scoreKoalas && scoreDolphins >= 100) {
//     console.log('Dolphins win the trophy 🏆');
// } else if (scoreKoalas > scoreDolphins && scoreKoalas >= 100) {
//     console.log('Koalas win the trophy 🏆');
// } else if (scoreDolphins === scoreKoalas && scoreDolphins >= 100 && scoreKoalas >= 100) {
//     console.log('Both win the trophy!');
// } else {
//     console.log('No one wins the trophy 😭');
// }

*/

////////////////////////////////////
// The switch Statement
const day = 'friday';

switch (day) {
    case 'monday': // day === 'monday'
        console.log('Plan course structure');
        console.log('Go to coding meetup');
        break;
    case 'tuesday':
        console.log('Prepare theory videos');
        break;
    case 'wednesday':
    case 'thursday':
        console.log('Write code examples');
        break;
    case 'friday':
        console.log('Record videos');
        break;
    case 'saturday':
    case 'sunday':
        console.log('Enjoy the weekend :D');
        break;
    default:
        console.log('Not a valid day!');
}

if (day === 'monday') {
    console.log('Plan course structure');
    console.log('Go to coding meetup');
} else if (day === 'tuesday') {
    console.log('Prepare theory videos');
} else if (day === 'wednesday' || day === 'thursday') {
    console.log('Write code examples');
} else if (day === 'friday') {
    console.log('Record videos');
} else if (day === 'saturday' || day === 'sunday') {
    console.log('Enjoy the weekend :D');
} else {
    console.log('Not a valid day!');
}

// The Conditional (Ternary) Operator
const age = 23;
// age >= 18 ? console.log('I like to drink wine 🍷') : console.log('I like to drink water 💧');

const drink = age >= 18 ? 'wine 🍷' : 'water 💧';
console.log(drink);

let drink2;
if (age >= 18) {
    drink2 = 'wine 🍷';
} else {
    drink2 = 'water 💧';
}
console.log(drink2);

console.log(`I like to drink ${age >= 18 ? 'wine 🍷' : 'water 💧'}`);

// coding challange
const bill = 275;
const tip = bill >= 50 && bill <= 300 ? bill * .15 : bill * .20
console.log(`The bill was ${bill} ,the tip was ${tip} and the total value was ${bill + tip}`)