"use strict";

const buttons = document.querySelectorAll(".btn");

// console.log(buttons.length);

const mainHeading = document.querySelector(".js-header");
const heading = document.getElementById("heading");
const animateEl = document.querySelector("#animate");

let pos = 0;
animateEl.style.top = `${pos}px`;

const animation = () => {
  const animation = setInterval(() => {
    animateEl.style.top = `${pos}px`;
    animateEl.style.left = `${pos}px`;
    pos++;
    if (pos === 350) {
      clearInterval(animation);
    }
  }, 10);
};

document
  .querySelector("#button")
  .addEventListener("dblclick", animation.bind(this));

heading.style.color = "#eebefa";
mainHeading.style.fontFamily = "Inter";

document.querySelector(".btn-color").addEventListener("dblclick", function () {
  const random = (min, max) =>
    Math.floor(Math.random() * (max - min + 1) + min);
  const randomColor = () =>
    `rgb(${random(0, 255)}, ${random(0, 255)}, ${random(0, 255)})`;
  heading.style.color = randomColor();
});

// const message = document.createElement("p");
// document.forms["myForm"].after(message);
// document
//   .querySelector('input[type="submit"]')
//   .addEventListener("click", function (e) {
//     e.preventDefault();
//     const form = document.forms["myForm"];
//     const nameForm = form["fname"].value;
//     if (nameForm === "") {
//       message.innerHTML = "Not Valid";
//     } else {
//       message.innerHTML = "Valid";
//       console.log("valid");
//     }
//   });

setInterval(() => {
  const random = (min, max) =>
    Math.floor(Math.random() * (max - min + 1) + min);
  const randomColor = () =>
    `rgb(${random(0, 255)}, ${random(0, 255)}, ${random(0, 255)})`;
  mainHeading.style.color = randomColor();
}, 1000);

// console.log(document.body.childNodes[1]);
// console.log(mainHeading.firstChild.nodeValue);
// console.log(document.documentElement);
// console.log(document.body.firstChild.nodeName);

const newButton = document.createElement("button");
const node = document.createTextNode("Button 2");
newButton.appendChild(node);
const element = document.querySelector(".buttons");
const btnColor = document.querySelector(".btn-color");
// element.appendChild(newButton);
element.insertBefore(newButton, btnColor);

document.body.removeChild(document.querySelector("h2"));

const newHeading = document.createElement("h1");
const headingText = document.createTextNode("DOM FUNDAMENTALS");
newHeading.appendChild(headingText);
newHeading.setAttribute("id", "heading");

document.body.replaceChild(newHeading, heading);

const elements = document.getElementsByTagName("div");
// console.log(elements.namedItem("container"));

// for (let item = 0; item < elements.length; item++)
//   console.log(elements.item(item));

const cars = ["Saab", "Volvo", "BMW"];
document.querySelector(".demo").innerHTML = cars;
document.querySelector(".demo").style.fontFamily = "Roboto";

// console.log(cars[cars.length - 1]);
// cars.forEach(car => {
//   console.log(car);
// });

// for (let index = 0; index < cars.length; index++) console.log(cars[index]);
// for (const car of cars) console.log(car);
// for (const index in cars) console.log(cars[index]);

// cars.push("Toyota");
// console.log(cars.length);
// cars[cars.length] = "Corola";
// console.log(cars);

// const person = [];
// person["firstName"] = "John";
// person["lastName"] = "Doe";
// person["age"] = 46;

// cars.map(car => console.log(car));

// const numbers = new Array(40, 100, 160);
// const nums = new Array(5);

// for (const car in cars) nums[car] = cars[car];

// console.log(numbers, nums);
// console.log(typeof person);
// console.log(Array.isArray(person));
// console.log(cars instanceof Array);

const fruits = ["Banana", "Orange", "Apple", "Mango"];

console.log(fruits.toString());
console.log(fruits.join(" * "));

console.log(fruits.pop(), fruits);
console.log(fruits.push("Pineapple"), fruits);
console.log(fruits.shift(), fruits);
console.log(fruits.unshift("Pear"), fruits);

fruits[3] = "Kiwi";
console.log(fruits);

delete fruits[fruits.length - 1];
console.log(fruits);

fruits.splice(2, 0, "Lemon", "Pineapple");
console.log(fruits);

const newFruit = fruits.slice(1, 3);
console.log(newFruit);

fruits.pop();
fruits.sort();
console.log(fruits);

fruits.reverse();
console.log(fruits);

console.clear();

const numbers = [25, 100, 35, 15, 90];
numbers.sort((a, b) => a - b);
console.log(numbers);

numbers.sort((a, b) => b - a);
console.log(numbers);

numbers.sort(() => 0.5 - Math.random());
console.log(numbers);

console.log(Math.max.apply(null, numbers));

const carItems = [
  { type: "Volvo", year: 2016 },
  { type: "Saab", year: 2001 },
  { type: "BMW", year: 2010 },
];

carItems.sort((a, b) => a.year - b.year);
console.log(carItems);

cars.forEach((value, index, array) => {
  console.log(index, value, array);
});

const newNumbers = numbers.map(num => num / 5);
console.log(newNumbers);

const greaterNumbers = numbers.filter(num => num > 50);
console.log(greaterNumbers);

const addition = numbers.reduce((total, value) => {
  console.log(total);
  return total + value - 2;
});
console.log(addition);

const greaterEvery = numbers.every(num => num > 50);
console.log(greaterEvery);

const greaterSome = numbers.some(num => num > 50);
console.log(greaterSome);

const letters = Array.from("ABCDE");
console.log(letters);

for (let div of letters.entries()) console.log(div);
