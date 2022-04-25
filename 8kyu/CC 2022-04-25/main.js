// ====== 8kyu Return the day ======//

// Complete the function which returns the weekday according to the input number:

// 1 returns "Sunday"
// 2 returns "Monday"
// 3 returns "Tuesday"
// 4 returns "Wednesday"
// 5 returns "Thursday"
// 6 returns "Friday"
// 7 returns "Saturday"
// Otherwise returns "Wrong, please enter a number between 1 and 7"


let whatday = num => num === 1 ? 'Sunday' : num === 2 ? 'Monday' : num === 3 ? 'Tuesday' : num === 4 ? 'Wednesday' : num === 5 ? 'Thursday' : num === 6 ? 'Friday' : num === 7 ? 'Saturday' : 'Wrong, please enter a number between 1 and 7'


// ====== 8kyu For UFC Fans (Total beginners)

// This is a beginner friendly kata especially for UFC/MMA fans.

// It's a fight between the two legends: Conor McGregor vs George Saint Pierre in Madison Square Garden. Only one fighter will remain standing, and after the fight in an interview with Joe Rogan the winner will make his legendary statement. It's your job to return the right statement depending on the winner!

// If the winner is George Saint Pierre he will obviously say:

// "I am not impressed by your performance."
// If the winner is Conor McGregor he will most undoubtedly say:

// "I'd like to take this chance to apologize.. To absolutely NOBODY!"

let quote = function(fighter) {
  return fighter.toLowerCase() == 'george saint pierre' ? "I am not impressed by your performance." : "I'd like to take this chance to apologize.. To absolutely NOBODY!";
};

// ====== 8kyu simple calculator =====//

// You are required to create a simple calculator that returns the result of addition, subtraction, multiplication or division of two numbers.

// Your function will accept three arguments:
// The first and second argument should be numbers.
// The third argument should represent a sign indicating the operation to perform on these two numbers.

// if the variables are not numbers or the sign does not belong to the list above a message "unknown value" must be returned.

function calculator(a,b,sign){
  if (sign === '+'){
    return a + b
  }else if (sign === '-'){
    return a - b
  }else if (sign === '*'){
    return a * b
  }else if (sign === '/'){
    return a / b
  }else {
    return 'unknown value'
  }
}

// ====== 8kyu No Loops 2 You only need one ======// 

// *** No Loops Allowed ***

// You will be given an array (a) and a value (x). All you need to do is check whether the provided array contains the value, without using a loop.

// Array can contain numbers or strings. X can be either. Return true if the array contains the value, false if not. With strings you will need to account for case.

function check(a,x){
  return a.includes(x)
};


//====== 8kyu Grader ======//

// Create a function that takes a number as an argument and returns a grade based on that number.

// Score	Grade
// Anything greater than 1 or less than 0.6	"F"
// 0.9 or greater	"A"
// 0.8 or greater	"B"
// 0.7 or greater	"C"
// 0.6 or greater

function grader(score) {
  if (score >=.6 && score <.7 ){
    return 'D'
  }else if (score >=.7 && score <.8 ){
    return 'C'
  }else if (score >=.8 && score <.9){
    return 'B'
  }else if (score >=.9 && score <=1){
    return 'A'
  }else {
    return 'F'
  }
}


// ====== 8kyu Return to Sanity ====== //

// Fix the bugs

//orginal 

// function mystery() {
//   var results =
//     {sanity: 'Hello'};
//   return
//     results;
// }

// Solution
function mystery() {
  var results = {sanity: 'Hello'};
  return results;
}


// ====== 8kyu Price of Mangoes ======// 

// There's a "3 for 2" (or "2+1" if you like) offer on mangoes. For a given quantity and price (per mango), calculate the total cost of the mangoes.

function mango(quantity, price){
  return price * (quantity - Math.floor(quantity / 3));
}

//====== 8kyu Training JS#10: loop statement --for ======//

// Coding in function pickIt, function accept 1 parameter:arr, it's a number array, we need traverse arr by using for loop, if element is odd number, push it to array odd, if it's a even number, push it to array even.

// I've defined two array odd and even in the function, and also wrote the return statement. your work is write a for loop.

function pickIt(arr){
  var odd=[],even=[];
  for (let i=0; i <=arr.length-1; i++){
    if (arr[i] % 2 === 0){
      even.push(arr[i])
    }else {
      odd.push(arr[i])
    }
  }
  return [odd,even];
}


// ====== 8kyu Man in the west ======//

// A western man is trying to find gold in a river. To do that, he passes a bucket through the river's soil and then checks if it contains any gold. However, he could be more productive if he wrote an algorithm to do the job for him.

// So, you need to check if there is gold in the bucket, and if so, return True/true. If not, return False/false.


function checkTheBucket(bucket){
  return bucket.includes('gold')
}


//======Chuck Norris VII - True or False? (Beginner) ======//

// It's a well known fact that anything Chuck Norris wants, he gets. As a result Chuck very rarely has to use the word false.

// It is a less well known fact that if something is true, and Chuck doesn't want it to be, Chuck can scare the truth with his massive biceps, and it automatically becomes false.

// Your task is to be more like Chuck (ha! good luck!). You must return false without ever actually using the word false...

// Go show some truth who's boss!

function ifChuckSaysSo(){
  return !true
}

// ====== 8kyu Multiply the number =====//g

// Jack really likes his number five: the trick here is that you have to multiply each number by 5 raised to the number of digits of each numbers, so, for example:

const multiply = number => {
  const num = String(Math.abs(number)).length
  return number * 5 ** num
}


// ====== 8kyu Who ate the cookie? ======//

// For this problem you must create a program that says who ate the last cookie. If the input is a string then "Zach" ate the cookie. If the input is a float or an int then "Monica" ate the cookie. If the input is anything else "the dog" ate the cookie. The way to return the statement is: "Who ate the last cookie? It was (name)!"

// Ex: Input = "hi" --> Output = "Who ate the last cookie? It was Zach! (The reason you return Zach is because the input is a string)

// Note: Make sure you return the correct message with correct spaces and punctuation.

function cookie(x){
  return typeof x == "string" ? "Who ate the last cookie? It was Zach!" : typeof x == "number" ? "Who ate the last cookie? It was Monica!" : "Who ate the last cookie? It was the dog!";
}

//====== 8kyu Get number from string ======//

// Write a function which removes from string all non-digit characters and parse the remaining to number. E.g: "hell5o wor6ld" -> 56

function getNumberFromString(s) {
  return Number(s.match(/\d/g).join(''));
}

// ====== 8kyu Is n divisible by x and y? ======//

// Create a function that checks if a number n is divisible by two numbers x AND y. All inputs are positive, non-zero digits.

function isDivisible(n, x, y) {
  return n % x === 0 && n % y === 0
}


// ====== 8kyu Are you playing banjo? ======//

// Create a function which answers the question "Are you playing banjo?".
// If your name starts with the letter "R" or lower case "r", you are playing banjo!

function areYouPlayingBanjo(name) {
  if (name.toLowerCase().charAt(0) == 'r'){
    return `${name} plays banjo`
  }else {
    return `${name} does not play banjo`
  }
}

// ===== 8kyu Transportation on vacation ======//

// After a hard quarter in the office you decide to get some rest on a vacation. So you will book a flight for you and your girlfriend and try to leave all the mess behind you.

// You will need a rental car in order for you to get around in your vacation. The manager of the car rental makes you some good offers.

// Every day you rent the car costs $40. If you rent the car for 7 or more days, you get $50 off your total. Alternatively, if you rent the car for 3 or more days, you get $20 off your total.

// Write a code that gives out the total amount for different days(d).



function rentalCarCost(d) {
  let total = 40 * d
  
  if (d >= 7){
    return total - 50
  }else if (d >=3 && d<7){
    return total - 20
  }else {
    return total
  }
}


// ====== Area or perimeter ======//

// You are given the length and width of a 4-sided polygon. The polygon can either be a rectangle or a square.
// If it is a square, return its area. If it is a rectangle, return its perimeter.

const areaOrPerimeter = function(l , w) {
  if (l === w){
    return l * w
  }else {
    return l * 2 + w * 2
  }
};


// ====== 8kyu Can we Divide it? =====//

// Your task is to create the functionisDivideBy (or is_divide_by) to check if an integer number is divisible by both integers a and b.

const isDivideBy = (number, a, b) => number % a === 0 && number % b ===0


// ====== 8kyu Rock Paper Scissors! ======//

// Let's play! You have to return which player won! In case of a draw return Draw!.

const rps = (p1, p2) => {
  if (p1==='scissors'&&p2==='paper') return `Player 1 won!`;
  if (p1==='paper'&&p2==='rock') return `Player 1 won!`;
  if (p1==='rock'&&p2==='scissors') return `Player 1 won!`;
  if (p1==='paper'&&p2==='scissors') return `Player 2 won!`;
  if (p1==='rock'&&p2==='paper') return `Player 2 won!`;
  if (p1==='scissors'&&p2==='rock') return `Player 2 won!`;
  if (p1==='scissors'&&p2==='scissors') return `Draw!`;
  if (p1==='paper'&&p2==='paper') return `Draw!`;
  if (p1==='rock'&&p2==='rock') return `Draw!`;
};


// ===== L1: Set Alarm ======//
// Write a function named setAlarm which receives two parameters. The first parameter, employed, is true whenever you are employed and the second parameter, vacation is true whenever you are on vacation.

// The function should return true if you are employed and not on vacation (because these are the circumstances under which you need to set an alarm). It should return false otherwise. Examples:

// setAlarm(true, true) -> false
// setAlarm(false, true) -> false
// setAlarm(false, false) -> false
// setAlarm(true, false) -> true

function setAlarm(e, v){
    if (e === true && v === true){
      return false
    }else if (e === false && v === true){
      return false
    }else if (e === false && v === false){
      return false
    }else {
      return true
    }
}