// ====== 7kyu Highest and lowest ======//

// In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

function highAndLow(numbers){
  let nums = numbers.split(' ')
  return `${Math.max(...nums)} ${Math.min(...nums)}`
}



// ====== 8kyu Remove exclamation marks ======//

function removeExclamationMarks(s) {
  return s.replace(/!/g,'')
}


// ====== 8kyu Get Planet Name By ID ======//

function getPlanetName(id){
  switch(id){
    case 1:
      return'Mercury'
    case 2:
      return'Venus'
    case 3:
      return'Earth'
    case 4:
      return'Mars'
    case 5:
      return'Jupiter'
    case 6:
      return 'Saturn'
    case 7:
     return 'Uranus'
    case 8:
      return'Neptune'
  }
}


// ====== 8kyu Double Char ======//

// Given a string, you have to return a string in which each character (case-sensitive) is repeated once.

function doubleChar(str) {
  return str.split('').map((letter)=> `${letter}${letter}`).join('')
}



// ====== 8kyu Parse nice int from char problem ======//

// You ask a small girl,"How old are you?" She always says, "x years old", where x is a random number between 0 and 9.

// Write a program that returns the girl's age (0-9) as an integer.

// Assume the test input string is always a valid string. For example, the test input may be "1 year old" or "5 years old". The first character in the string is always a number.

function getAge(inputString){
  return parseInt(inputString)
}


// ====== 8kyu The feast of Many Beasts ======//

// All of the animals are having a feast! Each animal is bringing one dish. There is just one rule: the dish must start and end with the same letters as the animal's name. For example, the great blue heron is bringing garlic naan and the chickadee is bringing chocolate cake.

// Write a function feast that takes the animal's name and dish as arguments and returns true or false to indicate whether the beast is allowed to bring the dish to the feast.

// Assume that beast and dish are always lowercase strings, and that each has at least two letters. beast and dish may contain hyphens and spaces, but these will not appear at the beginning or end of the string. They will not contain numerals.


function feast(beast, dish) {
  return beast[0] === dish[0] && beast[beast.length - 1] === dish[dish.length - 1]
}



//======8kyu Short long short ======//

// Given 2 strings, a and b, return a string of the form short+long+short, with the shorter string on the outside and the longer string on the inside. The strings will not be the same length, but they may be empty ( zero length ).

function solution(a, b) {
  return a.length < b.length ? a + b + a : b + a + b
}

//======8kyu Expressions Matter ======//

// Given three integers a ,b ,c, return the largest number obtained after inserting the following operators and brackets: +, *, ()
// In other words , try every combination of a,b,c with [*+()] , and return the Maximum Obtained

function expressionMatter(a, b, c) {
  return Math.max( a+b+c, (a+b)*c, a*(b+c), a*b*c ) ;
}

// ====== 8kyu Switch it up ======//

// When provided with a number between 0-9, return it in words.

// Input :: 1

// Output :: "One".

function switchItUp(number){
  var words = ['Zero', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine'];
  return words[number];
}



// ======= 8kyu altERnaTIng cAsE <=> ALTerNAtiNG CaSe ======//

// Define String.prototype.toAlternatingCase (or a similar function/method such as to_alternating_case/toAlternatingCase/ToAlternatingCase in your selected language; see the initial solution for details) such that each lowercase letter becomes uppercase and each uppercase letter becomes lowercase.

String.prototype.toAlternatingCase = function () {
  return this.split("").map(a => a === a.toUpperCase()? a.toLowerCase(): a.toUpperCase()).join('')
}


// 8kyu Unfinished Loop -Bug fixing #1 ======//

// Oh no, Timmy's created an infinite loop! Help Timmy find and fix the bug in his unfinished for loop!


// Original

// function createArray(number){
//   var newArray = [];
  
//   for(var counter = 1; counter <= number;){
//     newArray.push(counter);
//   }
  
//   return newArray;
// }


// solution
function createArray(number){
  var newArray = [];
  
  for(var i = 1;  i<= number; i++){
    newArray.push(i);
  }
  
  return newArray;
}



//======8kyu My head is at the wrong end =====//

// You're at the zoo... all the meerkats look weird. Something has gone terribly wrong - someone has gone and switched their heads and tails around!

// Save the animals by switching them back. You will be given an array which will have three values (tail, body, head). It is your job to re-arrange the array so that the animal is the right way round (head, body, tail).

// Same goes for all the other arrays/lists that you will get in the tests: you have to change the element positions with the same exact logics

function fixTheMeerkat(arr) {
  return arr.reverse()
}

// ======8kyu Find numbers which are divisible by given number ======//

// Complete the function which takes two arguments and returns all numbers which are divisible by the given divisor. First argument is an array of numbers and the second is the divisor.

function divisibleBy(numbers, divisor){
  return [...numbers].filter(num=>num % divisor === 0)
}

// ====== 8kyu Student's final grade ======//

// Create a function finalGrade, which calculates the final grade of a student depending on two parameters: a grade for the exam and a number of completed projects.

// This function should take two arguments: exam - grade for exam (from 0 to 100); projects - number of completed projects (from 0 and above);

// This function should return a number (final grade). There are four types of final grades:

// 100, if a grade for the exam is more than 90 or if a number of completed projects more than 10.
// 90, if a grade for the exam is more than 75 and if a number of completed projects is minimum 5.
// 75, if a grade for the exam is more than 50 and if a number of completed projects is minimum 2.
// 0, in other cases

function finalGrade (exam, projects) {
  if(exam > 90 || projects > 10){
    return 100
  }else if (exam >75 && projects >= 5){
    return 90
  }else if (exam >50 && projects >=2){
    return 75
  }else {
    return 0
  }
}


// ======8kyu Is the string uppercase? ======?

// Add the isUpperCase method to String to see whether the string is ALL CAPS. For example:

String.prototype.isUpperCase = function() {
  return this.toString()===this.toUpperCase()
}

// ====== 8kyu Welcome! ======//

// Your start-up's BA has told marketing that your website has a large audience in Scandinavia and surrounding countries. Marketing thinks it would be great to welcome visitors to the site in their own language. Luckily you already use an API that detects the user's location, so this is an easy win.

// The Task
// Think of a way to store the languages as a database (eg an object). The languages are listed below so you can copy and paste!
// Write a 'welcome' function that takes a parameter 'language' (always a string), and returns a greeting - if you have it in your database. It should default to English if the language is not in the database, or in the event of an invalid input.

function greet(language) {
	const base ={
english: 'Welcome',
czech: 'Vitejte',
danish: 'Velkomst',
dutch: 'Welkom',
estonian: 'Tere tulemast',
finnish: 'Tervetuloa',
flemish: 'Welgekomen',
french: 'Bienvenue',
german: 'Willkommen',
irish: 'Failte',
italian: 'Benvenuto',
latvian: 'Gaidits',
lithuanian: 'Laukiamas',
polish: 'Witamy',
spanish: 'Bienvenido',
swedish: 'Valkommen',
welsh: 'Croeso'
}
  return base[language] || base.english
}