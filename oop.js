"use strict";

class Player {
  #salary;
  #months;

  constructor(name, birthYear, salary, months) {
    this.player = name;
    this.birthYear = birthYear;
    this.#salary = salary;
    this.#months = months;
  }

  calcAge() {
    const diff_ms = Date.now() - new Date(this.birthYear).getTime();
    const age_dt = new Date(diff_ms);
    return Math.abs(age_dt.getUTCFullYear() - 1970);
  }

  calcSalary() {
    return (this.#months * this.#salary).toString();
  }
}

const addams = new Player("Addams", "1987-01-02", 50, 12);
console.log(addams.calcSalary());

class commonPlayer {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  getDetails() {
    return `${this.name} is ${this.age} years old.`;
  }
}

class Cricketer extends commonPlayer {
  #age;
  #name;
  constructor(name, age, skill) {
    super(name, age);
    this.skill = skill;
  }
}

class Footballer extends commonPlayer {
  constructor(name, age, goals) {
    super(name, age);
    this.goals = goals;
  }
}

const virat = new Cricketer("Virat", 31, "Batsman");
console.log(virat.getDetails());

const messi = new Footballer("Messi", 30, "Center-forward");
console.log(messi.getDetails());
