// ====== 8kyu Bug Squashing ======//

// You are creating a text-based terminal version of your favorite board game. In the board game, each turn has six steps that must happen in this order: roll the dice, move, combat, get coins, buy more health, and print status.

// // Original
// var health = 100
// var position = 0
// var coins = 0

// function main () {
//   getCoins()
//   move()
//   printStatus()
//   combat()
//   rolDice()
//   attack()
// }


// Solution

var health = 100
var position = 0
var coins = 0

const main = () =>

[rollDice, move, combat, getCoins, buyHealth, printStatus].forEach(action =>
    action()
)


// ====== 8kyu Check for factor ======//

// This function should test if the factor is a factor of base.

// Return true if it is a factor or false if it is not.

// About factors
// Factors are numbers you can multiply together to get another number.

// 2 and 3 are factors of 6 because: 2 * 3 = 6

// You can find a factor by dividing numbers. If the remainder is 0 then the number is a factor.
// You can use the mod operator (%) in most languages to check for a remainder

function checkForFactor (base, factor) {
  if (base % factor === 0){
    return true
  }else {
    return false
  }
}




