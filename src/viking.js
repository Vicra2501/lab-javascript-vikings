// Soldier
class Soldier {
  constructor(health, strength) {
    this.health = health
    this.strength = strength
  }
  // Methodes
  attack (){
    return this.strength
  }
  receiveDamage (damage) {
    this.health -= damage
  }
} /////////////


// Viking
class Viking extends Soldier {
  constructor(name, health, strength) {
    super(health, strength)
    this.name = name
    }

// Methodes
attack() {
  return this.strength
}

receiveDamage (damage){
    this.health = this.health - damage
      if (this.health > 0){
        return `${this.name} has received ${damage} points of damage`
      }
      else {
        return `${this.name} has died in act of combat`
}
}
battleCry (){
  return 'Odin Owns You All!'
}
}//////////////

  
  
// Saxon
class Saxon extends Soldier {
  constructor(health, strength){
    super(health, strength)
  }

// Methodes
 recieveDamage(damage){
  super.recieveDamage(damage)
  this.health -= damage
  if (this.health > 0){
    return `A Saxon has received ${damage} points of damage`
  } 
  else {
    return "A Saxon has died in combat"
 }
}
}///////////

// War
class War {

constructor(vikingArmy,saxonArmy){

  this.vikingArmy = []
  this.saxonArmy = []
  
}
  addViking(viking){
    this.vikingArmy.push(viking)
  }
  addSaxon(saxon){
    this.saxonArmy.push(saxon)
  }
  vikingAttack(){
    const i = Math.floor(Math.random() * this.saxonArmy.length)
    const j = Math.floor(Math.random() * this.vikingArmy.length)
    const randomSaxon = this.saxonArmy[i]
    const randomViking = this.vikingArmy[j]
    randomSaxon.receiveDamage(randomViking.strength) 
    randomSaxon.receiveDamage(randomViking.strength) 
    ///tbe

    } 
    saxonAttack(){
    const randomViking = Math.floor(Math.random() * this.vikingArmy.length)
    const randomSaxon = Math.floor(Math.random() * this.saxonArmy.length)
  
   } 
  }

 function war (showStatus){
    if (saxonArmy.length === 0){
      return "Vikings have won the war of the century!"
    }
    if (vikingArmy.length === 0){
      return "Saxons have fought for their lives and survived another day..."
    }
    else {
      return "Vikings and Saxons are still in the thick of battle."
  }}
  



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}


