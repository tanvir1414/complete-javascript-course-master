'use strict';
/*
let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true
if (hasDriversLicense) console.log('I can drive :D')

// const interface = 'Auto'
// console.log(interface)
// const private = 534;


function logger() {
    console.log("My name is Jonas")
}

//calling /running /invoking function
logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
    //   console.log(apples, oranges)
    const juice = `Juice with ${apples} apples and ${oranges} oranges`;
    return juice;
}

const applejuice = fruitProcessor(5, 0);
console.log(applejuice)

const appleorangejuice = fruitProcessor(2, 4);
console.log(appleorangejuice)

const num = Number('23')


//function declaration
function calcAge1(birthYear) {
    //const age;
    return 2037 - birthYear;
}

const age1 = calcAge1(1991)
console.log(age1)

//function expression
const calcAge2 = function (birthYear) {
    return 2037 - birthYear;
}
const age2 = calcAge2(1991);
console.log(age1, age2);

//Arrow function
const calcAge3 = birthYear => 2037 - birthYear;
const age3 = calcAge3(1991)
console.log(age3);

const yearUntilRetirement = (birthYear, firstName) => {
    const age = 2037 - birthYear
    const retirement = 65 - age;
    //return retirement;
    return `${firstName} retires in ${retirement} years`
}
console.log(yearUntilRetirement(1991), 'Jonas');
console.log(yearUntilRetirement(1988), 'Bob');



const cutPieces = function (fruit) {
    return fruit * 4;
}

function fruitProcessor(apples, oranges) {
    const applePieces = cutPieces(apples)
    const orangePieces = cutPieces(oranges)
    const juice = `Juice with ${applePieces} pieces of apples and ${orangePieces} pieces of oranges`;
    return juice;
}
console.log(fruitProcessor(2, 3));

const calcAge = function (birthYear) {
    return 2037 - birthYear
}
const yearUntilRetirement = (birthYear, firstName) => {
    const age = calcAge(birthYear);
    const retirement = 65 - age;
    if (retirement > 0) {
        console.log(`${firstName} retires in ${retirement} years`)
        return retirement;
    }

    else {
        console.log(`${firstName} has already retired`)
        return -1;
    }
}
console.log(yearUntilRetirement(1991, 'Jonas'))
console.log(yearUntilRetirement(1970, 'Mike'))



const calcAverage = (a, b, c) =>
    (a + b + c) / 3;

console.log(calcAverage(3, 4, 5))


const friend1 = "Michael"
const friend2 = "Steven"
const friend3 = "Peter"

const friends = ['Michael', 'Steven', 'Peter']
console.log(friends)

const y = new Array(1991, 1984, 2008, 2020)
console.log(friends[0])
console.log(friends.length)
console.log(friends[friends.length - 1])

friends[2] = 'Jay'
console.log(friends)
//friends = ['Bob', 'Alice', 'Peter'] //Uncaught TypeError: Assignment to constant variable.

const firstName = 'Jonas'
const jonas = [firstName, 'Schemdtman', 2037 - 1997, 'teacher', friends]
console.log(jonas)
console.log(jonas.length)

//Exercise
const calcAge = function (birthYear) {
    return 2037 - birthYear
}

const years = [1998, 1967, 2002, 2010, 2018]

console.log(calcAge(years))

const age1 = calcAge(years[0])
const age2 = calcAge(years[1])
const age3 = calcAge(years[2])

console.log(age1, age2, age3)
const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])]
console.log(ages)



const friends = ['Michael', 'Steven', 'Peter']

// Add Element
const newLength = friends.push('Jay')
console.log(friends)
console.log(newLength)

friends.unshift('John')
console.log(friends)

friends.pop()
const popped = friends.pop()
console.log(popped)
console.log(friends)

friends.shift()
console.log(friends)

console.log(friends.indexOf('Steven'))
console.log(friends.indexOf('Bob'))

friends.push(23)
console.log(friends.includes('Bob'))
console.log(friends.includes(23))

if (friends.includes('Steven')) {
    console.log('You have a friend called Steven')
}


//////////Object
const jonasArray = [
    'Jones',
    'Schmedtmann',
    2037 - 1991,
    'teacher',
    ['Michael', 'Peter', 'Steven']
];

const jonas = {
    firstName: 'Jonas',
    lastName: 'Schmedtmann',
    age: 2037 - 1991,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven']
};
console.log(jonas)

console.log(jonas.lastName)
console.log(jonas['lastName']) //any expression i like not explicit

const nameKey = 'Name'
console.log(jonas['first' + nameKey])
console.log(jonas['last' + nameKey])

// const interestedIn = prompt('What do you want to know about Jonas Choose between firstName, lastName, age, jobs and friends')
// if (jonas[interestedIn])
//     console.log(jonas[interestedIn])
// else
//     console.log("Wrong Request")

jonas.location = 'Portugal'
jonas['twitter'] = '@jonasschmedtman'
console.log(jonas)

//challange
// Jonas has 3 friends and his best friend is called is Michael
console.log(`$(jonas.firstName) has ${jonas.friends.length} and his friends is called us ${jonas.friends[0]}`)


const jonas = {
    firstName: 'Jonas',
    lastName: 'Schmedtmann',
    birthYear: 1991,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven'],
    hasDriverLicense: true,

    // calcAge: function (birthYear) {
    //     return 2037 - birthYear
    // }
    // calcAge: function () {
    //     console.log(this)
    //     return 2037 - this.birthYear
    // }
    calcAge: function () {
        this.age = 2037 - this.birthYear
        return this.age
    },
    getSummary: function () {
        return `${this.firstName} is a ${this.calcAge()} old and he has ${jonas.hasDriverLicense ? 'a ' : 'no '}driver's license`;
    }
};
//mdn operator precedence
// console.log(jonas.calcAge(1991))
// console.log(jonas['calcAge'](1991))
console.log(jonas.calcAge())
// console.log(jonas['calcAge']())
console.log(jonas.age)

console.log(jonas.getSummary())

//Challange
//Jonas is a 46-year old teacher and he has a driver's license
// console.log(`Jonas is a ${jonas.age} years old teacher and he has `)
// console.log(jonas.hasDriverLicense ? 'a license' : 'no license')

//Coding challange 3
const Mark = {
    fullName: 'Mark Miller',
    mass: 78,
    height: 1.69,
    calcBMI: function () {
        this.BMI = this.mass / this.height ** 2
        return this.BMI
    }

}

const John = {
    fullName: 'John Smith',
    mass: 92,
    height: 1.95,
    calcBMI: function () {
        this.BMI = this.mass / this.height ** 2
        return this.BMI
    }
}
Mark.calcBMI();
John.calcBMI();

if (Mark.BMI > John.BMI) {
    console.log(`${Mark.fullName}'s BMI (${Mark.BMI}) is higher than ${John.fullName}'s (${John.BMI})`)
}
else if (Mark.BMI < John.BMI) {
    console.log(`${John.fullName}'s BMI (${John.BMI}) is higher than ${Mark.fullName}'s (${Mark.BMI})`)
}
else if (Mark.BMI === John.BMI) {
    console.log(`${Mark.fullName}'s BMI (${Mark.BMI}) is equal to ${John.fullName}'s (${John.BMI})`)
}

const jonas = [
    'Jonas',
    'Schmedtmann',
    2037 - 1991,
    'teacher',
    ['Michael', 'Peter', 'Steven'],
    true
];
const types = [];
for (let i = 0; i < jonas.length; i++) {
    console.log(jonas[i], typeof jonas[i]);
    //    types[i] = typeof jonas[i]
    types.push(typeof jonas[i])
}
console.log(types);

const years = [1991, 2007, 1969, 2020]
const ages = []

for (let i = 0; i < years.length; i++) {
    ages.push(2037 - years[i]);
}
console.log(ages);

for (let i = jonas.length - 1; i >= 0; i--) {
    console.log(i, jonas[i], typeof jonas[i]);
    //    types[i] = typeof jonas[i]
    types.push(typeof jonas[i])
}

let dice = Math.trunc(Math.random() * 6) + 1
console.log(dice)
while (dice !== 6) {
    console.log(`You rolled a ${dice}`)
    dice = Math.trunc(Math.random() * 6) + 1
    if (dice === 6)
        console.log("Loop is about to end.....")

}


const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = []
const totals = []

const calcTip = function (bill) {
    return bill >= 50 && bill <= 50 ? bill * 0.15 : bill * 0.2
}

for (let i = 0; i < bills.length; i++) {
    const tip = calcTip(bills[i])
    tips.push(tip);
    totals.push(tip + bills[i])
}
console.log(bills, tips, totals)

const calcAverage = function (arr) {
    let sum = 0;
    let avgLength = arr.length;
    for (let i = 0; i < avgLength; i++) {
        sum += arr[i];
    }
    let average = sum / avgLength
    console.log(average)
    return average
}

calcAverage([1, 2, 3, 4, 5])
console.log(calcAverage(totals))
console.log(calcAverage(tips))
*/