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

  