import Item from './item.js';

class Tools extends Item {
  constructor(name) {
    super(name);
    this.damage = 2;
    this.classForFunction = 'Tools';
  }
}

export default Tools;
