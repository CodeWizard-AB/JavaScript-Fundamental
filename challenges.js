// // * FUNDAMENTAL 01:

// // ? CHALLENGE 01

// const marksWeight = 78;
// const marksHeight = 1.69;
// const marksBMI = Math.round(marksWeight / marksHeight ** 2);

// const johnWeight = 92;
// const johnHeight = 1.95;
// const johnBMI = Math.round(johnWeight / johnHeight ** 2);

// const comparisonBMI = johnBMI < marksBMI;

// // console.log(marksBMI, johnBMI, comparisonBMI);

// // ? CHALLENGE 02

// if (johnBMI > marksBMI) {
// 	console.log(`John's BMI(${johnBMI}) is higher than Mark's BMI(${marksBMI})!`);
// } else {
// 	console.log(`Mark's BMI(${marksBMI}) is higher than John's BMI(${johnBMI})!`);
// }

// // ? CHALLENGE 03

// const scoreDolphins = [96, 108, 89];
// const scoreKoalas = [88, 91, 110];
// const averageDolphins = Math.round(
// 	(scoreDolphins[0] + scoreDolphins[1] + scoreDolphins[2]) / 3
// );
// const averageKoalas = Math.round(
// 	(scoreKoalas[0] + scoreKoalas[1] + scoreKoalas[2]) / 3
// );

// if (averageDolphins && averageKoalas >= 80) {
// 	console.log(`Dolphin's score = ${averageDolphins}
// Koalas's score = ${averageKoalas}`);
// 	if (averageDolphins === averageKoalas) {
// 		console.log("Match Draw!");
// 	} else if (averageDolphins > averageKoalas) {
// 		console.log(`Dolphins win the game 🏆`);
// 	} else {
// 		console.log("Koalas win the game 🏆");
// 	}
// } else {
// 	console.log("Don't have the minimum score of 100!");
// }

// // ? CHALLENGE 04

// const bill = 275;
// const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
// const total = bill + tip;

// console.log(
// 	`The bill was ${bill}, the tip was ${tip}, and the total value ${total}.`
// );

// // * FUNDAMENTAL 02:

// // ? CHALLENGE 01

// const calcAverage = (score1, score2, score3) =>
// 	Math.round((score1 + score2 + score3) / 3);

// function checkWinner(dolphinsAverage, koalasAverage) {
// 	if (dolphinsAverage === koalasAverage) {
// 		return "Match draw";
// 	} else if (dolphinsAverage >= 2 * koalasAverage) {
// 		return `Dolphins win (${dolphinsAverage} vs ${koalasAverage})`;
// 	} else if (koalasAverage >= 2 * dolphinsAverage) {
// 		return `Koalas win (${koalasAverage} vs ${dolphinsAverage})`;
// 	} else {
// 		return "No team wins!";
// 	}
// }

// let dolphinsAverage = calcAverage(44, 23, 71);
// let koalasAverage = calcAverage(65, 1002, 49);
// const winner = checkWinner(dolphinsAverage, koalasAverage);

// console.log(winner);

// // ? CHALLENGE 02

// const bills = [100, 555, 444];
// const calcTip = (bill) =>
// 	bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
// const tips = [calcTip(bills[0]), calcAverage(bills[1]), calcTip(bills[2])];

// console.log(bills[0] + tips[0]);

// // ? CHALLENGE 03

// const john = {
// 	fullName: "John Smith",
// 	mass: 92,
// 	height: 1.95,
// 	BMI: function () {
// 		return Math.round(this.mass / this.height ** 2);
// 	},
// };

// const mark = {
// 	fullName: "Mark Miller",
// 	mass: 78,
// 	height: 1.69,
// 	BMI: function () {
// 		return Math.round(this.mass / this.height ** 2);
// 	},
// };

// const winnerBMI =
// 	mark.BMI() > john.BMI()
// 		? `${mark.fullName}(${mark.BMI()}) is higher than ${
// 				john.fullName
// 		  }(${john.BMI()}).`
// 		: `${john.fullName}(${john.BMI()}) is higher than ${
// 				mark.fullName
// 		  }(${mark.BMI()}).`;

// console.log(winnerBMI);

// // ? CHALLENGE 04

// const billCost = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
// const totalAmount = [];

// for (let bill = 0; bill < billCost.length; bill++) {
// 	const calculation = (bill) =>
// 		bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

// 	totalAmount.push(billCost[bill] + calculation(billCost[bill]));
// }

// console.log(totalAmount);

// // ? BONUS

// function calAverage(list) {
// 	let sum = 0;

// 	for (let index = 0; index < list.length; index++) {
// 		sum += list[index];
// 	}

// 	const average = sum / list.length;
// 	console.log(`Average value is ${average}.`);
// }

// calAverage(totalAmount);

// // * DEVELOPER SKILLS

// // ? CHALLENGE 01

// const calcTemp = function (temp) {
// 	let textstring = "";

// 	for (let i = 0; i < temp.length; i++) {
// 		if (typeof temp[i] === "number")
// 			textstring += `... ${temp[i]}°C in ${i + 1} days `;
// 	}

// 	console.log(textstring);
// };

// let data1 = [17, 21, 23];
// let data2 = [12, 5, -5, 0, 4];

// calcTemp(data2);

// // * DATA STRUCTURES / MODERN OPERATORS:

// // ? CHALLENGE 01

// const game = {
// 	team1: "Bayern Munich",
// 	team2: "Borrussia Dortmund",
// 	players: [
// 		[
// 			"Neuer",
// 			"Pavard",
// 			"Martinez",
// 			"Alaba",
// 			"Davies",
// 			"Kimmich",
// 			"Goretzka",
// 			"Coman",
// 			"Muller",
// 			"Gnarby",
// 			"Lewandowski",
// 		],
// 		[
// 			"Burki",
// 			"Schulz",
// 			"Hummels",
// 			"Akanji",
// 			"Hakimi",
// 			"Weigl",
// 			"Witsel",
// 			"Hazard",
// 			"Brandt",
// 			"Sancho",
// 			"Gotze",
// 		],
// 	],
// 	score: "4:0",
// 	scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
// 	date: "Nov 9th, 2037",
// 	odds: {
// 		team1: 1.33,
// 		x: 3.25,
// 		team2: 6.5,
// 	},
// 	printGoals: function (...players) {
// 		let sum = 0;
// 		for (let index in players) {
// 			sum += 1;
// 			console.log(players[index], sum);
// 		}
// 		console.log(`${sum} goals were scored.`);
// 	},

// 	// ? Challlenge 02

// 	calcOdds() {
// 		let sum = 0;
// 		for (let value of Object.values(this.odds)) sum += value;
// 		console.log(Math.round(sum / 3));
// 	},
// };

// const [players1, players2] = game.players;
// const player1Final = [...players1, "Thiago", "Coutinho", "Perisic"];
// const [gk1, ...fieldPlayers1] = players1;
// const [gk2, ...fieldPlayers2] = players2;
// const allPlayers = [...players1, ...players2];
// const {
// 	odds: { team1, x: draw, team2 },
// } = game;

// game.printGoals("Davies", "Muller", "Lewandowski", "Kimmich");

// team1 < team2 && console.log("Team 1 is more likely to win!");
// team2 < team1 && console.log("Team 2 is more likely to win!");

// // ? CHALLENGE 02

// for (let [goal, player] of Object.entries(game.scored)) {
// 	console.log(`Goal ${Number(goal) + 1}: ${player}`);
// }

// game.calcOdds();

// for (let [value, score] of Object.entries(game.odds)) {
// 	const player = game[value];
// 	const playerName = player ? `victory ${player}` : "draw";
// 	console.log(`Odd of ${playerName}: ${score}`);
// }

// const scorers = {};

// for (let player of Object.values(game.scored))
// 	scorers[player] = scorers[player] + 1 || 1;

// console.log(scorers);

// // ? CHALLENGE 03

// const gameEvents = new Map([
// 	[17, "⚽ GOAL"],
// 	[36, "� Substitution"],
// 	[47, "⚽ GOAL"],
// 	[61, "� Substitution"],
// 	[64, "� Yellow card"],
// 	[69, "� Red card"],
// 	[70, "� Substitution"],
// 	[72, "� Substitution"],
// 	[76, "⚽ GOAL"],
// 	[80, "⚽ GOAL"],
// 	[92, "� Yellow card"],
// ]);

// const eventSet = [...new Set(gameEvents.values())];
// gameEvents.delete(64);

// console.log(eventSet);
// console.log(gameEvents);

// console.log(`An event happened, on
// average, every ${90 / gameEvents.size} minutes.`);

// for (const [minute, event] of gameEvents) {
// 	console.log(`${minute <= 45 ? "First" : "Second"} half: ${event}`);
// }

// // ? CHALLENGE 04

// document.querySelector(".button").addEventListener("click", function () {
// 	const text = document.querySelector("textarea").value;
// 	const textWords = text.split("\n");

// 	for (const [index, word] of textWords.entries()) {
// 		let [first, second] = word.toLowerCase().trim().split("_");
// 		const finalWord =
// 			first + second.replace(second[0], second[0].toUpperCase());
// 		console.log(finalWord.padEnd(25) + '💚'.repeat(index + 1));
// 	}
// });

// // * A CLOSER LOOK AT FUNCTIONS:

// // ? CHALLENGE 01

// const poll = {
// 	question: "What is your favourite programming language?",
// 	options: ["0: JavaScript", "1: Python", "2: Rust", "3: C++"],
// 	answers: new Array(4).fill(0),

// 	registerNewAnswer() {
// 		const quest = `${this.question}\n${this.options.join(
// 			"\n"
// 		)}(Write option number)`;
// 		const user = Number(prompt(quest));
// 		user < this.answers.length && this.answers[user]++;
// 		this.displayResults("string");
// 		this.displayResults();
// 	},

// 	displayResults(type = "array") {
// 		type === "string"
// 			? console.log(`Poll results are ${this.answers.join(", ")}`)
// 			: console.log(this.answers);
// 	},
// };

// document
// 	.querySelector(".btn")
// 	.addEventListener("click", poll.registerNewAnswer.bind(poll));

// poll.displayResults.call({ answers: [5, 3, 2] });
// poll.displayResults.call({ answers: [15, 23, 27, 10] });

// // ? CHALLENGE 02

// (function () {
// 	const header = document.querySelector("h1");
// 	header.style.color = "red";
// 	let colorNum = 0;
// 	const colorList = ["blue", "pink", "orange", "white", "black"];
// 	document.body.addEventListener("click", function () {
// 		header.style.color = colorList[colorNum];
// 		if (colorNum < 4) {
// 			colorNum++;
// 		} else {
// 			colorNum = 0;
// 		}
// 	});
// })();

// * WORKING WITH ARRAYS:

// // ? CHALLENGE 01

// const juliaData = [3, 5, 2, 12, 7];
// const kateData = [4, 1, 15, 8, 3];

// const checkDogs = function (dogsJulia, dogsKate) {
//   const dogs = dogsKate.concat(dogsJulia.slice(1, -2));
//   dogs.forEach(function (dog, index) {
//     console.log(`Dog number ${index + 1} is an adult, and is ${dog} years old`);
//   });
// };

// checkDogs(juliaData, kateData);

// // ? CHALLENGE 02

// const data = [5, 2, 4, 1, 15, 8, 3];

// const calcAverageHumanAge = ages => {
//   const humanAges = ages.map(dogAge =>
//     dogAge > 2 ? dogAge * 2 : 16 + dogAge * 4
//   );

//   const adults = humanAges.filter(dogAge => {
//     if (dogAge >= 18) return dogAge;
//   });

//   const averageAgeDog =
//     adults.reduce((total, value) => total + value, 0) / adults.length;

//   console.log(Math.round(averageAgeDog));
// };

// calcAverageHumanAge(data);

// // ? CHALLENGE 02

// const calcAverageDogs = function (data) {
//   const average = data
//     .map(age => (age > 2 ? 16 + age * 4 : age * 2))
//     .filter(age => age >= 18)
//     .reduce((total, age, index, arr) => total + age / arr.length);
//   return average;
// };

// console.log(calcAverageDogs(data));

// ? CHALLENGE 04

// const dogs = [
//   { weight: 22, curFood: 250, owners: ["Alice", "Bob"] },
//   { weight: 8, curFood: 200, owners: ["Matilda"] },
//   { weight: 13, curFood: 275, owners: ["Sarah", "John"] },
//   { weight: 32, curFood: 340, owners: ["Michael"] },
// ];

// dogs.forEach(
//   dogObj => (dogObj.foodPortion = Math.trunc(dogObj.weight ** 0.75 * 28))
// );

// const dogFoodChecking = function (owner) {
//   const ownerCheck = dogs.find(({ owners }) => owners.includes(owner));
//   console.log(ownerCheck);
// };

// dogFoodChecking("Sarah");

// const ownersEatTooMuch = dogs
//   .filter(dog => dog.curFood > dog.foodPortion)
//   .flatMap(dog => dog.owners);
// console.log(ownersEatTooMuch);

// const ownersEatTooLittle = dogs
//   .filter(dog => dog.curFood < dog.foodPortion)
//   .flatMap(dog => dog.owners);
// console.log(ownersEatTooLittle);

// const anyDog = dogs.some(dogObj => dogObj.foodPortion === dogObj.curFood);
// console.log(anyDog);

// const anyDog02 = dogs.some(
//   dogObj =>
//     dogObj.curFood > dogObj.foodPortion * 0.9 &&
//     dogObj.curFood < dogObj.foodPortion
// );
// console.log(anyDog02);

// const dogsCopy = dogs.slice().sort((a, b) => a.foodPortion - b.foodPortion);
// console.log(dogsCopy);

// ? TIME CHALLENGE -

// setInterval(() => {
//   const now = new Date()
//   const hour = now.getHours()
//   const minute = now.getMinutes()
//   const second = now.getSeconds();
//   document.querySelector('.time').textContent = `${hour}:${minute}:${second}`
// }, 1000);

// ? ASYNCHRONOUS JS -

// const whereAmI = function (lat, lon) {
//   fetch(`https://geocode.xyz/${lat},${lon}?geoit=json`)
//     .then(response => {
//       if (!response.ok) {
//         throw new Error(`Problem with geocoding ${response.status}`);
//       }
//       return response.json();
//     })
//     .then(data => {
//       console.log(data);
//       console.log(`You are in ${data.city}`);
//     })
//     .catch(error => console.log(error.message));
// };

// whereAmI(19.037, 72.873);
