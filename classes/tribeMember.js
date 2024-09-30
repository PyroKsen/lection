class TribeMember {
  constructor(name) {
    this.name = name;
    this.age = Math.round(Math.random() * 100);
    this.health = Math.round(Math.random() * 100);
    this.nakopitel = 0;
    this.tools = [];
    this.pets = [];
    this.damage = 30;
    this.tameSkill = 15;
    this.live = 1;
    this.classForFunction = 'TribeMember';
  }

  tame(pet) {
    if (this.pets.indexOf(pet) !== -1) console.log('Животное уже одомашнено, теперь оно затворник');
    if (pet.wild > 0) {
      pet.wild -= this.tameSkill;
      console.log('Вы смогли чутка погладить животное, но оно всё ещё косо на вас смотрит');
    } else {
      pet.wild = 0;
      console.log('Поздравляем! Это животное теперь просит еду у вас, а не добывает её само! (приручено)');
      this.pets.push(pet);
      pet.owner = this;
    }
  }

  getInfo() {
    console.log(`aboba ${this.name}, возраст ${this.age}, хп ${this.health}`);
  }

  takeDamage(damage) {
    this.health -= damage;
    console.log(`${this.name} получил ${damage} урона. hp: ${this.health}`);
    if (this.health <= 0) {
      console.log(`${this.name} умер(`);
      return true;
    }
    return false;
  }

  attack(target) {
    const tool = this.tools.at(0) || 0;
    console.log(target.pets);
    if (target.pets.length !== 0) {
      if (target.pets[0].health <= 0) {
        target.pets.pop();
        console.log('питомец мёртв');
      } else console.log(`питомец защищает ${target.name}`);
      target.pets[0].health -= target.damage;
      console.log(`${target.pets[0].health} hp у питомца`);
      return;
    }

    if (target.live === 0) {
      console.log(`пинаем труп ${target.name}`);
    } else {
      const hasTool = this.tools.length !== 0;
      const damagePerson = this.damage;

      if (!hasTool) {
        console.log(`${this.name} наносит ${damagePerson} урона ${target.name}`);
        target.takeDamage(damagePerson);
        if (target.health <= 0) {
          target.live = 0;
        }
      } else if (tool.use()) {
        const iskilled = target.takeDamage(damagePerson + tool.damage);
        if (iskilled) {
          target = null;
          target.live = 0;
        }
      }
    }
  }

  addTool(tool) {
    this.tools.push(tool);
  }

  getToolList() {
    const list = this.tools.map(({ name, durability }) => `${name}, ${durability}`);
    console.log(`${this.name} have: ${list.join('; ')}`);
  }
}

export default TribeMember;
