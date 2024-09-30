import Animals from './animals.js';

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

class Dogs extends Animals {
  constructor(name) {
    super(name);
    this.damage = 15;
    this.wild += Math.round(Math.random() * 40);
    this.classForFunction = 'Dogs';
  }

  dogsAttack(target) {
    console.log(target.health);
    if (getRandomInt(5) === 1) {
      target.health -= this.damage + 10;
      console.log(`${this.name} прокусила бедренную артерию, у тебя ${target.health} hp`);
    } else {
      target.health -= this.damage;
      console.log(`${this.name} прокусила твоё бедро, у тебя ${target.health} hp`);
    }
  }
}

export default Dogs;
