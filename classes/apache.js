import TribeMember from './tribeMember.js';

class Apache extends TribeMember {
  constructor(name) {
    super(name);
    this.farmingSkill = Math.round(Math.random() * 40) + 60;
    this.tameSkill += Math.round(Math.random() * 5);
    this.classForFunction = 'Apache';
    if (this.health >= 40) {
      this.health = Math.round(Math.random() * 40);
    }
  }

  getDescription() {
    this.getInfo();
    console.log(`aboba ${this.name} апатчанин с земледелием ${this.farmingSkill}`);
  }

  ultraUse(tool) {
    if ((tool.durability > 0) && (this.nakopitel === 3)) {
      tool.useDurability();
      console.log(`damage: ${tool.damage + 2}, UP`);
      this.nakopitel = 0;
    } else {
      tool.useDurability();
      console.log(`${tool.name} - 1 dur, Now ${3 - this.nakopitel} for superPunch`);
      this.nakopitel += 1;
    }
  }
}

export default Apache;
