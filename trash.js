import fs from 'fs'
import path from 'path'
import readlineSync from 'readline-sync'
import setPerson from "./utility.js"
import { match } from 'assert'
class TribeMember {
    constructor(name){
        this.name = name
        this.age = Math.round(Math.random()*100)
        this.health = Math.round(Math.random()*100)
        this.nakopitel = 0
        this.tools = []
        this.pets = []
        this.damage = 30
        this.tameSkill = 15
        this.dead = 1
    }

    tame(pet) {
        if (this.pets.indexOf(pet) !== -1) return console.log('Животное переодомашнено, теперь оно затворник')
        if (pet.wild > 0) {
            pet.wild -= this.tameSkill
            console.log(`Вы смогли чутка погладить животное, но оно всё ещё косо на вас смотрит`)
        } else {
            pet.wild = 0
            console.log(`Поздравляем! Это животное теперь просит еду у вас, а не добывает её само! (приручено)`)
            this.pets.push(pet)
            pet.owner = this
        }
    }

    getInfo() {
        console.log(`aboba ${this.name}, возраст ${this.age}, хп ${this.health}`)
    }

    takeDamage(damage) {
        this.health -= damage
        console.log(`${this.name} получил ${damage} урона. hp: ${this.health}`)
        if (this.health <= 0) {
            console.log(`${this.name} умер(`)
            return true
        } else {
            return false
        }
    }

    attack(target) {
        console.log(target.pets)
        if (target.pets.length !== 0) {
            if (target.pets[0].health <= 0) {
                target.pets.pop()
                console.log("питомец мёртв")
            } else
                console.log(`питомец защищает ${target.name}`)
                target.pets[0].health -= target.damage
                console.log(`${target.pets[0].health} hp у питомца`)
                return
        }

        if (target.dead === 0) {
            console.log('пинаем труп')
            return
        } else {
        let hasTool = this.tools.length !== 0
        let damagePerson = this.damage

        if (!hasTool) {
            console.log(`${this.name} наносит ${damagePerson} урона ${target.name}`)
            target.takeDamage(damagePerson)
            if (target.health <= 0) {
                target.dead = 0
            }
        } else {
        if (tool.use()) {
            let iskilled = target.takeDamage(damagePerson + tool.damage)
            if (iskilled) {
                target = null
                target.dead = 0
            }
        }
    }
    }
    }

    addTool(tool) {
        this.tools.push(tool)
    }

    getToolList() {
        const list = this.tools.map(({name, durability}) => `${name}, ${durability}`)
        console.log(`${this.name} have: ${list.join('; ')}`)
    } 
}

class Apache extends TribeMember {
    constructor(name) {
        super(name)
        this.farmingSkill = Math.round(Math.random()* 40) + 60
        this.tameSkill += Math.round(Math.random()* 5)
        if (this.health >= 40) {
            this.health = Math.round(Math.random()* 40)
        }
    }

    getDescription() {
        this.getInfo()
        console.log(`aboba ${this.name} апатчанин с земледелием ${this.farmingSkill}`)
    }

    ultraUse(tool) {
        if ((tool.durability > 0) && (this.nakopitel === 3)) {
            tool.useDurability()
            console.log(`damage: ${tool.damage + 2}, UP`)
            this.nakopitel = 0
        } else {
            tool.useDurability()
            console.log(`${tool.name} - 1 dur, Now ${3 - this.nakopitel} for superPunch`)
            this.nakopitel += 1
        }
    }
}

class Rednek extends TribeMember {
    constructor(name) {
        super(name)
        this.war = Math.round(Math.random()* 100)
        if (this.health < 60) {
            this.health = Math.round(Math.random()* 40) + 60
        }
    }

    getDescription() {
        this.getInfo()
        console.log(`aboba ${this.name} реднек с войной ${this.war}`)
    }
}

class Tamagavk extends Apache { 
    constructor(name) {
        super(name)
        this.training = Math.round(Math.random() * 5) + 20 //20 
        this.tameSkill += Math.round(Math.random()* 20)
    }
    train(pet) {
        if (pet.wild !== 0) {
            let noTrainDamage = Math.floor(pet.damage / 3)
            this.health -= noTrainDamage
            console.log(`Вы попытались тренировать дикое существо! ${this.name} - ${noTrainDamage} hp, у ${this.name}, ${this.health} hp  уверен животное после такого вам не радо...`)
            pet.wild += 5
        } else {
            pet.health *= (this.training / 20)
            pet.health = Math.floor(pet.health)
            pet.damage *= (this.training / 20)
            pet.damage = Math.floor(pet.damage)
            console.log(pet.health, pet.damage)
        }
    }
}

class Animals {
    constructor(name) {
        this.name = name
        this.wild = 50
        this.health = 50
    }
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

class Dogs extends Animals {
    constructor(name) {
        super(name)
        this.damage = 15
        this.wild += Math.round(Math.random()* 40)
    }
    dogsAttack(target) {
        console.log(target.health)
        if (getRandomInt(5) === 1) {
            target.health -= this.damage + 10
            console.log(`${this.name} прокусила бедренную артерию, у тебя ${target.health} hp`)
        } else {
            target.health -= this.damage
            console.log(`${this.name} прокусила твоё бедро, у тебя ${target.health} hp`)
        }
    }
}

class Item {
    constructor(name) {
        this.name = name
        this.durability = 10
    }

    use() {
        if (this.durability > 0) {
            this.durability -= 1
            console.log(`${this.name} - 1 dur. Now ${this.durability} dur`)
            return true
        } else {
            console.log(`${this.name} broken & loooseee((((`)
            return false
        }
    }
    useDurability() {
        this.durability -= 1
    }
}

class Weapon extends Item {
    constructor(name) {
        super(name)
        this.durability += 5
    }
}

class Tools extends Item {
    constructor(name) {
        super(name)
        this.damage = 2
    }
}

const Vitaly = new Apache('Vitaly')
Vitaly.getDescription()
const Daniil = new Rednek('Daniil')
Daniil.getDescription()
const Jon = new Tamagavk('Jon')
Jon.getDescription()

const Boby = new Dogs('Вoby')
// console.log(Boby) 
// console.log(Jon)

// Jon.tame(Boby)
// Jon.tame(Boby)
// Jon.tame(Boby)
// Jon.tame(Boby)
// Jon.tame(Boby)
// Jon.tame(Boby)
// Jon.tame(Boby)
// Jon.train(Boby)

Daniil.attack(Jon)
Daniil.attack(Jon)
Daniil.attack(Jon)
Daniil.attack(Jon)

// console.log(Boby)
// console.log(Jon)

// const motiga = new Tools('motiga')
// Vitaly.addTool(motiga)

// const axe = new Weapon('axe')
// Daniil.addTool(axe)
// Daniil.getToolList()