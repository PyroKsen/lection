import Apache from './apache.js';

class Tamagavk extends Apache {
  constructor(name) {
    super(name);
    this.training = Math.round(Math.random() * 5) + 20; // 20
    this.tameSkill += Math.round(Math.random() * 20);
    this.classForFunction = 'Tamagavk';
  }

  train(pet) {
    if (pet.wild !== 0) {
      const noTrainDamage = Math.floor(pet.damage / 3);
      this.health -= noTrainDamage;
      console.log(`Вы попытались тренировать дикое существо! ${this.name} - ${noTrainDamage} hp, у ${this.name}, ${this.health} hp  уверен животное после такого вам не радо...`);
      pet.wild += 5;
    } else {
      pet.health *= (this.training / 20);
      pet.health = Math.floor(pet.health);
      pet.damage *= (this.training / 20);
      pet.damage = Math.floor(pet.damage);
      console.log(pet.health, pet.damage);
    }
  }
}

export default Tamagavk;
