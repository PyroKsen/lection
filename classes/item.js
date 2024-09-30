class Item {
  constructor(name) {
    this.name = name;
    this.durability = 10;
    this.classForFunction = 'Item';
  }

  use() {
    if (this.durability > 0) {
      this.durability -= 1;
      console.log(`${this.name} - 1 dur. Now ${this.durability} dur`);
      return true;
    }
    console.log(`${this.name} broken & loooseee((((`);
    return false;
  }

  useDurability() {
    this.durability -= 1;
  }
}

export default Item;
