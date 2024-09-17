class TribeMember {
    constructor(name){
        this.name = name
        this.age = Math.round(Math.random()*100)
        this.health = Math.round(Math.random()*100)
    }
    getInfo() {
        console.log(`aboba ${this.name}, возраст ${this.age}, хп ${this.health}`)
    }
}

class Apache extends TribeMember {
    constructor(name) {
        super(name)
        this.farmingSkill = Math.round(Math.random()* 40) + 60
        if (this.health >= 40) {
            this.health = Math.round(Math.random()* 40)
        }
        this.tools = []
    }
    getDescription() {
        this.getInfo()
        console.log(`aboba ${this.name} апатчанин с земледелием ${this.farmingSkill}`)
    }
    addTool(tool) {
        this.tools.push(tool)
    }
    getToolList() {
        const list = this.tools.map(({name, durability}) => `${name}, ${durability}`)
        console.log(`${this.name} have: ${list.join('; ')}`)
    }
    ultraUse() {
        if (this.nakopitelForSuperUse === 3) {
            this.damage += 2
            console.log(`Super udar! damage: ${this.damage}`)
            this.damage -= 2
            this.nakopitelForSuperUse = 0
        } else {
            console.log(`damge ${this.damage}`)
            this.nakopitelForSuperUse += 1
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
        this.nakopitelForSuperUse = 0
        this.damage = 2
    }
}

const Vitaly = new Apache('Vitaly')
Vitaly.getDescription()
const Vadim = new Rednek('Vadim')
Vadim.getDescription()

const motiga = new Tools('motiga')
const shovel = new Tools('shovel')
Vitaly.addTool(motiga)
Vitaly.addTool(shovel)
Vitaly.getToolList()