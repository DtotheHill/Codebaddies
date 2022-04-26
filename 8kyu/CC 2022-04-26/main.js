// ====== 8kyu Sum without highest and lowest number ======//

// Sum all the numbers of a given array ( cq. list ), except the highest and the lowest element ( by value, not by index! ).

// The highest or lowest element respectively is a single element at each edge, even if there are more than one with the same value.

// Mind the input validation.


sumArray = a => a ? a.sort((x, y) => x - y).slice(1, -1).reduce((s, e) => s + e, 0) : 0

//  ====== 8kyu Total amount of points ======//

// Our football team finished the championship. The result of each match look like "x:y". Results of all matches are recorded in the collection.

// For example: ["3:1", "2:2", "0:1", ...]

// Write a function that takes such collection and counts the points of our team in the championship. Rules for counting points for each match:

// if x > y: 3 points
// if x < y: 0 point
// if x = y: 1 point
// Notes:

// there are 10 matches in the championship
// 0 <= x <= 4
// 0 <= y <= 4

function points(games) {
  let total = 0;
  games.map(game => {
    if (game[0] === game[2]) {
      total += 1;
    } else if (game[0] > game[2]) {
      total += 3;
    }
  });
  return total;
}



// ====== 8kyu Sum mixed array ====== //

// Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

// Return your answer as a number.

function sumMix(x){
  return x.map(a => +a).reduce((a, b) => a + b);
}


// ====== 8kyu Count by X ====== //

// Create a function with two arguments that will return an array of the first (n) multiples of (x).

// Assume both the given number and the number of times to count will be positive numbers greater than 0.

function countBy(x, n) {
  let z = [];
  for(let i= x; i<=n*x; i++){
    if(i%x ===0)z.push(i)
  }
  return z;
}


// ====== 8kyu Beginner Series #4 Cockroach ====== //

// The cockroach is one of the fastest insects. Write a function which takes its speed in km per hour and returns it in cm per second, rounded down to the integer (= floored).

function cockroachSpeed(s) {
  let conversion = s * 27.777778;
  return Math.floor(conversion);
}


// ===== 8kyu Will there be enough space? ======// 


// You have to write a function that accepts three parameters:

// cap is the amount of people the bus can hold excluding the driver.
// on is the number of people on the bus excluding the driver.
// wait is the number of people waiting to get on to the bus excluding the driver.
// If there is enough space, return 0, and if there isn't, return the number of passengers he can't take

function enough(cap, on, wait) {
  if( on + wait > cap){
    return (on + wait) - cap
  }
  else {
    return 0
  }  
}

// ====== 8kyu Thinkful - logic drills: traffic light ======//

// You're writing code to control your town's traffic lights. You need a function to handle each change from green, to yellow, to red, and then to green again.

// Complete the function that takes a string as an argument representing the current state of the light and returns a string representing the state the light should change to.

// For example, update_light('green') should return 'yellow'.

function updateLight(current) {
  if (current === 'green'){
    return 'yellow'
  }else if (current === 'yellow'){
    return 'red'
  }else {
    return 'green'
  }
}


// ====== 8kyu Count off numbers below n ======//

// Given a number n, return the number of positive odd numbers below n, EASY!

function oddCount(n){
  return Math.floor(n/2)
}


// ====== 8kyu Third angle of a triangle ======//

// You are given two interior angles (in degrees) of a triangle.

// Write a function to return the 3rd.

function otherAngle(a, b) {
  return 180 - a - b
}


// ====== 8kyu Twice as old ======//

// Your function takes two arguments:

// current father's age (years)
// current age of his son (years)
// Сalculate how many years ago the father was twice as old as his son (or in how many years he will be twice as old).

function twiceAsOld(daddy, sonny) {
  return Math.abs(daddy - 2 * sonny)
}



// ====== 8kyu Keep up the hoop ======//

// Alex just got a new hula hoop, he loves it but feels discouraged because his little brother is better than him

// Write a program where Alex can input (n) how many times the hoop goes round and it will return him an encouraging message :)

// If Alex gets 10 or more hoops, return the string "Great, now move on to tricks".
// If he doesn't get 10 hoops, return the string "Keep at it until you get it".


function hoopCount (n) {
  if (n >=10 ){
    return 'Great, now move on to tricks'
  }else {
    return 'Keep at it until you get it'
  }
}