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


// ======8kyu Training JS #15: Methods of Number object--toFixed(), toExponential() and toPrecision() ======//

// Coding in function howManySmaller, function accept 2 parameter:arr and n. arr is a decimal array. n is a decimal.

// The first mission: let all elements in the array keep two decimal places(No need to convert number n).

// The second mission: Traversal arr, count the number of the element which smaller than n and return it.

// for example:

// howManySmaller([1.234,1.235,1.228],1.24) should return 2
// howManySmaller([1.1888,1.1868,1.1838],1.19) should return 1
// howManySmaller([3.1288,3.1212,3.1205],3.1212) should return 2

function howManySmaller(arr,n){
  return arr.filter( x => x.toFixed(2)<n).length;
  
}

// ====== 8kyu Training JS #16: Methods of String object--slice(), substring() and substr() ======//

// Coding in function cutIt, function accept 1 parameter:arr. arr is a string array.

// The first mission: Traversing arr, find the shortest string length.

// The second mission: Traversing arr again, intercept all strings to the shortest string length(Start from index0). you can use one of slice() substring() or substr() do it. return the result after finished the work.

// for example:

// cutIt(["ab","cde","fgh"]) should return ["ab","cd","fg"]
// cutIt(["abc","defgh","ijklmn"]) should return ["abc","def","ijk"]
// cutIt(["codewars","javascript","java"]) should return ["code","java","java"]

const cutIt = arr => {
  const minLength = Math.min(...arr.map(str => str.length))
  return arr.map(str => str.slice(0, minLength))
}


// ======8kyu Training JS #17: Methods of String object--indexOf(), lastIndexOf() and search() ======//

// Coding in function firstToLast, function accept 2 parameters:str and c. str is a string. c is a char.

// Please return the gap between the first position of c and the last position of c.

// If there are a lot of c in the str, should return a positive integer; If there is only one c in str, should return 0; If there is no c in the str, should return -1. Retrieval should not ignored the case.

// for example:

// firstToLast("ababc","a") should return 2(2-0)
// firstToLast("ababc","c") should return 0(4-4)
// firstToLast("ababc","d") should return -1

function firstToLast(str,c){
  var first=str.indexOf(c),last=str.lastIndexOf(c);
  var lenght=last-first;
  
  return str.includes(c)?lenght:str.indexOf(c);
    
}


//======8kyu Training JS #21: Methods of String object--trim() and the string template ======//


// Coding in function fiveLine, function accept 1 parameter:s. s is a string.

// Please return a string of 5 lines(newline symbol is \n). The first line has one s; Second line have two s; and so on..Fifth line have five s;

// Note1: The two sides of the parameter s may contain some whitespace, please clear them before using s.

// Note2: Using a string template can make your job easier.


const fiveLine = s => {
  const sWithoutWhitespace = s.trim()
  let result = ''

  for (let i = 1; i <= 5; i++) {
    if (i === 5) {
      result += `${sWithoutWhitespace.repeat(i)}`
      break
    }
    result += `${sWithoutWhitespace.repeat(i)}\n`
  }

  return result
}


// ======8kyu Training JS #29: methods of arrayObject---concat() and join() ======//

// Coding in function bigToSmall. function accept 1 parameter arr(2D number array).

// Your task is: First to all, refer to the example above, flat output arr to a one-dimensional array.

// And then sort array in descending order.

// Finally, use the separator ">" to connect the elements into a string.

// Don't complain about the situation like 1>1 is not reasonable, it is just a separator.

// Some example:

// bigToSmall([[1,2],[3,4],[5,6]]) should return "6>5>4>3>2>1"
// bigToSmall([[1,3,5],[2,4,6]]) should return "6>5>4>3>2>1"
// bigToSmall([[1,1],[1],[1,1]]) should return "1>1>1>1>1"

function bigToSmall(arr){
  return [].concat(...arr).sort((a,b)=>b-a).join('>');
 
}

// ======8kyu Training JS #31: methods of arrayObject---isArray() indexOf() and toString() ======//

// Coding in function blackAndWhite. function accept 1 parameter arr(a number array).

// If arr is not an array, function should return:

// "It's a fake array"
// If arr contains elements 5 and 13, function should return:

// "It's a black array"
// If arr contains neither 5 nor 13, function should return:

// "It's a white array"
// Examples
// blackAndWhite(5,13) should return "It's a fake array"
// blackAndWhite([5,13]) should return "It's a black array"
// blackAndWhite([5,12]) should return "It's a white array" 

function blackAndWhite(arr){
  return        !Array.isArray(arr)?"It's a fake array":
  arr.includes(5)&&arr.includes(13)?"It's a black array":"It's a white array"
}

// ====== 8kyu Training JS #34: methods of Math---pow() sqrt() and cbrt() ======//

// Coding in function cutCube. function accept 2 parameter: volume and n. volume is the volume of a cube. If we cut the cube into n block. please determine whether the length of the cube is an integer. return true or false.

// For exmaple:

// volume=27, it can be divided into 27 blocks, each small cube side length is 1

// cutCube(27,27) should return true
// volume=512, it can be divided into 8 blocks, each small cube side length is 4

// cutCube(512,8) should return true
// volume=512, it can be divided into 64 blocks, each small cube side length is 2

// cutCube(512,64) should return true
// If the side length of small cube is not a integer, should return false.

// cutCube(256,8) should return false
// cutCube(27,3) should return false
// cutCube(123,456) should return false
// If it can't be divided evenly into n small cubes, should return false too.

// cutCube(50000,50) should return false
// cutCube(256,4) should return false
// The two examples above seems to meet our requirements, but please note: a cube is unable to evenly divided into 50 pieces or 4 pieces. Only cubic numbers(such as 8,27,64,125,216...) can be used to divide the cube evenly.

const isIntegerCube = n => Number.isInteger(Math.cbrt(n))

const cutCube = (volume, n) => isIntegerCube(n) && isIntegerCube(volume / n)

// ====== 8kyu Simple Change Machine ======//

// Your task is to create a change machine.

// The machine accepts a range of specified coins and notes, it returns change in 20p and 10p coins in the minimum amount of pieces. A 50p for example would return two 20p pieces and one 10p piece. The machine will always try and return change, if you input a 20p for example it will return "10p 10p".

// The machine accepts these coins and notes: £5, £2, £1, 50p, 20p. Any coins and notes which are not accepted by the machine will be returned. If you were to put a £20 note into the machine for example, it would be returned to you and not broken into change.

// This change machine is programmed to accept and distribute strings rather than numbers. The change will be returned as one string with the change separated by single spaces & no commas. The values of the string will be descending.



const changeMe = moneyIn => {
  if (moneyIn === '£5') return `${'20p '.repeat(5 * 5).trimRight()}`
  if (moneyIn === '£2') return `${'20p '.repeat(5 * 2).trimRight()}`
  if (moneyIn === '£1') return `${'20p '.repeat(5 * 1).trimRight()}`
  if (moneyIn === '50p') return `${'20p '.repeat(2).trimRight()} 10p`
  if (moneyIn === '20p') return `${'10p '.repeat(2).trimRight()}`

  return moneyIn
}

// ====== 8kyu Arguments to Binary addition ======//

// Given an array add all the number elements and return the binary equivalent of that sum; to make the code bullet proof anything else than a number should be addeded as 0 since it can't be addeded.

// If your language can handle float binaries assume the array won't contain float or doubles.

// arr2bin([1,2]) == '11'
// arr2bin([1,2,'a']) == '11'
// arr2bin([]) == '0'

// NOTE: NaN is a number too in javascript for decimal, binary and n-ary base


function arr2bin(arr){
  return arr
    .reduce(
      (total, value) => (typeof value === 'number' ? total + value : total),
      0
    )
    .toString(2)
}

// ====== 8kyu Localize The Barycenter of a Triangle ======//

// The medians of a triangle are the segments that unit the vertices with the midpoint of their opposite sides. The three medians of a triangle intersect at the same point, called the barycenter or the centroid. Given a triangle, defined by the cartesian coordinates of its vertices we need to localize its barycenter or centroid.

// The function bar_triang() or barTriang or bar-triang, receives the coordinates of the three vertices A, B and C as three different arguments and outputs the coordinates of the barycenter O in an array [xO, yO]

// This is how our asked function should work: the result of the coordinates should be expressed up to four decimals, (rounded result).

// You know that the coordinates of the barycenter are given by the following formulas.

function barTriang([p1, p2], [p3,p4],[p5,p6]){
  return[+((p1+p5+p3)/3).toFixed(4),+((p2+p4+p6)/3).toFixed(4)]
  
}


// ====== 8kyu Crash override ======//

// Every budding hacker needs an alias! The Phantom Phreak, Acid Burn, Zero Cool and Crash Override are some notable examples from the film Hackers.

// Your task is to create a function that, given a proper first and last name, will return the correct alias.

// Two objects that return a one word name in response to the first letter of the first name and one for the first letter of the surname are already given.

// If the first character of either of the names given to the function is not a letter from A - Z, you should return "Your name must start with a letter from A - Z."

// Sometimes people might forget to capitalize the first letter of their name so your function should accommodate for these grammatical errors.

// var firstName = {A: 'Alpha', B: 'Beta', C: 'Cache' ...}
// var surname = {A: 'Analogue', B: 'Bomb', C: 'Catalyst' ...}

// aliasGen('Larry', 'Brentwood') === 'Logic Bomb'
// aliasGen('123abc', 'Petrovic') === 'Your name must start with a letter from A - Z.'

const firstLetter = str => str[0].toUpperCase()

const isValidName = name => /[a-z]/gi.test(name)

const aliasGen = (fName, sName) => isValidName(fName[0]) && isValidName(sName[0]) ? `${firstName[firstLetter(fName)]} ${surname[firstLetter(sName)]}` : 'Your name must start with a letter from A - Z.'


// ====== 8kyu Days in the year ======//

// A variation of determining leap years, assuming only integers are used and years can be negative and positive.

// Write a function which will return the days in the year and the year entered in a string. For example 2000, entered as an integer, will return as a string 2000 has 366 days

// There are a few assumptions we will accept the year 0, even though there is no year 0 in the Gregorian Calendar.

// Also the basic rule for validating a leap year are as follows

// Most years that can be divided evenly by 4 are leap years.

// Exception: Century years are NOT leap years UNLESS they can be evenly divided by 400.

// So the years 0, -64 and 2016 will return 366 days. Whilst 1974, -10 and 666 will return 365 days.



const yearDays = year =>
    `${year} has ${
      (!(year % 100) && year % 400) || year % 4 ? '365' : '366'
} days`


// ====== 8kyu Training JS #11: loop statement --break,continue =======//

// Coding in function grabDoll. function accept 1 parameter:dolls. it's a string array, a list of some dolls.

// You need traverse dolls by using for loop. If element is "Hello Kitty" or "Barbie doll", you should push it to a bag(bag is an array, I've defined in the function); if it's other strings, we should use continue skip it.

// When the bag has three element, bag is full. You should use break jump out the loop; If bag is not full, you should traverse dolls until the last element.

// Return the bag after for loop finished.

// You should use for, break and continue in your code. otherwise, your solution may not pass this kata.


function grabDoll(dolls){
  let bag=[];

  for(let i = 0; i < dolls.length; i++) {
    if(dolls[i] === 'Hello Kitty' || dolls[i] === 'Barbie doll') { 
      bag.push(dolls[i]) 
      
    }
      if(bag.length === 3) {break;}
    else {continue}
  }
  return bag;
}

// ======8kyu Validate code with simple regex =======//

// Basic regex tasks. Write a function that takes in a numeric code of any length. The function should check if the code begins with 1, 2, or 3 and return true if so. Return false otherwise.

// You can assume the input will always be a number.

function validateCode (code) {
  return /^[1-3]/g.test(code)
}