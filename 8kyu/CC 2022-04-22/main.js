// ====== 8kyu How much water do I need? ======//

// My washing machine uses water amount of water to wash clothes amount of clothes. You are given a load(in JavaScript and Python) or max_load (in Ruby) amount of clothes to wash. For each single item of load above the standard amount of clothes, the washing machine will use 10% more water (multiplicative) to clean.

// For example, if the amount of clothes is 10, the amount of water it requires is 5 and the load is 14, then you need 5 * 1.1 ^ (14 - 10) amount of water.

// Write a function howMuchWater (JS)/how_much_water (Python and Ruby) to work out how much water is needed if you have a clothes amount of clothes. The function will accept 3 parameters - howMuchWater(water, load, clothes) / how_much_water(water, load, clothes) / how_much_water(water, max_load, clothes)

// My washing machine is an old model that can only handle double the amount of load (or max_load). If the amount of clothes is more than 2 times the standard amount of load (max_load), return 'Too much clothes'. The washing machine also cannot handle any amount of clothes less than load (max_load). If that is the case, return 'Not enough clothes'.

// The answer should be rounded to the nearest 2 decimal places.

function howMuchWater(water, load, clothes){
    if (clothes > 2*load){
      return 'Too much clothes'
    }else if (clothes < load ){
      return 'Not enough clothes'
    }else {
      return +((water) * 1.1**(clothes-load)).toFixed(2)
    }
  }

  // ====== 8kyu Take the Derivative ======//

//   This function takes two numbers as parameters, the first number being the coefficient, and the second number being the exponent.

// Your function should multiply the two numbers, and then subtract 1 from the exponent. Then, it has to print out an expression (like 28x^7). "^1" should not be truncated when exponent = 2.

//1st attempt
function derive(coefficient,exponent) {
    return (coefficient * exponent) + ("x^") + (exponent -1)
}

//2nd attempt
function derive(coefficient,exponent) {
    return `${coefficient*exponent}x^${exponent-1}`
}


// ====== 8kyu Holiday VI - Shark Pontoon ======//

// Your friend invites you out to a cool floating pontoon around 1km off the beach. Among other things, the pontoon has a huge slide that drops you out right into the ocean, a small way from a set of stairs used to climb out.

// As you plunge out of the slide into the water, you see a shark hovering in the darkness under the pontoon... Crap!

// You need to work out if the shark will get to you before you can get to the pontoon. To make it easier... as you do the mental calculations in the water you either freeze when you realise you are dead, or swim when you realise you can make it!

// You are given 5 variables;

// sharkDistance = distance from the shark to the pontoon. The shark will eat you if it reaches you before you escape to the pontoon.

// sharkSpeed = how fast it can move in metres/second.

// pontoonDistance = how far you need to swim to safety in metres.

// youSpeed = how fast you can swim in metres/second.

// dolphin = a boolean, if true, you can half the swimming speed of the shark as the dolphin will attack it.

// The pontoon, you, and the shark are all aligned in one dimension.

// If you make it, return "Alive!", if not, return "Shark Bait!".


function shark(pontoonDistance, sharkDistance, youSpeed, sharkSpeed, dolphin){
    sharkSpeed = (dolphin) ? sharkSpeed/2 : sharkSpeed
    return (sharkDistance/sharkSpeed) < (pontoonDistance/youSpeed) ? 'Shark Bait!' :'Alive!'
}




// ====== 8kyu The falling speed of petals ======//

// When it's spring Japanese cherries blossom, it's called "sakura" and it's admired a lot. The petals start to fall in late April.

// Suppose that the falling speed of a petal is 5 centimeters per second (5 cm/s), and it takes 80 seconds for the petal to reach the ground from a certain branch.

// Write a function that receives the speed (in cm/s) of a petal as input, and returns the time it takes for that petal to reach the ground from the same branch.

// Notes:

// The movement of the petal is quite complicated, so in this case we can see the velocity as a constant during its falling.
// Pay attention to the data types.
// If the initial velocity is non-positive, the return value should be 0


function sakuraFall(v) {
    if(v <= 0){
    return 0;
     }else{
    return (80*5)/v;
   }
}

//====== 8kyu Parse Float ======//

// Write function parseF which takes an input and returns a number or null if conversion is not possible. The input can be one of many different types so be aware.

function parseF(s) {
    return parseFloat(s) ? parseFloat(s) : (s==0 && s!==false) ? 0 : null
}

// ======= 8kyu Coefficients of the Quadratic Equation ======//

// In this Kata you are expected to find the coefficients of quadratic equation of the given two roots (x1 and x2).

// Equation will be the form of ax^2 + bx + c = 0

// Return type is a Vector (tuple in Rust, Array in Ruby) containing coefficients of the equations in the order (a, b, c).

// Since there are infinitely many solutions to this problem, we fix a = 1.

function quadratic(x1, x2){
    return [1, -x1-x2, x1*x2 ]
}

// ====== 8kyu Polish alphabet ======// 

// There are 32 letters in the Polish alphabet: 9 vowels and 23 consonants.

// Your task is to change the letters with diacritics:


// ą -> a,
// ć -> c,
// ę -> e,
// ł -> l,
// ń -> n,
// ó -> o,
// ś -> s,
// ź -> z,
// ż -> z

function correctPolishLetters (string) {
    let letter = {'ą':'a','ć':'c','ę':'e','ł':'l','ń':'n','ó':'o','ś':'s','ź':'z','ż':'z'}
    return string.replace(/[ąćęłńóśźż]/g, match => letter[match])
}

// ====== 8kyu Get ascii value of character ======//

// Get ASCII value of a character.

// For the ASCII table you can refer to http://www.asciitable.com

function getASCII(c){
    return c.charCodeAt(0)
}

//arrow function
let getASCII = c => c.charCodeAt(0)


// ====== 8kyu Thinkful - Number Drills: Blue and red marbles ======//
// You and a friend have decided to play a game to drill your statistical intuitions. The game works like this:

// You have a bunch of red and blue marbles. To start the game you grab a handful of marbles of each color and put them into the bag, keeping track of how many of each color go in. You take turns reaching into the bag, guessing a color, and then pulling one marble out. You get a point if you guessed correctly. The trick is you only have three seconds to make your guess, so you have to think quickly.

// You've decided to write a function, guessBlue() to help automatically calculate whether you should guess "blue" or "red". The function should take four arguments:

// the number of blue marbles you put in the bag to start
// the number of red marbles you put in the bag to start
// the number of blue marbles pulled out so far (always lower than the starting number of blue marbles)
// the number of red marbles pulled out so far (always lower than the starting number of red marbles)
// guessBlue() should return the probability of drawing a blue marble, expressed as a float. For example, guessBlue(5, 5, 2, 3) should return 0.6.


function guessBlue(blueStart, redStart, bluePulled, redPulled) {
    let totalMarbles = blueStart + redStart - bluePulled - redPulled
    return (blueStart - bluePulled)/totalMarbles
}


// ===== 8kyu Simple Fun #352: Reagent Formula ======//

// Now we will confect a reagent. There are eight materials to choose from, numbered 1,2,..., 8 respectively.

// We know the rules of confect:

// material1 and material2 cannot be selected at the same time
// material3 and material4 cannot be selected at the same time
// material5 and material6 must be selected at the same time
// material7 or  material8 must be selected(at least one, or both)
// Task
// You are given a integer array formula. Array contains only digits 1-8 that represents material 1-8. Your task is to determine if the formula is valid. Returns true if it's valid, false otherwise.


let isValid = a => !(a.includes(1) && a.includes(2)) && !(a.includes(3) && a.includes(4)) && a.includes(5) === a.includes(6) && (a.includes(7) || a.includes(8));

// ====== 8kyu Define a card suit ======//

// You get any card as an argument. Your task is to return the suit of this card (in lowercase).

// Our deck (is preloaded):

// deck = ['2♣','3♣','4♣','5♣','6♣','7♣','8♣','9♣','10♣','J♣','Q♣','K♣','A♣',
//         '2♦','3♦','4♦','5♦','6♦','7♦','8♦','9♦','10♦','J♦','Q♦','K♦','A♦',
//         '2♥','3♥','4♥','5♥','6♥','7♥','8♥','9♥','10♥','J♥','Q♥','K♥','A♥',
//         '2♠','3♠','4♠','5♠','6♠','7♠','8♠','9♠','10♠','J♠','Q♠','K♠','A♠'];
// ('3♣') -> return 'clubs'
// ('3♦') -> return 'diamonds'
// ('3♥') -> return 'hearts'
// ('3♠') -> return 'spades'

function defineSuit(card) {
    if(card.includes("♣")){
      return "clubs";
    }else if(card.includes("♦")){
      return "diamonds";
    }else if(card.includes("♥")){
      return "hearts"
    }else {
      return "spades"
    }
}


// ====== 8kyu For Twins: 2. Math operations ======//

// A magician in the subway showed you a trick, he put an ice brick in a bottle to impress you. The brick's length and width are equal, forming a square; its height may be different. Just for fun and also to impress the magician and people around, you decided to calculate the brick's volume. Write a function iceBrickVolume that will accept these parameters:

// radius - bottle's radius (always > 0);
// bottleLength - total bottle length (always > 0);
// rimLength - length from bottle top to brick (always < bottleLength);
// And return volume of ice brick that magician managed to put into a bottle.

function iceBrickVolume(radius, bottleLength, rimLength) {
    return ((bottleLength-rimLength)*(radius*2)*radius);
}


// ====== 8kyu Sum of Multiples ======//

// Find the sum of all multiples of n below m

// Keep in Mind
// n and m are natural numbers (positive integers)
// m is excluded from the multiples
// Examples
// sumMul(2, 9)   ==> 2 + 4 + 6 + 8 = 20
// sumMul(3, 13)  ==> 3 + 6 + 9 + 12 = 30
// sumMul(4, 123) ==> 4 + 8 + 12 + ... = 1860
// sumMul(4, -7)  ==> "INVALID"

function sumMul(n,m){
    if (n<=0 || m<=0){
      return 'INVALID'
    }
    let sum = 0
    for (let i=n; i<m; i++){
      if (i % n ===0){
        sum += i
      }
    }
    return sum
}


// ====== 8kyu Pirates!! Are the Cannons ready !?? ======//

// Ahoy Matey!

// Welcome to the seven seas.

// You are the captain of a pirate ship.

// You are in battle against the royal navy.

// You have cannons at the ready.... or are they?

// Your task is to check if the gunners are loaded and ready, if they are: Fire!

// If they aren't ready: Shiver me timbers!

// Your gunners for each test case are 2, 3 or 4.

// When you check if they are ready their answers are in a dictionary and will either be: aye or nay

// Firing with less than all gunners ready is non-optimum (this is not fire at will, this is fire by the captain's orders or walk the plank, dirty sea-dog!)

// If all answers are 'aye' then Fire! if one or more are 'nay' then Shiver me timbers!

const cannonsReady = (gunners) => Object.entries(gunners)
  .some((e) => e[1] === 'nay') ? 'Shiver me timbers!' : 'Fire!';
