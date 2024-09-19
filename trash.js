import fs from 'fs'
import path from 'path'
import readlineSync from 'readline-sync'
import setPerson from "./utility"

class TribeMember {
    constructor(name){
        this.name = name
        this.age = Math.round(Math.random()*100)
        this.health = Math.round(Math.random()*100)
        this.nakopitel = 0
        this.tools = []
        this.damage = 7
    }

    getInfo() {
        console.log(`aboba ${this.name}, возраст ${this.age}, хп ${this.health}`)
    }

    takeDamage(damage) {
        this.health -= damage
        console.log(`${this.name} take ${damage} damage. health: ${this.health}`)
        if (this.health <= 0) {
            console.log(`${this.name} died because blood can't move outside body`)
            return true
        } else {
            return false
        }
    }

    attack(target) {
        console.log(`\n${this.name} attack ${target.name}`)
        if (this.tools.length === 0) {
            console.log(`${this.name} base attack`)
        } else {
            console.log(`${this.name} attack ${this.tools.at(0).name}`)
        }
        let tool = this.tools.at(0) || 0
        let toolDamage = tool.damage
        console.log(tool)
        if (tool.use()) {
            let iskilled = target.takeDamage(this.damage + tool.damage)
            if (iskilled) {
                target = null
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
    }
}

class dog {
    constructor(name) {
        this.name = name
        this.health = 50
        this.damage = 10
    }

}

class Item {
    constructor(name) {
        this.name = name
        this.durability = Math.round(Math.random()* 5)
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
}

class Weapon extends Item {
    constructor(name) {
        super(name)
        this.durability += 3
    }
}

class Tools extends Item {
    constructor(name) {
        super(name)
        this.damage = 2
    }

    useDurability() {
        this.durability -= 1
    }
}

const Vitaly = new Apache('Vitaly')
Vitaly.getDescription()
const Daniil = new Rednek('Daniil')
Daniil.getDescription()

const motiga = new Tools('motiga')
Vitaly.addTool(motiga)

const axe = new Weapon('axe')
Daniil.addTool(axe)
Daniil.getToolList()

Vitaly.attack(Daniil)
Vitaly.attack(Daniil)
Vitaly.attack(Daniil)