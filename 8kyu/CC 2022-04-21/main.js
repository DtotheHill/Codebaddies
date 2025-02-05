//====== 8kyu 5 Without Numbers ======//

// Write a function that always returns 5

// Sounds easy right? Just bear in mind that you can't use any of the following characters: 0123456789*+-/

function unusualFive() {
  return 'bacon'.length
}


//====== 8kyu 101 Dalmatians - squash the bugs, not the dogs! ======//

// Your friend has been out shopping for puppies (what a time to be alive!)... He arrives back with multiple dogs, and you simply do not know how to respond!

// By repairing the function provided, you will find out exactly how you should respond, depending on the number of dogs he has.

// The number of dogs will always be a number and there will always be at least 1 dog.

// original//

// function howManyDalmations(numer :
  
//   var dogs ["Hardly any", "More than a handful!", "Woah that's a lot of dogs!", "101 DALMATIONS!!!"];
  
//   var respond = number <= 10 ? dogs[0] (number <= 50 ? dogs[1] : (number = 101  dogs[3] : dogs[2]
  
// return respond



// Solution//
function howManyDalmatians(number){
  
  var dogs = ["Hardly any", "More than a handful!", "Woah that's a lot of dogs!", "101 DALMATIANS!!!"];
  
  var respond = (number <= 10) ? dogs[0] : (number <= 50) ? dogs[1] : (number == 101) ? dogs[3] : dogs[2]
  
return respond
}

// ====== 8kyu Filling an array(part 1) =======//

// We want an array, but not just any old array, an array with contents!

// Write a function that produces an array with the numbers 0 to N-1 in it.

// For example, the following code will result in an array containing the numbers 0 to 4:

// arr(5) // => [0,1,2,3,4]

const arr = N => {
  let arr = []
  for (let i = 0; i < N; i ++){
    arr.push(i)
  }
  return arr
}


//====== Exclamation marks series #11: Replace all vowel to exclamation mark in the sentence ======//


// Replace all vowel to exclamation mark in the sentence. aeiouAEIOU is vowel.

function replace(s){
  let vowels = ['a','e','i','o','u','A','E','I','O','U']
  return s.split('').map(item => vowels.includes(item) ? '!':item).join('')
  
}



// ====== 8kyu Hello name or world ======//

// Define a method hello that returns "Hello, Name!" to a given name, or says Hello, World! if name is not given (or passed as an empty String).

// Assuming that name is a String and it checks for user typos to return a name with a first capital letter (Xxxx).

function hello(name) {
  if (!name){
    return 'Hello, World!'
  } else{
  return `Hello, ${name[0].toUpperCase() + name.slice(1).toLowerCase()}!`
  }
}


// ====== 8kyu Basic Mathematical Operations ======//

// Your task is to create a function that does four basic mathematical operations.

// The function should take three arguments - operation(string/char), value1(number), value2(number).
// The function should return result of numbers after applying the chosen operation.

function basicOp(operation, value1, value2) {
  switch (operation) {
      case "+":
        return value1 + value2;
        break;
      case "-":
        return value1 - value2;
        break;
      case "*":
        return value1 * value2;
        break;
      case "/":
        return value1 / value2;
        break;
  }
}


//====== 8kyu get character from ASCII Value ======//

// Write a function get_char() / getChar() which takes a number and returns the corresponding ASCII char for that value.


function getChar(c){
  return String.fromCharCode(c)
}


// ====== 8kyu Exclamation marks series #1: Remove an exclamation mark from the end of string ====== //

// Remove an exclamation mark from the end of a string. For a beginner kata, you can assume that the input data is always a string, no need to verify it.

function remove (string) {
  if (string[string.length -1] == '!' ){
    return string.slice(0, -1)
  }else {
    return string
  }
}

//====== 8kyu Drink About ======//

// Kids drink toddy.
// Teens drink coke.
// Young adults drink beer.
// Adults drink whisky.
// Make a function that receive age, and return what they drink.

// Rules:

// Children under 14 old.
// Teens under 18 old.
// Young under 21 old.
// Adults have 21 or more.

function peopleWithAgeDrink(old) {
  if (old < 14){
    return 'drink toddy'
  }else if (old < 18){
    return 'drink coke'
  }else if (old < 21){
    return 'drink beer'
  }else {
    return 'drink whisky'
  }
};

// ====== 8kyu Hex to Decimal ======//

//Complete the function which converts hex number (give as a string) to a decimal number

function hexToDec(hexString){
  return parseInt(hexString, 16);
}

// ===== 8kyu No zeros for heros ======//

// Numbers ending with zeros are boring.

// They might be fun in your world, but not here.

// Get rid of them. Only the ending ones.


function noBoringZeros(n) {
  if (n == 0){
    return 0
  }else
  while (n % 10 === 0){
    n /= 10
  }
  return n
}


// ====== 8kyu Grasshopper Debug ======//

// Debug celsius converter
// Your friend is traveling abroad to the United States so he wrote a program to convert fahrenheit to celsius. Unfortunately his code has some bugs.

// Find the errors in the code to get the celsius converter working properly.

// To convert fahrenheit to celsius:

// celsius = (fahrenheit - 32) * (5/9)
// Remember that typically temperatures in the current weather conditions are given in whole numbers. It is possible for temperature sensors to report temperatures with a higher accuracy such as to the nearest tenth. Instrument error though makes this sort of accuracy unreliable for many types of temperature measuring sensors.

function weatherInfo (temp) {
  let c = (temp - 32) * (5/9)
  if (c <= 0){
    return (c + " is freezing temperature")
  }else{
    return (c + " is above freezing temperature")
  }
}


//======= 8kyu Vowel remover ======//

// Create a function called shortcut to remove the lowercase vowels (a, e, i, o, u ) in a given string.

function shortcut (string) {
  let vowels = ['a','e','i','o','u']
  return string.split('').filter(item => !vowels.includes(item)).join('')
}

//====== 8kyu Enumerable Magic #25 - Take the First N Elements ======//


// Create a function that accepts a list/array and a number n, and returns a list/array of the first n elements from the list/array.

function take(arr, n) {
  return arr.slice(0,n)
}


//====== 8kyu Is this my tail ======//

// Some new animals have arrived at the zoo. The zoo keeper is concerned that perhaps the animals do not have the right tails. To help her, you must correct the broken function to make sure that the second argument (tail), is the same as the last letter of the first argument (body) - otherwise the tail wouldn't fit!

// If the tail is right return true, else return false.

// The arguments will always be strings, and normal letters.

// For Haskell, body has the type of String and tail has the type of Char. For Go, body has type string and tail has type rune.


// original
// function correctTail(bod, tail ;
  
//   sub = body.substr(bodylength-(tail.length)
  
//   if sub = tail) ;
//     return true
//   }
//   else 
//     return false



    //solution
function correctTail(body, tail){ 
  let sub = body[body.length -1]
  if (sub == tail){
    return true
  }
  else{ 
    return false
  }
}

//====== 8kyu A wold in sheeps's clothing ======//

// Wolves have been reintroduced to Great Britain. You are a sheep farmer, and are now plagued by wolves which pretend to be sheep. Fortunately, you are good at spotting them.

// Warn the sheep in front of the wolf that it is about to be eaten. Remember that you are standing at the front of the queue which is at the end of the array:

// [sheep, sheep, sheep, sheep, sheep, wolf, sheep, sheep]      (YOU ARE HERE AT THE FRONT OF THE QUEUE)
//    7      6      5      4      3            2      1
// If the wolf is the closest animal to you, return "Pls go away and stop eating my sheep". Otherwise, return "Oi! Sheep number N! You are about to be eaten by a wolf!" where N is the sheep's position in the queue.

// Note: there will always be exactly one wolf in the array.

function warnTheSheep(queue) {
  let sheepPositon = queue.length-queue.indexOf('wolf') -1
  if (sheepPositon == 0){
    return 'Pls go away and stop eating my sheep'
  }else {
  return `Oi! Sheep number ${sheepPositon}! You are about to be eaten by a wolf!`
  }
}


// ====== 8kyu Reversing words in a string ======//

// You need to write a function that reverses the words in a given string. A word can also fit an empty string. If this is not clear enough, here are some examples:

// As the input may have trailing spaces, you will also need to ignore unneccesary whitespace.

function reverse(string){
  return string.split(' ').reverse().join(' ')
}


// ====== 8kyu Multi table for number ======//

// Your goal is to return multiplication table for number that is always an integer from 1 to 10.
function multiTable(number) {
  let array = []
  for (let i =1; i <= 10; i++){
    array.push(`${i} * ${number} = ${number * i}`)
  }
  return array.join('\n')
}


// ====== 8kyu Holiday VIII - Duty Free ======//

// The purpose of this kata is to work out just how many bottles of duty free whiskey you would have to buy such that the saving over the normal high street price would effectively cover the cost of your holiday.

// You will be given the high street price (normPrice), the duty free discount (discount) and the cost of the holiday.

// For example, if a bottle cost £10 normally and the discount in duty free was 10%, you would save £1 per bottle. If your holiday cost £500, the answer you should return would be 500.

// All inputs will be integers. Please return an integer. Round down.

function dutyFree(normPrice, discount, hol){
  let dfPrice = (normPrice*(discount/100))
  return Math.floor(hol/dfPrice)
}

//====== 8kyu Replace all donts ======//

// The code provided is supposed replace all the dots . in the specified String str with dashes -

// But it's not working properly.

// Task
// Fix the bug so we can all go home early.

// Notes
// String str will never be null.


// original
// var replaceDots = function(str) {
//   return str.replace(/./, '-');
// }

// solution
var replaceDots = function(str) {
  return str.replace(/\./g, '-');
}

// ====== 8kyu Dollars and Cents ======//

// The company you work for has just been awarded a contract to build a payment gateway. In order to help move things along, you have volunteered to create a function that will take a float and return the amount formatting in dollars and cents.

// 39.99 becomes $39.99

// The rest of your team will make sure that the argument is sanitized before being passed to your function although you will need to account for adding trailing zeros if they are missing (though you won't have to worry about a dangling period).

function formatMoney(amount){
  return '$' + amount.toFixed(2)
}

// ====== 8kyu Training JS #2: Basic data types--Number ======//

// Task
// I've written five function equal1,equal2,equal3,equal4,equal5, defines six global variables v1 v2 v3 v4 v5 v6, every function has two local variables a,b, please set the appropriate value for the two variables(select from v1--v6), making these function return value equal to 100. the function equal1 is completed, please refer to this example to complete the following functions.


var v1=50;v2=100,v3=150,v4=200,v5=2,v6=250
function equal1(){
  var a=v1   
  var b=v1   
  return a+b;
}
//Please refer to the example above to complete the following functions
function equal2(){
  var a=v3   //set number value to a
  var b=v1   //set number value to b
  return a-b;
}
function equal3(){
  var a=v1   //set number value to a
  var b=v5   //set number value to b
  return a*b;
}
function equal4(){
  var a=v4   //set number value to a
  var b=v5   //set number value to b
  return a/b;
}
function equal5(){
  var a=v2   //set number value to a
  var b=v6   //set number value to b
  return a%b;
}

//====== 8kyu Pre-FizzBuzz Workout #1 ======//

// This is the first step to understanding FizzBuzz.

// Your inputs: a positive integer, n, greater than or equal to one. n is provided, you have NO CONTROL over its value.

// Your expected output is an array of positive integers from 1 to n (inclusive).

// Your job is to write an algorithm that gets you from the input to the output.

function preFizz(n) {
  let arr=[]
  for (let i =1; i<=n; i++){
  arr.push(i)
  }
  return arr
}


// ====== 8kyu Covert to Binary =====//

// Given a non-negative integer n, write a function to_binary/ToBinary which returns that number in a binary format.

// to_binary(1)  /* should return 1 */
// to_binary(5)  /* should return 101 */
// to_binary(11) /* should return 1011 */

function toBinary(n){
  return +n.toString(2)
}


// ====== 8kyu CSV representation of array ======//

// Create a function that returns the CSV representation of a two-dimensional numeric array.

function toCsvText(array) {
  for (let i = 0; i < array.length; i++){
    array[i] = array[i].join(',')
  }
  return array.join('\n')
}

// ====== NBA full 48 mins avg ======//

// An NBA game runs 48 minutes (Four 12 minute quarters). Players do not typically play the full game, subbing in and out as necessary. Your job is to extrapolate a player's points per game if they played the full 48 minutes.

// Write a function that takes two arguments, ppg (points per game) and mpg (minutes per game) and returns a straight extrapolation of ppg per 48 minutes rounded to the nearest tenth. Return 0 if 0.

function pointsPer48(ppg, mpg) {  
  if (ppg == 0){
    return 0
  }else{
    return Math.round(((ppg/mpg)*48)*10)/10
  }
}