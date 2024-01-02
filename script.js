"use strict";

// ? VARIABLE NAMING CONVENTION -

// const $school = "HolyCross";
// let firstname = "David"; // Normal Case
// let secondName = "Melon"; // Camel Case
// let first_job = "doctor"; // Snake Case
// let MyFirstSchool = "Harvard"; // Pascal Case
// let _language = "Spanish"; // Normal Case
// const friend1 = "Faiz";
// const birthYear = 2000;
// let teacher1 = "Jacky",
// teacher2 = "Pell";

// const isFullYear = birthYear >= 1999;

// console.log(`${firstname} ${secondName} born in ${birthYear}.`);

// ? DATA TYPES -

// let stringType = "David Melon";
// let numberType = 34;
// let booleanType = true;
// let nullValue = null;
// let undefinedValue;
// let objectType = {
// 	name: "Howar",
// 	age: 20,
// };
// let arrayType = [1, 2, 3, 4];

// console.log(
// 	typeof arrayType,
// 	typeof stringType,
// 	typeof numberType,
// 	typeof booleanType,
// 	typeof undefinedValue,
// 	typeof nullValue,
// 	typeof objectType
// );

// ? CONDITINAL STATEMENT -

// const age = 15;

// if (age >= 19) {
// 	console.log("Sarah can start driving license 🚗");
// } else {
// 	const yearsLeft = 19 - age;
// 	let word = "year";
// 	if (yearsLeft > 1) {
// 		word = "years";
// 	}
// 	console.log(`Sarah still has ${yearsLeft} ${word} to take driving license.`);
// }

// ? OPERATOR PRECEDENCE -

// const jonas = 2023 - 2000;
// const sarah = 2023 - 1998;
// const averageAge = (jonas + sarah) / 2;

// console.log(averageAge);

// ? STRING -

// const person = `I'm David,\na PHD ${first_job} of ${jonas} years old!`;

// console.log(person);

// ? TYPE CONVERSION / COERCION -

// const personBirthYear = "1971";
// console.log(Number(personBirthYear) + 10);

// console.log(`I'm ${20} years old`);
// console.log("4" * "5" - 1);

// ? TRUTHY / FALSY VALUES -

// console.log(Boolean(null));
// console.log(Boolean({}));

// const money = 10;
// if (money) {
// 	console.log("Don't spend it all.");
// } else {
// 	console.log("You should get a job!");
// }

// let height;
// if (height) {
// 	console.log("Height is defined");
// } else {
// 	console.log("Height isn't defined!");
// }

// ? COMPARISON OPERATORS -

// const newAge = 25;
// console.log(newAge === "25");

// const number = Number(prompt("What's your favorite number?"));

// console.log(number, typeof number);

// if (number === 23 || 10 < number <= 23) {
// 	console.log("Cool number 😁");
// } else if (number <= 10) {
// 	console.log("Less than 10");
// } else if (number != 23) {
// 	console.log("Larger value than 23!");
// }

// ? LOGICAL OPERATOR -

// const hasDrivenLicense = true;
// const hasGoodVision = true;
// const shouldDrive = hasDrivenLicense && hasGoodVision;
// const isTried = false;

// if (shouldDrive && !isTried) {
// 	console.log("Sarah is able to drive!");
// } else {
// 	console.log("Someone else should drive!");
// }

// ? SWITCH STATEMENT -

// const day = "friday";

// switch (day) {
// 	case "sunday":
// 		console.log("Sunday class 😊");
// 	case "monday":
// 		console.log("Monday class 🤣");
// 	case "tuesday":
// 		console.log("Tuesday class 😁");
// 	case "wednesday":
// 		console.log("Wednesday class 😀");
// 	case "thrusday":
// 		console.log("Thrusday class 😎");
// 		break;
// 	default:
// 		console.log("Day off for today 😴");
// }

// ? STATEMENT / EXPRESSION -

// An expression is a combination of values, variables, and operators, which computes to a value.

// 3 + 4 or 3 * 4: value
// Statement: Values, Operators, Expressions, Keywords, and Comments.

// ? CONDITIONAL (TERNARY) OPERATOR -

// const age = 20;
// age >= 18
// 	.? / console.log("Can drive a car") // true
// 	: console.log("You need help of others to drive"); // false

// const drink = age >= 18 ? "wine 🍷" : "water 💧";

// console.log(`I like to drink ${drink}.`);

// ? FUNCTION DECLARATION -

// function sum(a, b) {
// 	if (a > b) {
// 		console.log("A is greater than B");
// 		return a / b;
// 	} else {
// 		console.log("B is greater than A");
// 		return b / a;
// 	}
// }

// console.log(sum(2, 10));

// function fruitProcessor(apple, orange) {
// 	return `Juice with ${apple} and ${orange}.`;
// }

// const fruits = fruitProcessor(15, 5);
// const juice = fruitProcessor(10, 4);

// console.log(fruits);
// console.log(juice);

// ? FUNCTION EXPRESSION -

// const calcAge = function (birthYear) {
// 	return 2023 - birthYear;
// };

// console.log(`My current age is ${calcAge(2003)}`);

// ? ARROW FUNCTION -

// const sum = (value1, value2) => value1 + value2;
// const sub = (num1, num2) => num1 - num2;

// console.log(sum(2, 4), sub(10, 5));

// const retiredYears = joiningYear => {
//   const cal = 2023 - joiningYear;
//   return cal
// }

// console.log(retiredYears(2010));

// ? ONE FUNCTION CALLING ANOTHER FUNCTION -

// const cutFruit = (fruit) => fruit * 3;

// function fruitProcessor(apples, oranges) {
// 	return `Juice with ${cutFruit(apples)} pieces of apple and ${cutFruit(
// 		oranges
// 	)} pieces of orange.`;
// }

// const fruitMaker = fruitProcessor(2, 3);
// console.log(fruitMaker);

// const calcAge = (birthYear) => 2037 - birthYear;

// const yearsLeft = function (birthYear, firstName) {
// 	const year_of_retirement = 65 - calcAge(birthYear);
// 	const retirement = year_of_retirement > 0 ? year_of_retirement : -1;

// 	if (year_of_retirement > 0) {
// 		console.log(`${firstName} will retire within ${retirement} years!`);
// 	} else {
// 		console.log(`${firstName} has already retired!`);
// 	}
// };

// yearsLeft(1991, "Sunil");

// ? ARRAYS -

// const friends = ["John", "Michael", "Jonas", "Peter"];
// console.log(friends[2]);
// console.log(friends.length);
// console.log(friends[friends.length - 1]);

// const years = new Array(1991, 2000, 2003);
// console.log(years);

// friends[2] = "Jay";
// console.log(friends);

// const calcAge = (score) => score[0] + 20;
// console.log(calcAge(years));

// ? ARRAY METHODS -

// const friends = ["Michael", "Jonas", "Peter"];

// friends.push("John");
// console.log(friends);

// friends.unshift("Chris");
// console.log(friends);

// friends.pop();
// console.log(friends);

// const remove = friends.shift();
// console.log(friends);

// console.log(friends.indexOf("Peter"));

// if (friends.includes("Peter")) {
// 	console.log("You have friend called Peter.");
// }

// ? OBJECT -

// const personInfo = {
// 	firstName: "Anunay",
// 	lastName: "Argha",
// 	birthYear: 2003,
// 	job: "Developer",
// 	salary: "40K",
// 	friends: ["John", "Jacky", "Pell"],
// 	hasDriverLicense: false,
// 	calcAge: function () {
// 		this.age = 2023 - this.birthYear;
// 		return this.age;
// 	},
// 	summary: function () {
// 		return `${this.firstName} is a ${this.calcAge()}-year old ${
// 			this.job
// 		}, and he has ${this.hasDriverLicense ? "a" : "no"} driver license.`;
// 	},
// };

// console.log(personInfo.summary());

// console.log(personInfo.calcAge());

// console.log(personInfo.friends[0]);
// console.log(personInfo.friends[personInfo.friends.length - 1]);
// console.log(personInfo["first" + "Name"]);

// const userInput = prompt("What do you want to know about me?");

// if (personInfo[userInput]) {
// 	console.log(personInfo[userInput]);
// } else {
// 	console.log("No such value is found.");
// }

// personInfo.location = "Spain";
// personInfo["goal"] = "Player";

// console.log(
// 	`${personInfo.firstName} has ${personInfo.friends.length} friends, and his best friend is called ${personInfo.friends[0]}.`
// );

// ? LOOP - FOR / WHILE

// const friends = ["Michael", "Jonas", true, "Peter", 2023];
// let types = [];

// for (let index = 0; index < friends.length; index++) {
// 	console.log(friends[index]);
// 	types.push(typeof friends[index]);
// }

// console.log(types);

// const years = [1991, 1995, 2000, 2005];
// const ages = [];

// for (let index = 0; index < years.length; index++) {
// 	ages.push(2023 - years[index]);
// }

// console.log(ages);

// Continue and Break

// for (let index = 0; index < friends.length; index++) {
// 	if (typeof friends[index] === "boolean") continue;
// 	console.log(friends[index]);
// }

// console.log("---- Only String ----");

// for (let index = 0; index < friends.length; index++) {
// 	if (typeof friends[index] === "boolean") break;
// 	console.log(friends[index]);
// }

// const years = [1991, 1995, 2000, 2005];

// for (let i = years.length - 1; i >= 0; i--) {
// 	console.log(i, years[i], typeof years[i]);
// }

// for (let exercise = 1; exercise <= 4; exercise++) {
// 	console.log(`**** Starting exercise ${exercise} ****`);

// 	for (let rep = 1; rep <= 3; rep++) {
// 		console.log(`Exercise ${exercise}: Lifting weight repetition ${rep} 🎽`);
// 	}
// }

// let i = 0;
// while (i < 10) {
// 	i++;
// 	console.log(`5 X ${i} = ${5 * i}`);
// }

// let i = 0;
// do {
// 	i++;
// 	console.log(`The number is ${i}.`);
// } while (i < 8);

// const friends = ["John", "Chris", "Pell", "Jacky"];

// for (let name in friends) {
// 	console.log(Number(name) + 1, friends[name]);
// }

// const cars = ["BMW", "Volvo", "Mini", "Toyota"];
// const text = "Python";

// for (let car of cars) console.log(car);
// for (let letter of text) console.log(letter);

// for (const [index, mainCar] of cars.entries())
// 	console.log(`${index + 1}: ${mainCar}`);

// ? DEVELOPER SKILLS -

// UNDERSTANDING THE PROBLEM - 1:

// - TEMPERATURE AMPLITUDE
// - CALCULATE MIN AND MAX TEMPERATURE
// - HANDLING WITH ERROR TEMPERATURE

// UNDERSTAND THE PROBLEM - 2:

// - IF MORE THAN ONE LIST OF TEMPERATURE

// BREAKING DOWN INTO SUB PROBLEMS:

// - MAX TEMPERATURE
// - MIN TEMPERATURE
// - FIND THE DIFFERENCE OF MIN AND MAX
// - IGNORE ERRORS IN TEMPERATURE LIST
// - MERGE THE ALL LISTS > 1

// PSUEDO CODE:

// let temp1 = [17, 15, 20, 13, true];
// let temp2 = [10, 21];

// const calcTemp = function (temp1, temp2) {
// 	const temps = [...temp1, ...temp2];

// 	let max = temps[0];
// 	let min = temps[0];

// 	for (let index = 0; index < temps.length; index++) {
// 		if (typeof temps[index] !== "number") continue;
// 		if (temps[index] > max) max = temps[index];
// 		if (temps[index] < min) min = temps[index];
// 	}

// 	return max - min;
// };

// console.log(calcTemp(temp1, temp2));

// const measureKelvin = function () {
// 	const measurement = {
// 		type: "temp",
// 		unit: "celsius",
// 		value: Number(prompt("Degrees celcius")),
// 	};
// 	console.table(measurement);

// 	return measurement.value + 273;
// };

// console.log(measureKelvin());

// ? SCOPE - GLOBAL / FUNCTION / BLOCK -

// function calcAge(birthYear) {
//  function scope
// 	const age = 2023 - birthYear;

// 	function printAge(message) {
//  person - global scope
// 		const output = `${person}(${age}) is ${message}, born in ${birthYear}.`;
// 		console.log(output);

// 		if (birthYear >= 1961 && birthYear <= 1996) {
//  block scope
// 			const person = "Steven";
// 			const text = `Your are a millenial, ${person}.`;
// 			console.log(text);

// 			function sum(a, b) {
// 				return a + b;
// 			}

// 			console.log(sum(6, 10));
// 		}
// 	}

// 	printAge(age < 60 ? "less than 60 years old" : "more than 60 years");
// 	return age;
// }

// const person = "Chris Pell";
// console.log(calcAge(1971));

// ? THIS KEYWORD -

// const person = {
// 	fullName: "John",
// 	id: 566,
// 	birth: 1971,
// 	calAge: function () {
// 		return 2023 - this.birth;
// 	},
// };

// console.log(person.calAge());

// ? PRIMITIVE / REFERENCE -

// const person = {
// 	fullName: "John",
// 	age: 25,
// };

// let lastName = "Williams";
// let oldLastName = "Addams";
// lastName = "Davis";

// console.log(lastName, oldLastName);

// const newPerson = {
// 	fullName: "Jacky",
// 	lastName: "Willams",
// 	age: 50,
// };

// const newPerson2 = newPerson;

// ? DESTRUCTURING ARRAYS -

// const elements = [2, 3, 4];
// let [a, b, c] = elements;

// console.log(b);

// const restaurant = {
// 	name: "Classico",
// 	location: "Rome, Italy",
// 	categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
// 	mainMenu: ["Pizza", "Pasta", "Risotto"],
// 	startMenu: ["Burger", "Sandwich", "Chicken"],
// 	order: function (starter, main) {
// 		return [this.startMenu[starter], this.mainMenu[main]];
// 	},
// };

// let [main, , secondary] = restaurant.categories;

// Switching variables -
// [main, secondary] = [secondary, main];
// console.log(main, secondary);

// const [firstOrder, secondOrder] = restaurant.order(2, 1);

// let nested = [2, 4, [5, 6]];
// let [firstItem, , [lastFirst, lastLasts]] = nested;

// console.log(lastLasts);

// default values -

// let [p, q, r = 40] = [10, 12];
// console.log(p, q, r);

// let numbers = [10, 20, 30, 40];

// const numberFunction = function ([a, , , b]) {
//   console.log(a, b);
// };

// numberFunction(numbers);

// ? DESTRUCTURING OBJECTS -

// const days = ["sun", "mon", "tues", "wed", "thrus", "fri", "sat"];

// const openHourData = {
// 	[days[5]]: {
// 		open: 12,
// 		close: 22,
// 	},

// 	[days[6]]: {
// 		open: 10,
// 		close: 20,
// 	},

// 	[days[1]]: {
// 		open: 10,
// 		close: 20,
// 	},
// };

// const restaurant = {
// 	name: "Classico",
// 	location: "Rome, Italy",
// 	categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
// 	mainMenu: ["Pizza", "Pasta", "Risotto"],
// 	startMenu: ["Burger", "Sandwich", "Chicken"],

// 	order(starter, main) {
// 		return [this.startMenu[starter], this.mainMenu[main]];
// 	},

// 	orderDelivery({ startIndex, mainIndex, time, address }) {
// 		console.log(
// 			`Order received ${this.startMenu[startIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
// 		);
// 	},

// ? Enhanced Object Literals -
// 	openHourData,
// };

// ? OPTIONAL CHAINING (?.) -

// console.log(restaurant.openHourData?.mon?.open);

// for (let day of days) {
// 	const open = restaurant.openHourData[day]?.open;
// 	open && console.log(`On ${day}, we open at ${open}`);
// }

// - Function
// console.log(restaurant.order?.(1, 2)) ?? console.log("Method doesn't exist!");

// - Arrays
// const user = [
// 	{
// 		id: "0001",
// 		roll: 40,
// 		college: "XYZ",
// 	},
// ];

// console.log(user[1]?.roll ?? "Doesn't exist!");

// ? LOOPING OBJECTS -

// Property Names:

// const properties = Object.keys(openHourData);
// console.log(properties);

// let openStar = `We are open on ${properties.length} days: `;

// for (let day of properties) {
// 	openStar += `${day}, `;
// }

// console.log(openStar);

// Property Values:

// const values = Object.values(openHourData);
// console.log(values);

// const entries = Object.entries(openHourData);
// console.log(entries);

// for (const [day, { open, close }] of entries) {
// 	console.log(`On ${day}day, we open at ${open}, and close at ${close}.`);
// }

// const recipent01 = {
// 	time: 23,
// 	address: "Rome, Italy",
// 	recipent: "Jonas",
// 	mainIndex: 2,
// 	startIndex: 1,
// };

// restaurant.orderDelivery(recipent01);

// const { name, openingHours, categories } = restaurant;

// const {
// 	name: restaurantName,
// 	openingHours: hours,
// 	categories: tags,
// } = restaurant;

// console.log(tags);

// const {
// 	fri: { open, close },
// } = hours;
// console.log(open, close);

// Default values -
// const { menu = ["Roll", "Sushi"], startMenu: starter = [] } = restaurant;
// console.log(starter);

// Switching variables -
// let a = 10;
// let b = 12;

// const numberObj = { a: 20, b: 30, c: 40 };

// ({ a, b } = numberObj);
// console.log(a);

// ? SPREAD OPERATOR - UNPACK

// const list = [40, 50, 60];
// for (let number in list) {
// 	console.log(list[number]);
// }

// const newList = [10, 20, ...list];
// console.log(newList);

// console.log(...newList);

// const restaurant = {
// 	name: "Classico",
// 	location: "Rome, Italy",
// 	categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
// 	mainMenu: ["Pizza", "Pasta", "Risotto"],
// 	startMenu: ["Burger", "Sandwich", "Chicken"],

// 	order: function (starter, main) {
// 		return [this.startMenu[starter], this.mainMenu[main]];
// 	},

// 	orderPasta: function (ing1, ing2, ing3) {
// 		console.log(
// 			`Here is your pasta including with ${ing1}, ${ing2}, and ${ing3}!`
// 		);
// 	},
// };

// const newMenu = ["Noddles", ...restaurant.mainMenu, "Sushi"];
// console.log(newMenu);

// Copy array -
// const menuCopy = [...restaurant.mainMenu];

// const menu = [...restaurant.mainMenu, ...restaurant.startMenu];

// console.log(menu);

// Iteralbes: arrays, maps, sets, string, not object

// const stringName = "Peterson";
// const letters = [...stringName, "S."];
// console.log(letters);

// const indgredients = [
// 	prompt("let's make pasta! Ingredient 1?"),
// 	prompt("Ingredient 2?"),
// 	prompt("Ingredient 3?"),
// ];

// console.log(...indgredients);
// restaurant.orderPasta (...indgredients)

// Objects -

// const newRestaurant = {
// 	ownerName: "Williamson",
// 	investorName: "Melon",
// 	...restaurant,
// };

// console.log(newRestaurant);

// const restaurantCopy = {...restaurant}
// console.log(restaurantCopy);

// ? REST OPERATOR - PACK

// const listNum = [1, 2, ...[3, 4]];
// console.log(listNum);

// const [a, b, ...rest] = [1, 2, 3, 4, 5];
// console.log(rest);

// const restaurant = {
// 	name: "Classico",
// 	location: "Rome, Italy",
// 	categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
// 	mainMenu: ["Pizza", "Pasta", "Risotto"],
// 	startMenu: ["Burger", "Sandwich", "Chicken"],
// 	openingHours: {
// 		thrus: {
// 			open: 12,
// 			close: 22,
// 		},

// 		fri: {
// 			open: 10,
// 			close: 20,
// 		},

// 		sat: {
// 			open: 0,
// 			close: 24,
// 		},
// 	},

// 	orderPizza: function (mainIng, ...otherIngs) {
// 		console.log(mainIng);
// 		console.log(...otherIngs);
// 	},
// };

// Arrays -

// const [pizza, , risotto, ...remainFoods] = [
// 	...restaurant.mainMenu,
// 	...restaurant.startMenu,
// ];

// console.log(remainFoods, pizza);

// Objects -

// const { thrus, ...weekend } = restaurant.openingHours;
// console.log(weekend);

// Function -

// const add = function (...numbers) {
// 	console.log(numbers);
// 	let sum = 0;
// 	for (let index in numbers) {
// 		sum += numbers[index];
// 	}
// 	console.log(`Total = ${sum}`);
// };

// add(2, 3, 4, 10);
// add(2, 3);

// restaurant.orderPizza("mushroom", "cheese", "chicken", "prawn", "spinach");

// ? SHORT CIRCUITING (&& and ||) -

// - Accept the first truthy value ||

// console.log(2 || "simple");
// console.log("" || "Truthy Value");
// console.log(true || undefined);
// console.log(null || false);

// restaurant.numGuest = 0;
// console.log(restaurant.numGuest || 10);

// - Accept the first falsy value &&

// console.log(0 && "Jonas");
// console.log(7 && "Falsy");

// if (restaurant.orderPizza) {
// }

// restaurant.orderPizza && restaurant.orderPizza("mushroom", "spinach");

// ? NULLISH COALESCING OPERATOR -

// accept truthy values
// - Nullish: null and undefined (not 0 or "")

// 0 / '' - true
// null / undefined = false

// const guest = restaurant.numGuest ?? 10;
// console.log(guest);

// ? LOGICAL ASSIGNMENT OPERATOR -

// const rest1 = {
// 	owner: "Jacky",
// 	numGuest: 0,
// };

// const rest2 = {
// 	numGuest: 10,
// 	location: "Norway",
// };

// rest1.location = rest2.location || "Germany";
// rest2.owner ||= "Addams";
// rest1.numGuest ||= 20;

// console.log(rest2);
// console.log(rest1);

// rest2.location &&= "Italy";
// rest1.location &&= "Germany";

// console.log(rest2);
// console.log(rest1);

// ? SET -

// const orderSet = new Set(["Pasta", "Pizza", "Burger", "Pasta"]);

// console.log(orderSet);
// console.log(orderSet.size);
// console.log(orderSet.has("Pasta"));
// orderSet.add("Garlic Bread");

// console.log(orderSet);

// orderSet.delete("Pizza");
// console.log(orderSet);

// for (let order of orderSet) console.log(order);

// Example -

// const staff = ["Waiter", "Chef", "Waiter", "Manager", "Chef", "Waiter"];

// const staffUnique = [...new Set(staff)]

// console.log(staffUnique);

// ? MAP -

// const fruits = new Map();

// fruits.set("apples", 200);
// fruits.set("oranges", 100);
// fruits.set("bananas", 500);

// fruits.set("Pear", 120).set("Pineapples", 1000).set("honey", 400);

// console.log(fruits.get("Pear"));

// const hotel = new Map([
// 	[true, "We are open"],
// 	[false, "We are closed"],
// 	["open", 10],
// 	["close", 23],
// ]);

// const time = 11;

// console.log(hotel.get(hotel.get("open") <= time <= hotel.get("close")));

// console.log(hotel.size);

// fruits.delete("Pear");
// console.log(fruits);

// console.log(fruits.has("apples"));

// for (const [fruit, number] of fruits.entries()) {
// 	console.log(fruit, number);
// }

// const question = new Map([
// 	["question", "What is the best programming language in the world?"],
// 	[1, "Python"],
// 	[2, "Java"],
// 	[3, "Swift"],
// 	["correct", 1],
// 	[true, "Correct Guess 🎉"],
// 	[false, "Try again!"],
// ]);

// let playing = true;
// do {
// 	const user = Number(
// 		prompt(`${question.get("question")}
// 1: ${question.get(1)}
// 2: ${question.get(2)}
// 3: ${question.get(3)}`)
// 	);
// 	if (user === question.get("correct")) {
// 		console.log(playing);
// 		playing = false;
// 	} else {
// 		alert(question.get(false));
// 	}
// } while (playing);

// const universityInfo = {
// 	schoolName: "Manitoba",
// 	students: 400,
// 	location: "Canada",
// };

// const uni = new Map(Object.entries(universityInfo));

// console.log(uni);

// for (const [key, value] of question) {
// 	typeof key === "number" ? console.log(key, value) : "";
// }

// ? STRING (METHODS) -

// const airplane = "TAP Air Portugal";
// const plane = "A320";

// Index method

// console.log(plane.indexOf(2));
// console.log(airplane.lastIndexOf("r"));
// console.log(airplane.indexOf("Air"));

// Slice method

// console.log(airplane.slice(4));
// console.log(airplane.slice(0, airplane.indexOf(" ")));
// console.log(airplane.slice(airplane.lastIndexOf(" ") + 1));

// console.log(airplane.slice(0, -3));
// console.log(plane.slice(-1));

// const checkMiddleSeat = function (seat) {
// 	// B and E are middle seats

// 	const lastChar = seat.slice(-1);
// 	console.log(
// 		`${seat} is a ${
// 			lastChar === "B" || lastChar === "E" ? "middle 😊" : "side 😎"
// 		} seat!`
// 	);
// };

// checkMiddleSeat("11B");
// checkMiddleSeat("11C");
// checkMiddleSeat("11A");
// checkMiddleSeat("11E");

// Lower / Upper Case method

// console.log(airplane.toUpperCase());
// console.log(airplane.toLowerCase());

// const passenger = "jONAs";
// const passengerFormatted =
// 	passenger[0].toUpperCase() + passenger.slice(1).toLowerCase();

// console.log(passengerFormatted);

// Trim method

// const email = "adobe@gmail.com";
// const loginEmail = " Adobe@Gmail.com \n";
// const trimmed = loginEmail.trim().toLowerCase();

// console.log(trimmed);

// Replace method

// const priceUS = "288.97$";
// const priceEU = priceUS.replace("$", "Є").replace(".", ",");
// console.log(priceEU);

// const anoucement = "All passengers come to boarding door 23. Boarding door 23!";

// console.log(anoucement.replaceAll("door", "gate"));

// Boolean method

// const planeNum = "A405";
// console.log(planeNum.includes("7"));
// console.log(planeNum.startsWith("A"));
// console.log(planeNum.endsWith("5"));

// Split method

// const line = "a+very+nice+language";
// const title = "Virat Kholi";

// console.log(line.split("+"));
// console.log(title.split(" "));

// // Join method

// const data = ["Mr.", "India", "@", "2023"];
// console.log(data.join("").toUpperCase());

// const capitalize = function (name) {
// 	const names = name.split(" ");
// 	let newName = [];
// 	for (const n of names) {
// 		// method - 1
// 		// newName.push(n[0].toUpperCase() + n.slice(1));

// 		// method - 2
// 		newName.push(n.replace(n[0], n[0].toUpperCase()));
// 	}
// 	console.log(newName.join(" "));
// };

// capitalize("sunil kumar malo");

// Padding method

// const message = "Go to the park";
// console.log(message.padStart(20, "➡ ").padEnd(27, " ⬅"));

// Repeat method

// const weatherMessage = "Cloudy Weather...";
// console.log(weatherMessage.repeat(3).toUpperCase());

// const planeLines = function (n) {
// 	console.log(`There are ${n} planes in the line ${"✈ ".repeat(n)}!`);
// };

// planeLines(3);

// const text = "Welcome to new world";

// console.log(text.padEnd(25) + ">".repeat(3));

// ? A CLOSER LOOK AT FUNCTION -

// ? DEFAULT VALUE

// const bookings = [];

// const createBooking = function (
// 	flightNum,
// 	passengersNum = 1,
// 	price = 199 * passengersNum
// ) {
// 	const booking = {
// 		flightNum,
// 		passengersNum,
// 		price,
// 	};
// 	console.log(booking);
// 	bookings.push(booking);
// };

// createBooking("LH145", 2);
// createBooking("LH123", 10);

// ? PASSING ARGUMENTS -

// const flightNum = "LH258";
// const personData = {
// 	fullName: "Dave Gray",
// 	passport: 258369,
// };

// const checkIn = function (flight, person) {
// 	flight = "LH999";
// 	person.fullName = "Mr." + person.fullName;

// 	if (person.passport == 258369) {
// 		alert("Checked in");
// 	} else {
// 		alert("Wrong passport!");
// 	}
// };

// checkIn(flightNum, personData);
// console.log(flightNum);
// console.log(personData);

// const newPassport = function (person) {
// 	person.passport = Math.trunc(Math.random() * 1000000);
// };

// newPassport(personData);
// console.log(personData);

// ? FIRST-CLASS AND HIGHER ORDER FUNCTION

// // First-class function
// const oneWord = function (str) {
// 	return str.replace(/ /g, "").toLowerCase();
// };

// const upperFirstWord = function (str) {
// 	const [first, ...others] = str.split(" ");
// 	return [first.toUpperCase(), ...others].join(" ");
// };

// // Higher-order function:
// const transformer = function (str, fn) {
// 	// fn is a callback function
// 	console.log(`Original string: ${str}`);
// 	console.log(`Transformed string: ${fn(str)}`);
// 	console.log(`Transformed by: ${fn.name}`);
// };

// transformer("JavaScript is the best!", upperFirstWord);
// transformer("JavaScript is the best!", oneWord);

// // first-class function - lower level of abstraction
// const cutting = (fruit) => fruit * 4;

// const fruits = new Map([
// 	["apples", 10],
// 	["oranges", 5],
// 	["bananas", 7],
// ]);

// for (const [fruit, number] of fruits) {
// 	// higher-order function - higher level of abstraction

// 	const fruitPieces = function (fruit, fn) {
// 		console.log(`The number of ${fruit.slice(0, -1)} pieces is ${fn(number)}!`);
// 	};

// 	fruitPieces(fruit, cutting);
// }

// ? FUNCTIONS RETURNING FUNCTIONS -

// const greet = function (greeting) {
// 	return function (name) {
// 		console.log(`${greeting}, ${name}!`);
// 	};
// };

// const greeter = greet("Good Morning");
// greeter("David");

// greet("Good Night")("Melon");

// const welcome = (question) => (fullName) =>
// 	console.log(`${question}, ${fullName}`);

// welcome("Welcome to our University")("Dave Gray");

// ? CALL / APPLY / BIND METHODS -

// const airLine = {
// 	airName: "Qatar AirLine",
// 	booking: [],
// 	iataCode: "LH",
// 	book(flightNum, name) {
// 		console.log(
// 			`${name} booked a seat on ${this.airName} flight ${this.iataCode}${flightNum}.`
// 		);
// 		this.booking.push({ flight: `${this.iataCode}${flightNum}`, name });
// 	},
// };

// airLine.book(239, "Tendulkar");
// console.log(airLine);

// const airIndia = {
// 	airName: "India AirLine",
// 	iataCode: "IA",
// 	booking: [],
// };

// // Call Method:
// const book = airLine.book;
// book.call(airIndia, 234, "Virat Kholi");

// console.log(airIndia);

// const swiss = {
// 	airName: "Swiss AirLine",
// 	booking: [],
// 	iataCode: "SW",
// };

// book.call(swiss, 288, "Chris Pell");
// book.call(swiss, 369, "Jacky Addams");

// console.log(swiss);

// // Apply Method:
// const john = [897, "John Addams"];
// book.apply(airIndia, john);

// console.log(airIndia);

// // Modern Way:
// book.call(swiss, ...john);

// // Bind Method

// const airIndiaBind = book.bind(airIndia);
// const swissBind = book.bind(swiss);

// airIndiaBind(264, "Rabindra Singh");
// console.log(airIndia);

// swissBind(265, "Cristiano");
// console.log(swiss);

// const airIndiaBind23 = book.bind(airIndia, 23);
// airIndiaBind23("Cook Gray");

// console.log(airIndia);

// // Event Listener -

// airLine.planes = 300;
// airLine.buyPlanes = function () {
// 	console.log(this);
// 	this.planes++;
// 	console.log(this.planes);
// };

// console.log(airLine);

// document
// 	.querySelector(".btn")
// 	.addEventListener("click", airLine.buyPlanes.bind(airLine));

// // Partial Application -

// const addTax = (rate, value) => value + value * rate;
// const addVat = addTax.bind(null, 0.23);

// console.log(addVat(200));
// console.log(addVat(500));

// const calcTax =
// 	(rate = 0.23) =>
// 	(value) =>
// 		value + value * rate;

// const calcVat = calcTax()(50);
// console.log(calcVat);

// ? IMMEDIATELY INVOKED FUNCTION EXPRESSION -

// (function () {
// 	console.log("This function will occur once.");
// 	const isPrivate = 23;
// 	console.log(isPrivate);
// })();

// (() => console.log("This function will run for one time!"))();

// ? CLOSURES -

// const secureBooking = function (passenger = 0) {
// 	let passengerCount = passenger;

// 	return function () {
// 		passengerCount += 5;
// 		console.log(`${passengerCount} passengers`);
// 	};
// };

// const booker = secureBooking(10);

// booker();
// booker();
// booker();

// // Example 01
// let function02;

// const function01 = function () {
// 	const num = 10;
// 	function02 = function () {
// 		console.log(num * 2);
// 	};
// };

// const function03 = function () {
// 	const num01 = 12;
// 	function02 = function () {
// 		console.log(num01 * 2);
// 	};
// };

// function01();
// function02();
// console.dir(function02);

// // Example 02
// const boardPassengers = function (n, wait) {
// 	const perGroup = n / 3;

// 	setTimeout(function () {
// 		console.log(
// 			`We are now boarding all ${n} passengers. \nThere are 3 groups, each with ${perGroup} passengers.`
// 		);
// 	}, wait * 1000);

// 	console.log(`Will start boarding in ${wait} seconds ......`);
// };

// const perGroup = 1000;
// boardPassengers(180, 3);

// function03();
// function02();

// ? WORKING WITH ARRAYS -

// ? MAP METHOD -

// const nums = [100, 200, 300, 400];
// const numsUSD = nums.map(num => Math.round(num * 1.1));

// console.log(numsUSD);

// const newArr = [];
// nums.forEach(number => {
//   newArr.push(Math.round(number * 1.1 + 1));
// });
// console.log(newArr);

// const newArr02 = nums.map((num, index) => index + num);
// console.log(newArr02);

// ? FILTER METHOD -

// const ages = [32, 33, 16, 40, 15];
// const result = ages.filter(function (age) {
//   return age > 16;
// });

// console.log(result);

// const ageUnder = [];
// ages.forEach(function (age) {
//   if (age < 18) {
//     ageUnder.push(age);
//   }
// });

// console.log(ageUnder);

// const movements = [200, -200, 340, -300, -20, 50, 400, -460];

// const withdrawal = movements.filter(money => money < 0);

// console.log(withdrawal);

// ? REDUCE METHOD -

// const balance = movements.reduce(function (total, value, index) {
//   console.log(`Iteration ${index}: ${total}`);
//   return total + value;
// }, 0);

// console.log(balance);

// const maximum = movements.reduce(function (max, value) {
//   if (max > value) return max;
//   else return value;
// }, movements[0]);

// console.log(maximum);

// ? CHAINING METHODS -

// const balanceTotal = movements
//   .filter(money => money > 0)
//   .map(money => money * 1.3)
//   .reduce((total, money) => total + money);

// console.log(balanceTotal);

// ? FIND METHOD -

// const movements02 = [200, -200, 340, -300, -20, 50, 400, -460];
// const selection = movements02.find(money => money < 0);
// console.log(selection);

// for (const mov of movements) {
//   if (mov < 0) {
//     console.log(mov);
//     break;
//   }
// }

// ? SOME / EVERY -

// const movements = [200, -200, 340, -300, -20, 50, 400, -460];
// const anyDeposits = movements.some(money => money > 500);
// console.log(anyDeposits);

// const checkingEvery = movements.every(money => money >= 0);
// console.log(checkingEvery);

// ? FLAT / FLATMAP -

// const arrs = [
//   [-100, 200, -300],
//   [-400, 500, -600],
//   [-700, 800],
// ];
// console.log(arrs.flat());

// const arrDeep = [[1, 2, [3, 4, [5, 6]]], 7, 8];
// console.log(arrDeep.flat(3));

// const newArrs = arrs.flat().flatMap(num => num * 2);
// console.log(newArrs);

// ? SORTING -

// const owners = ["Jonas", "Addams", "Martha"];
// console.log(owners.sort());

// console.log(newArrs.sort());

// Ascending
// newArrs.sort((a, b) => {
//   if (a > b) return 1;
//   if (b > a) return -1;
// });

// console.log(newArrs);

// Descending
// newArrs.sort((a, b) => {
//   if (a > b) return -1;
//   if (b > a) return 1;
// });

// console.log(newArrs);

// ? CREATING AND FILLING ARRAYS -

// const newArray = new Array(7);
// newArray.fill(1, 3, newArray.length);

// console.log(newArray);

// const arr = [1, 2, 3, 4, 5, 6, 7, 8];
// const arr02 = Array.from({ length: 7 }, () => 1);
// console.log(arr02);

// const naturalNum = Array.from({ length: 8 }, (_, index) => 1 + index);
// console.log(naturalNum);

// ? NUMBERS -

// console.log(Number(true) + 10);

// console.log(Number.parseInt("30px", 10));
// console.log(Number.parseFloat("2.5RAM"));
// console.log(Number.parseInt("23GB"));

// console.log(Number.isNaN(23));
// console.log(Number.isNaN(+"hello"));

// Checking if value is number

// console.log(Number.isFinite(23 / 0));
// console.log(Number.isFinite(23));
// console.log(Number.isFinite(+"23"));
// console.log(Number.isFinite("string"));

// console.log(Number.isInteger(2.5));
// console.log(Number.isInteger(23));

// Rounding decimals
// console.log((2.7).toFixed(0));
// console.log((2.789).toFixed(2));
// console.log((2.369).toFixed(2));

// console.log(Number(2.5).toString());

// for (let index = 1; index <= 20; index++) {
//   if (index % 2 !== 0) console.log(index);
// }

// ? BIGINT -

// const huge = 4556412454487456321545456n;
// console.log(huge * BigInt(40));

// ? MATH -

// console.log(Math.abs(-15));
// console.log(Math.sqrt(36));
// console.log(Math.pow(2, 3));
// console.log(Math.floor(Math.random() * 6) + 1);
// console.log(Math.ceil(Math.random() * 10));

// const numbers = [1, 2, 3];
// console.log(Math.max(...numbers));
// console.log(Math.min(...numbers));

// const radius = 5;
// const circleArea = Math.round(Math.PI * Math.pow(radius, 2));
// console.log(circleArea);

// const randomNum = Math.floor(Math.random() * 6 + 1);
// console.log(randomNum);

// const randomInt = (min, max) =>
//   Math.trunc(Math.random() * (max - min) + 1) + min;
// console.log(randomInt(10, 20));

// console.log(Math.trunc(2.9));
// console.log(Math.round(9.6));
// console.log(Math.round(6.4));
// console.log(Math.ceil(7.2));
// console.log(Math.floor(5.9));

// console.log(Math.trunc(-2.8));
// console.log(Math.floor(-24.5));

// ? NUMERIC SERARATE -

// const diameterSolar = 27_000_000;
// const transferMoney = 1_500;

// console.log(diameterSolar, transferMoney);

// ? DATE -

const now = new Date();

// console.log(Date.now());
// console.log(now.toDateString());
// console.log(now.toISOString());

// console.log(new Date("Dec 15 2023"));
// console.log(new Date(2022, 11, 7));

const future = new Date(2037, 11, 10, 23, 58, 45);
// console.log(future);
// console.log(future.getFullYear());
// console.log(future.getMonth());
// console.log(future.getDate());
// console.log(future.getHours());
// console.log(future.getTime());
// console.log(new Date(2144080725000));

future.setFullYear(2022);
console.log(future.toDateString());
console.log(+future);

const daysPassed = (date1, date2) =>
  Math.abs(date1 - date2) / (1000 * 60 * 60 * 24);

const day1 = daysPassed(new Date(2037, 3, 14), new Date(2037, 3, 24));

console.log(day1);

// ? INTERNATIONALIZING DATE AND NUMBERS -

const num = 38987412.23;
const numOpitons = {
  style: "currency",
  unit: "celsius",
  currency: "EUR",
};

console.log(new Intl.NumberFormat("en-US", numOpitons).format(num));
console.log(new Intl.NumberFormat("de-DE", numOpitons).format(num));

// ? WINDOW - SETTIMEOUR / SETTIMEINTERVAL

const ingredients = ["olives", "spinach"];
const pizzaTimer = setTimeout(
  (ing1, ing2) => {
    console.log(`Pizza with ${ing1} and ${ing2}.`);
  },
  3000,
  ...ingredients
);

if (ingredients.includes("spinach")) clearTimeout(pizzaTimer);

setInterval(function () {
  const now = new Date();
  const hour = now.getHours();
  const minute = now.getMinutes();
  const second = now.getSeconds();
}, 1000);

setTimeout(() => {
  console.log("Downloading picture");
}, 1000);
