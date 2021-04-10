'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  fri: {
    open: 11,
    close: 23,
  },
  //  [`day${2 + 4}`]: {
  [weekdays[5]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  //ES6 Enhanced Object Literals
  openingHours,
  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    time = '22:00',
    address,
  }) {
    console.log(
      `Order Received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },
  orderPasta: function (ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with ${ing1},${ing2} and ${ing3}`
    );
  },
  orderPizza: function (mainIngredient, ...otherIngredient) {
    console.log(mainIngredient);
    console.log(otherIngredient);
  },
};

/*
///Coding Challange 4

document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));
const text = document.querySelector('textarea').value;

document.querySelector('button').addEventListener('click', function () {
  const text = document.querySelector('textarea').value;
  const rows = text.split('\n');
  console.log(rows);

  for (const row in rows) {
    const [first, second] = row.toLowerCase().trim().split('_');
    const output = `${first}'s ${second}`;
    console.log(output);
  }
});
*/
const a = 'a_b';
a.replace('_', '');
/*
//split and join
console.log('a+very+nice+string'.split('+'));
console.log('Jonas Schmedtmann'.split(' '));

const [firstName, lastName] = 'Jonas Schmedtmann'.split(' ');
const newName = ['Mr.', firstName, lastName.toUpperCase()].join(' ');
console.log(newName);

const capitalizeName = function (name) {
  const names = name.split(' ');
  const namesUpper = [];

  for (const n of names) {
    //n[0].toUpperCase() + n.slice(1);
    namesUpper.push(n[0].toUpperCase() + n.slice(1));
    namesUpper.push(n.replace(n[0], n[0].toUpperCase()));
  }
  console.log(namesUpper.join(' '));
};

capitalizeName('jessica ann smith devis');
capitalizeName('jonas schedtmann');

// Padding
const message = 'Go to gate 23!';
console.log(message.padStart(20, '+').padEnd(30, '+'));
console.log('Jonas'.padStart(20, '+').padEnd(30, '+'));

const maskCreditCard = function (number) {
  const str = number + ' ';
  const last = str.slice(-5);
  // console.log(str);
  return last.padStart(str.length, '*');
};

console.log(maskCreditCard(433794958040343));
console.log(maskCreditCard('33589324487928'));

//Repeat
const message2 = 'Bad Weather... All Departures Delayed...';
console.log(message2.repeat(5));

const planesInLine = function (n) {
  console.log(`There are ${n} planes in line ${'.'.repeat(n)}`);
};
planesInLine(5);
planesInLine(3);
planesInLine(12);
*/
/*
//Working with string -Part 2
const airline = 'TAP Air Portugal';
console.log(airline.toLowerCase());
console.log(airline.toUpperCase());

//Fix capitalization is name
const passenger = 'jOnAS';
const passengerLower = passenger.toLowerCase();
const passengerCorrect =
  passengerLower[0].toUpperCase() + passengerLower.slice(1);
console.log(passengerCorrect);

//Comparing Email
const email = 'hello@jonas.io';
const loginEmail = 'Hello@jonas.io \n';

// const lowerEmail = loginEmail.toLowerCase();
// const trimmedEmail = lowerEmail.trim();
// console.log(trimmedEmail);

const normalizedEmail = loginEmail.toLowerCase().trim();
console.log(normalizedEmail);
console.log(email === normalizedEmail);

// Replacing
const prizeGB = '268,97€';
const prizeUS = prizeGB.replace('€', '$').replace(',', '.');
console.log(prizeUS);

const announcement =
  'All passengers come to barding door 23, Boarding door 23!';
console.log(announcement.replace('door', 'gate'));
console.log(announcement.replaceAll('door', 'date'));

console.log(announcement.replace(/door/g, 'gate'));

// Booleans
const plane = 'Airbus A320neo';
console.log(plane.includes('A320'));
console.log(plane.includes('Boeing'));
console.log(plane.startsWith('Air'));

if (plane.startsWith('Airbus') && plane.endsWith('neo')) {
  console.log('Part of the NEW Airbus family');
}

// Practice exercise
const checkBaggage = function (items) {
  const baggage = items.toLowerCase();
  if (baggage.includes('knife') || baggage.includes('gun')) {
    console.log('You are NOT allowed on board!');
  } else {
    console.log('Welcome abroad!');
  }
};
checkBaggage('I have a laptop, some tool and pocket knife');
checkBaggage('Socks and camera');
checkBaggage('Got some snacks and a gun far protection');
*/
/*
//Working with String
const airline = 'TAP Air Portugal';
const plane = 'A380';

console.log(plane[0]);
console.log(plane[1]);
console.log(plane[2]);
console.log('8387'[0]);

console.log(airline.length);
console.log('8387'.length);

console.log(airline.indexOf('r'));
console.log(airline.lastIndexOf('r'));
console.log(airline.indexOf('Portugal'));

console.log(airline.slice(4)); //result called substring

console.log(airline.slice(4, 7));
console.log(airline.slice(0, airline.indexOf(' ')));
console.log(airline.slice(airline.lastIndexOf(' ') + 1));
console.log(airline.slice(-2));
console.log(airline.slice(1, -1));

const checkMiddleSeat = function (seat) {
  // B and E are middle seats
  const s = seat.slice(-1);
  if (s === 'B' || s === 'E') {
    console.log('You got the middle seat');
  } else {
    console.log('You are lucky');
  }
};
checkMiddleSeat('11B');
checkMiddleSeat('23C');
checkMiddleSeat('3E');
//Buzi nai
console.log(new String('jonas'));
console.log(typeof new String('jonas'));
//console.log(new String('jonas'));
console.log(typeof new String('jonas').slice(1));
*/
/*
///Coding Challange 3
const gameEvents = new Map([
  [17, '⚽ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽ GOAL'],
  [80, '⚽ GOAL'],
  [92, '🔶 Yellow card'],
]);

//1
const events = [...new Set(gameEvents.values())];
console.log(events);

//2
gameEvents.delete(64);
console.log(gameEvents);

//3
const time = [...gameEvents.keys()].pop();
//console.log(time);
const gameAverageEvent = time / gameEvents.size;
console.log(`An event happened, on average, every ${gameAverageEvent} minutes`);

//4
for (const [key, value] of gameEvents) {
  if (key > 45) {
    console.log(`[Second Half] ${key}: ${value}`);
  } else {
    console.log(`[First Half] ${key}: ${value}`);
  }
}
*/
/*
//Map Iteration
const question = new Map([
  ['question', 'What is the best programming language in the world?'],
  [1, 'C'],
  [2, 'Java'],
  [3, 'Javascript'],
  ['correct', 3],
  [true, 'Correct'],
  [false, 'Try again ! '],
]);

console.log(question);

// Convert object to map
console.log(Object.entries(openingHours));
const hourMap = new Map(Object.entries(openingHours));
console.log(hourMap);

//Quiz app
console.log(question.get('question'));
for (const [key, value] of question) {
  if (typeof key === 'number') {
    console.log(`Answer ${key}: ${value}`);
  }
}
//const answer = Number(prompt('Your answer'));
const answer = 3;
console.log(answer);

console.log(question.get(question.get('correct') === answer));

//Convert map to array
console.log([...question]);
console.log(question.entries());
console.log([...question.keys()]);
console.log([...question.values()]);
*/
/*
/////MAPs: Fundamental///

const rest = new Map();
rest.set('name', 'Classica Italiame');
rest.set(1, 'Firenze, Italy');
console.log(rest.set(2, 'Lisbon, Portugal'));

rest
  .set('catagories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
  .set('open', 11)
  .set('close', 23)
  .set(true, 'We are open :D')
  .set(false, 'We are closed:(');

console.log(rest.get('name'));
console.log(rest.get(true));
console.log(rest.get('1'));

const time = 21;
console.log(rest.get(time > rest.get('open') && time < rest.get('close')));

console.log(rest.has('catagories'));
rest.delete(2);
rest.clear();

const arr = [1, 2];
rest.set([1, 2], 'Test');
rest.set(document.querySelector('h1'), 'Heading');
console.log(rest);
console.log(rest.size);
console.log(rest.get(arr));
console.log(rest.get([1, 2]));
*/
/*
/////////SET/////
const orderSet = new Set([
  'Pasta',
  'Pizza',
  'Pizza',
  'Risotto',
  'Pasta',
  'Pizza',
]);

console.log(orderSet);
console.log(new Set('Jonas'));
console.log(orderSet.size);
console.log(orderSet.has('Pizza'));
console.log(orderSet.has('Bread'));
orderSet.add('Garlic Bread');
orderSet.add('Garlic Bread');
orderSet.delete('Risotto');
console.log(orderSet);

for (const order of orderSet) console.log(order);

// Example
const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];
//const staffUnique = new Set(staff); //Set Creation
const staffUnique = [...new Set(staff)]; //Array creation
console.log(staffUnique);

console.log(
  new Set(['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter']).size
);
console.log(new Set('jonasschedtmaan').size);
*/
/*
//Properties name
const properties = Object.keys(openingHours);
console.log(properties);

let openStr = `We are open on ${properties.length} days`;
for (const day of Object.keys(openingHours)) {
  //console.log(day);
  openStr += `${day}, `;
}
console.log(openStr);

//Property VALUES
const values = Object.values(openingHours);
console.log(values);

//Entire Object
const entries = Object.entries(openingHours);
console.log(entries);

//[key, value]
for (const [key, { open, close }] of entries) {
  //console.log(x);
  console.log(`On ${key} we open at ${open} and close at ${close}`);
}
*/
/*
//////Optional Chaining
if (restaurant.openingHours && restaurant.openingHours.mon)
  console.log(restaurant.openingHours.mon.open);

//With optional chaining
console.log(restaurant.openingHours.mon?.open);
console.log(restaurant.openingHours?.mon?.open);

//Example
const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
for (const day of days) {
  //console.log(day);
  const open = restaurant.openingHours[day]?.open ?? 'Closed';
  // if (open !== undefined) console.log(`On ${day}, we open at ${open}`);
  console.log(`On ${day}, we open at ${open} `);
}

//Methods
console.log(restaurant.order?.(0, 1) ?? 'Method does not exist');
console.log(restaurant.orderRisotto?.(0, 1) ?? 'Method does not exist');
//Arrays
const users = {
  name: 'Jonas',
  email: 'jonas@jonas.io',
};
//const users = [];
console.log(users[0]?.name ?? 'Users array empty');

if (users.length > 0) console.log(users[0].name);
else console.log('Users array empty');
*/

/*
///The For Of Loop
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
for (const item of menu) console.log(item);

for (const item of menu.entries()) {
  // console.log(item);
  console.log(`${item[0] + 1}: ${item[1]}`);
}
for (const [i, el] of menu.entries()) {
  // console.log(item);
  console.log(`${i + 1}: ${el}`);
}
*/
//Coding Challange 1

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

/*
//Coding Challage 2

//1

// for (let i = 0; i < game.scored.length; i++) {
//   console.log(`Goal ${i + 1} : ${game.scored[i]}`);
// }
// for (const item of game.scored.entries()) {
//   // console.log(item);
//   console.log(`Goal ${item[0] + 1}: ${item[1]}`);
// }

for (const [i, player] of game.scored.entries())
  console.log(`Goal ${i + 1}: ${player}`);

//2
let average = 0;
let sum = 0;
const odds = Object.values(game.odds);
// for (let i = 0; i < game.odds.length; i++) {
//   sum += game.odds[i];
// }
for (const add of odds) {
  sum += add;
}
// console.log(sum);
// average = sum / 3;
average = sum / odds.length;
console.log(average);

//3
for (const [team, odd] of Object.entries(game.odds)) {
  //console.log(team, odd);
  const teamStr = team === 'x' ? 'draw' : `victory ${game[team]}`;
  console.log(`Odd of ${teamStr} ${odd}`);
}
*/

/*

//Coding Challange 1
// 1
const [players1, players2] = game.players;
console.log(players1, players2);
// 2
const [gk, ...fieldplayer] = players1;
console.log(gk, fieldplayer);
//console.log(gk);

// 3
//const allPlayers = [...game.players];
const allPlayers = [...players1, ...players2];
console.log(allPlayers);
// 4
const playersFinal = ['Thiago', 'Coutinho', 'Perisic', ...players1];
console.log(playersFinal);
// 5
//const odd = { x: game.odds.team1, draw: game.odds.x, z: game.odds.team2 };

const {
  odds: { team1, x: draw, team2 },
} = game;

console.log(team1, draw, team2);

// 6
const printGoals = function (...players) {
  console.log(players);
  console.log(`${players.length} goals were scored`);
};
printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
printGoals(...game.scored);

// 7
team1 < team2 && console.log('Team 1 is more likely to win');
team1 > team2 && console.log('Team 2 is more likely to win');

console.log(
  `${
    (team1 < team2 && game.team1) || (team2 < team1 && game.team2)
  } is more likely to win`
);

console.log(
  `${(team1 < team2 && game.team1) || game.team2} is more likely to win`
);
*/

/*
// Nullish Coalecense operator
restaurant.numGuests = 0;
const guests = restaurant.numGuests || 10;
console.log(guests);

//Nullish null and undefined
const guestCorrect = restaurant.numGuests ?? 10;
console.log(guestCorrect);
*/
/*
//////////////////////////////////
//Short Circuiting(&& and ||)
//Use any data types. return any data types, short-circuiting
console.log(3 || 'Jonas');
console.log('' || 'Jonas');
console.log(true || 0);
console.log(undefined || null); //both are falsy value

console.log(undefined || 0 || '' || 'Hello' || 23 || null);

restaurant.numGuests = 0;
const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests1);

const guests2 = restaurant.numGuests || 10;
console.log(guests2);

console.log('----AND----');
console.log(0 && 'Jonas');
console.log(7 && 'Jonas');
console.log('Hello' && 23 && null && 'Jonas');

//Practical example
if (restaurant.orderPizza) {
  restaurant.orderPizza('mushroom', 'spinach');
}

restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'spinach');
*/
/*
//Destructring
//Rest Pattern and Parameters

//Spread,because on right side of =
const arr = [1, 2, ...[3, 4]];

// Rest,Because on left side of =
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others);

const [pizza, , risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(pizza, risotto, otherFood);

//Objects
const { sat, ...weekdays } = restaurant.openingHours;
console.log(weekdays);
// 2. Function
const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  console.log(sum);
  //console.log(numbers);
};
add(2, 3);
add(5, 3, 7, 2);
add(8, 2, 5, 3, 2, 1, 4);

const x = [23, 5, 7];
add(...x);
restaurant.orderPizza('mashrooms', 'onion', 'olives', 'spinach');
restaurant.orderPizza('mashrooms');
*/
/*
////The spread parameter...//////

const arr = [7, 8, 9];
const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArr);

const newArr = [1, 2, ...arr];
console.log(newArr);

console.log(...newArr);
console.log(1, 2, 7, 8, 9);

//Different in color
console.log('1 2 7 8 9');

const newMenu = [...restaurant.mainMenu, 'Gnocat'];
console.log(newMenu);

//Copy Array
const mainMenuCopy = [...restaurant.mainMenu];

//Join 2 arrays
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menu);

//Iterables: arrays, strings, maps, sets, not objects
const str = 'Jonas';
const letters = [...str, ' ', 'S'];
console.log(letters);
console.log(...str);
console.log('J', 'o');
//console.log(`${...str}`) //Not possible in object literals

//Real world example
const ingredients = [
  // prompt("Let's make pasta! Ingredient 1?"),
  // prompt('Ingredient 2'),
  // prompt('Ingredient 3'),
];

console.log(ingredients);
restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]);
restaurant.orderPasta(...ingredients);

//Objects
const newRestaurant = { foundedIn: 1998, ...restaurant, founder: 'Guisppe' };
console.log(newRestaurant);

const restaurantCopy = { ...restaurant };
restaurantCopy.name = 'Ristorate Rutta';
console.log(restaurantCopy.name);
console.log(restaurant.name);
*/

/*
//////Destrucring Object/////////////

restaurant.orderDelivery({
  time: '22:38',
  address: 'Via del Sole, 21',
  mainIndex: 2,
  starterIndex: 2,
});
restaurant.orderDelivery({
  address: 'Via del Sole, f21',
  starterIndex: 1,
});

const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;

//Default Values
console.log(restaurantName, hours, tags);
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

//Mutating variables
let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };
({ a, b } = obj);
console.log(a, b);
console.log(({ a, b } = obj));

// Nested objects
const {
  fri: { open: o, close: c },
} = openingHours;
//console.log(fri);
//console.log(open);
console.log(o);
console.log(c);

//////Destrucring Arrays//////////

const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

const [x, y, z] = arr;
console.log(x, y, z);
console.log(arr);

let [main, , secondary] = restaurant.categories;
console.log(main, secondary);

//Switching Variables
// const temp = main;
// main = secondary;
// secondary = temp;
// console.log(main, secondary);

[main, secondary] = [secondary, main];
console.log(main, secondary);

const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);

// Nested Destrucres
const nested = [2, 4, [5, 6]];
// const [i, , j] = nested;
// console.log(i, j);
const [i, , [j, k]] = nested;
console.log(i, j, k);

//Default values
const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r);
*/
