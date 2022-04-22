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
    sharkSpeed = (dolphin) && sharkSpeed/2
    let attackDistance = sharkDistance - pontoonDistance
    let closingSpeed = (sharkSpeed > youSpeed) ? sharkSpeed - youSpeed :
    let safetyTime = pontoonDistance/youSpeed
    let sharkTime = attackDistance/closingSpeed
    return safetyTime <+ sharkTime ? 'Alive!' : 'Shark Bait!'
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