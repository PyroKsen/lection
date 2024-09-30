import TribeMember from './tribeMember.js';

class Rednek extends TribeMember {
  constructor(name) {
    super(name);
    this.war = Math.round(Math.random() * 100);
    this.classForFunction = 'Rednek';
    if (this.health < 60) {
      this.health = Math.round(Math.random() * 40) + 60;
    }
  }

  getDescription() {
    this.getInfo();
    console.log(`aboba ${this.name} реднек с войной ${this.war}`);
  }
}

export default Rednek;
