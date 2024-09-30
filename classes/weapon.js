import Item from './item.js';

class Weapon extends Item {
  constructor(name) {
    super(name);
    this.durability += 5;
    this.classForFunction = 'Weapon';
  }
}

export default Weapon;
