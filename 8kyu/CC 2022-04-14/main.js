//======8kyu - Freudian translator ======//

// You probably know the 42 number as "The answer to life, the universe and everything" according to Douglas Adams' "The Hitchhiker's Guide to the Galaxy". For Freud, the answer was quite different.

// In the society he lived in, people-women in particular- had to repress their sexual needs and desires. This was simply how the society was at the time. Freud then wanted to study the illnesses created by this, and so he digged to the root of their desires. This led to some of the most important psychoanalytic theories to this day, Freud being the father of psychoanalysis.

// Now, basically, when a person hears about Freud, s/he hears "sex" because for Freud, everything was basically related to, and explained by sex.

// In this kata, the toFreud() function will take a string as its argument, and return a string with every word replaced by the explanation to everything, according to Freud. Note that an empty string, or no arguments, should result in the ouput being ""(empty string).


const toFreud = str => str === '' ? '' : str.split(' ').map(e => 'sex').join(' ')

// if str === '' return ''. if not split string and map each element to convert to sex. Join words and put a space between each one. 


//======8kyu - Find Multiples of a Number ======//


// In this simple exercise, you will build a program that takes a value, integer , and returns a list of its multiples up to another value, limit . If limit is a multiple of integer, it should be included as well. There will only ever be positive integers passed into the function, not consisting of 0. The limit will always be higher than the base.

// For example, if the parameters passed are (2, 6), the function should return [2, 4, 6] as 2, 4, and 6 are the multiples of 2 up to 6.

// If you can, try writing it in only one line of code.


function findMultiples(int,limit){
  let result = []
  
  for (let i = int; i<=limit ; i+=int)
    result.push(i)
    
  return result
}

//======8kyu - Find Maximum and Minimum Values of a List ======//

// Your task is to make two functions (max and min, or maximum and minimum, etc., depending on the language) that receive a list of integers as input and return, respectively, the largest and lowest number in that list.

var min = function(list){
  return Math.min(...list)
}

var max = function(list){
  return Math.max(...list)
}



//====== 8 kyu "This" is a problem ======//

// We want to create a constructor function 'NameMe', which takes first name and last name as parameters. The function combines the first and last names and saves the value in "name" property.

// We already implemented that function, but when we actually run the code, the "name" property is accessible, but the "firstName" and "lastName" is not accessible. All the properties should be accessible. Can you find what's wrong with it? A test fixture is also available

// Given //

// function NameMe(first, last) {
//   this.firstName = first;
//   this.lastName = last;
//   return {name: this.firstName + ' ' + this.lastName};
// }

//Solution//

function NameMe(first, last) {
  this.firstName = first;
  this.lastName = last;
  this.name = this.firstName + ' ' + this.lastName
}

//====== 8 kyu Barking Mad ======//

// Teach snoopy and scooby doo how to bark using object methods. Currently only snoopy can bark and not scooby doo.


// Given //
// function Dog (breed) {
//   this.breed = breed;
// }

// var snoopy = new Dog("Beagle");

// snoopy.bark = function() {
//   return "Woof";
// };

// var scoobydoo = new Dog("Great Dane");


//Solution

function Dog (breed) {
  this.breed = breed;
}

var snoopy = new Dog("Beagle");

snoopy.bark = function() {
  return "Woof";
};

var scoobydoo = new Dog("Great Dane");

scoobydoo.bark = function(){
  return 'Woof'
}


// ====== Area of Square ======//

// Complete the function that calculates the area of the red square, when the length of the circular arc A is given as the input. Return the result rounded to two decimals.

// area of square = l x l
// circumference of circle = 2 * pi * radius
// arc = 2 * pi * radius / 4
//radius = (arc * 4) / (2 * pi)

function squareArea(A){
  radius = (A * 4) / (2 * Math.PI)
  return +Math.pow(radius,2).toFixed(2)
}


//====== 8 kyu - Lario and Muigi Pipe Problems ======//

// Issue
// Looks like some hoodlum plumber and his brother has been running around and damaging your stages again.

// The pipes connecting your level's stages together need to be fixed before you receive any more complaints. Each pipe should be connecting, since the levels ascend, you can assume every number in the sequence after the first index will be greater than the previous and that there will be no duplicates.

// Task
// Given the a list of numbers, return the list so that the values increment by 1 for each index up to the maximum value.

// Example
// Input: 1,3,5,6,7,8

// Output: 1,2,3,4,5,6,7,8

function pipeFix(numbers){
  let arr = [];
  for (let i = numbers[0]; i <= numbers[numbers.length - 1]; i++) {
    arr.push(i);
  }
  return arr;
}


//====== 8kyu - What is Between ======//

// Complete the function that takes two integers (a, b, where a < b) and return an array of all integers between the input parameters, including them.


function between(a, b) {
  const increasingArray = []
  for (let i=a; i<=b; i++){
    increasingArray.push(i)
  }
  return increasingArray
}

//====== 8kyu - Returning Strings ======//
// Make a function that will return a greeting statement that uses an input; your program should return, "Hello, <name> how are you doing today?".

// [Make sure you type the exact thing I wrote or the program may not execute properly]

function greet(name){
  return `Hello, ${name} how are you doing today?`;
}


