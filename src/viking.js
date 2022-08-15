// Soldier
class Soldier {
    constructor(health, strength) {
            // argumento
        this.health = health,
        //propriedade - valor
        this.strength = strength
    }

    attack () {
        return this.strength
    }

    receiveDamage (damage) {
        this.health -= damage 
    }
}

// Viking
class Viking extends Soldier {
    constructor(name, health, strength) {
        super (health, strength)
        this.name = name
    }

    receiveDamage (damage) {
        this.health -= damage 
        
    if (this.health > 0) {
        return (`${this.name} has received ${damage} points of damage`)
    }
    if (this.health <= 0) {
        return (`${this.name} has died in act of combat`)
    }
}
    
    battleCry () {
        return "Odin Owns You All!"
    }
}

// Saxon
class Saxon extends Soldier {
    constructor(health, strength){
        super (health, strength)
    }
    receiveDamage (damage) {
        this.health -= damage 
    if (this.health > 0) {
            return (`A Saxon has received ${damage} points of damage`)
        }
    if (this.health <= 0) {
            return ("A Saxon has died in combat")
        }
    }
}

// War
class War {
    constructor() {
        this.vikingArmy = []
        this.saxonArmy = []
    }
    addViking(viking) {
        this.vikingArmy.push(viking)
    }

    addSaxon(saxon) {
        this.saxonArmy.push(saxon)
    }

    vikingAttack() {
    // 1 escolher de dentro da array vikingArmy um viking aleatorio
    // 2 escolher de dentro da array saxonArmy um saxon aleatorio
     let indexRandomSaxon = Math.floor(Math.random() * this.saxonArmy.length)
     let indexRandomViking = Math.floor(Math.random() * this.vikingArmy.length)

     let viking = this.vikingArmy[indexRandomViking] 
     let saxon = this.saxonArmy[indexRandomSaxon]

     let result = saxon.receiveDamage(viking.attack())

     if(saxon.health <= 0) {
        this.saxonArmy.splice(indexRandomSaxon, 1)
     }

     return result 
    }

    saxonAttack() {
     let indexRandomSaxon = Math.floor(Math.random() * this.saxonArmy.length)
     let indexRandomViking = Math.floor(Math.random() * this.vikingArmy.length)
   
     let viking = this.vikingArmy[indexRandomViking] 
     let saxon = this.saxonArmy[indexRandomSaxon]

     let result = viking.receiveDamage(saxon.attack())

     if(viking.health <= 0) {
        this.vikingArmy.splice(indexRandomViking, 1)
     }

     return result
    }

    showStatus() {
        if (this.saxonArmy.length === 0) {
            return "Vikings have won the war of the century!"
        }

        if (this.vikingArmy.length === 0) {
            return "Saxons have fought for their lives and survived another day..."
        }

        if (this.saxonArmy.length === this.vikingArmy.length) {
            return "Vikings and Saxons are still in the thick of battle."
        }
    }
}
