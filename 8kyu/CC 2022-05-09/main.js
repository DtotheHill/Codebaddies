// ======8kyu Do something"n.times"(Simplifying "for" loops) ======//

// However, I myself find the for loop very complex and unreadable. Think about it - would you know what the for loop does if you've never learned computer programming? For example, if you've never coded before, would you have any idea what this thing in the for loop: i = 0; i < number; i++ means?

// Therefore, I would like you to define a method callable on integers, Number.prototype.times, that effectively replaces the for loop. It should work like this:

Number.prototype.times = function (f) {
  for (let i = 0; i < this; i++) f(i)
}


// ======8kyu Be Concise II - I Need Squares ======//

// You are given a program squaresOnly that accepts an array of natural numbers up to and including 100 (and including 0) of length >= 1, array, and returns a new array containing only square numbers that have appeared in the input array.

// Refactor the solution to use as few characters as possible. There is a maximum character limit of 127. Here are a few hints:

// There are a lot of handy built-in Array methods in Javascript that you may have never heard of even after completing a basic course in Javascript (e.g. those provided by Codecademy) - well, at least I haven't heard of until quite recently. You may also want to research any new built-in methods offered by ES6, the newest specification of Javascript at the time of writing.
// Don't you think the array parameter is a bit wordy? ;)

function squaresOnly(array) {
  return array.filter(num=>Number.isInteger(Math.sqrt(num)))
}


// =======8kyu Be Concise III - Sum Squares =======//

// You are given a program sumSquares that takes an array as input and returns the sum of the squares of each item in an array. For example:

// sumSquares([1,2,3,4,5]) === 55 // 1 ** 2 + 2 ** 2 + 3 ** 2 + 4 ** 2 + 5 ** 2
// sumSquares([7,3,9,6,5]) === 200
// sumSquares([11,13,15,18,2]) === 843
// Shorten the code such that it meets the requirements.

// A few hints:

// Try researching about built-in Array methods; they may help shorten your code a lot

function sumSquares(array) {
  return array.reduce((a,b)=>a+b**2,0)
}

// ======8kyu SpeedCode #3 × Fun with ES6 Classes #5 - Dogs and Classes ======//


// Objective
// Preloaded for you is a class Dog:

// class Dog {
//   constructor(name, age, gender, species, size, master, loyal) {
//     this.name = name;
//     this.age = age;
//     this.gender = gender;
//     this.species = species;
//     this.legs = 4;
//     this.size = size;
//     this.master = master;
//     this.loyal = loyal;
//   }
// }
// You are then given a working class Labrador as your initial code.

// class Labrador {
//   constructor(name, age, gender, master) {
//     this.name = name;
//     this.age = age;
//     this.gender = gender;
//     this.species = "Labrador";
//     this.legs = 4;
//     this.size = "Large";
//     this.master = master;
//     this.loyal = true;
//   }
// }
// Shorten it so that it meets the strict character count requirements for this Kata.

// Quick, get your timer out and get ready to time yourself. Are you ready? Ready, get set, GO!!! :D


class Labrador extends Dog {
  constructor(name, age, gender, master) {
    super(name, age, gender, 'Labrador', 'Large', master, true)
  }
}

//======8kyu Generate user links ======//

// Generate user links
// Your task is to create userlinks for the url, you will be given a username and must return a valid link.

// Example
// generate_link('matt c')
// http://www.codewars.com/users/matt%20c

function generateLink(user) {
  let x = `http://www.codewars.com/users/${encodeURIComponent(user)}`;
  return x;
}

// ====== 8kyu Be Concise IV - Index of an element in an array ======//

// Provided is a function find which accepts two parameters in the following order: array, element and returns the index of the element if found and "Not found" otherwise. Your task is to shorten the code as much as possible in order to meet the strict character count requirements of the Kata. (no more than 85) You may assume that all array elements are unique.


function find(a, e) {
  return a.includes(e)?  a.indexOf(e): "Not found"
  
}

// ======8kyu Circular Objects #1 - Running around in circles =====//

// Task
// Define a circular object circular such that the following are true:

// circular.value === "Hello World"
// circular === circular.self
// circular.self === circular.self.self

let circular ={value:"Hello World"}
circular.self = circular


// =======8kyu Not so black box =======//

// The kata has been preloaded with a function called blackBox. Figure out what the function does.

JSopenSesame();


// =======8kyu Blood-Alcohol Content ======//

// Bob drinks too much, and he gets in trouble for it a lot. He drinks so much, in fact, that he has broken the local law enforcement's breathalizer with his alcoholic breath! Bob feels simply aweful, so he wants to make up for it by creating a function that will calculate his blood-alcohol level for them. Unfortunately, Bob has gotten too inebriated to do any programming today, so he needs your help!

// He did manage to research the formula for blood-alcohol content before getting too drunk, which he describes below.

// BAC calculator Formula:

// BAC% = (A × 5.14 / W × r) - .015 × H 

// A: Total alcohol consumed, in ounces (oz)
// W: Body weight, in pounds (lbs)
// r: The alcohol distribution ratio, 0.73 for man, and 0.66 for women
// H: Time passed since drinking, in hours
// Source:

// http://www.endmemo.com/medical/bac.php

// Alcohol consumed will be passed as a drinks object with two properties: ounces (the total volume of beverage consumed in ounces), and abv (the % of alcohol by volume of the beverage as a floating point number--such as 0.05 for 5% abv beer or 0.4 for 40% abv whisky). For simplicity, Bob assures us that he drinks the same kind of beverage each time he drinks.

// The gender will be passed as a string, either "male" or "female".

// Output must be returned as a number data-type, greater than or equal to 0, with up to 4 decimal places. No error handling will be required.

// Using these parameters, create the function that will calculate Bob's and other partier's BAC.

const bloodAlcoholContent = ({ ounces, abv }, weight, sex, time) =>
  Number(
    (
      ounces * abv * 5.14 / weight * (sex === 'male' ? 0.73 : 0.66) -
      0.015 * time
    ).toFixed(4)
)




// ======8kyu Training JS #9: loop statement --while and do..while =======//

// Coding in function padIt, function accept 2 parameters:

// str, it's a string representing the string to pad, we need pad some "*" at leftside or rightside of str
// n, it's a number, how many times to pad the string.
// Behaviour
// You need to write a loop statement within the function that loops n times. Each time through the loop it will add one * to str, alternating on which side it is padded: the first time will add a * to the left side of str, the second time will add a * to the right side, and so on.

// Finally, return the padded string.


const padIt = (str, n) => {
  let result = str
  let i = 0

  while (i < n) {
    if (i % 2 === 0) {
      result = `*${result}`
    } else {
      result = `${result}*`
    }

    i += 1
  }

  return result
}


//=======noobCode 02: TRICKY QUESTIONS ( primitives and operator precedence)======//

// 1 < 2 < 3 === true right? but could

// 3 < 2 < 1 === true too??

// Here's your puzzle: Write a function greaterThanLessThan that takes three arguments, a, b, and c, and returns a boolean (true or false), such that:

// greaterThanLessThan(1, 2 3) === true
// and

// greaterThanLessThan(3, 2 1) === true
// But also

// graterThanLessThan(-3, -2, -1) == false
// with more examples on the expected behavior in the test cases.

// Hints
// Arguments do not necessarily have to be in strict ascending or descending order, as indicated by the example test cases.
// Check out the included test cases - not all arguments are going to return true! It's up to you to figure out which ones do and which ones don't.

// This challenge is a LOT easier than it might seem at first. Don't focus too much on building functions - just pay attention to precedence.
// Best of luck!



function greaterThanLessThan (a,b,c) {
  return a<b<c
}

// =======8kyu Training JS #12: loop statement --for..in and for..of ======//

// Coding in function giveMeFive, function accept 1 parameter:obj, it's an object.

// You need to the traverse the obj, if the length of the object key equals to 5, then push the key value to the array (you need to define the array by yourself, this time I won't help you). Additionally push the value to the array as well, if the length of the value is equal to 5.

// Return the five after works finished.

// You should use for..in in your code, otherwise, your solution may not pass this kata. Don't learn bad habits from those lazy guys ;-)

function giveMeFive(obj){
  var arr=[];
 for (var key in obj){
 if (key.length==5) arr.push(key);
 if (obj[key].length==5) arr.push(obj[key]);
 }
 return arr;
 
}


// ======8kyu Training JS #13: Number object and its properties ======//

// Coding in function whatNumberIsIt. function accept 1 parameter:n. it's a number.

// To judge the number n. If n is one of the above five constants, return one of these string:

// "Input number is Number.MAX_VALUE"
// "Input number is Number.MIN_VALUE"
// "Input number is Number.NaN"
// "Input number is Number.NEGATIVE_INFINITY"
// "Input number is Number.POSITIVE_INFINITY"
// Other values should return "Input number is xxx". xxx means this number.

// For example:

// whatNumberIsIt(1/0) should return "Input number is Number.POSITIVE_INFINITY"
// whatNumberIsIt(100) should return "Input number is 100"

function whatNumberIsIt(n){
  if (n===Infinity) return "Input number is Number.POSITIVE_INFINITY";
  else if (n===-Infinity) return "Input number is Number.NEGATIVE_INFINITY";
  else if (n==1.7976931348623157e+308) return "Input number is Number.MAX_VALUE";
  else if (isNaN(n)) return "Input number is Number.NaN";
  else if (n==5e-324) return "Input number is Number.MIN_VALUE";
  else return ("Input number is "+n);
}


// ======8kyu Training JS #14: Methods of Number object--toString() and toLocaleString() ======//

// Coding in function colorOf. function accept 3 parameter:r g b. It means value of color red green and blue. the value range is 0-255.

// Use toString(16) Convert numbers r g b to hex string form. at last, combine them to a web color code and return it.

// the color code should starting with "#". and then use 2 characters per color.

// for example:

// colorOf(255,0,0) should return "#ff0000"
// colorOf(0,111,0) should return "#006f00"
// colorOf(1, 2 ,3) should return "#010203"
// That's all of your work. My work is print your color code on your screen

function colorOf(r,g,b){
  r = r.toString(16);
  g = g.toString(16);
  b = b.toString(16);
  if (r.length < 2) {r = "0" + r};
  if (g.length < 2) {g = "0" + g};
  if (b.length < 2) {b = "0" + b};
 
    return "#"+r+g+b;
}
