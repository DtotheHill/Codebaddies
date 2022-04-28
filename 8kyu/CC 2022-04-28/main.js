// ====== 8kyu Pillars ======//

// There are pillars near the road. The distance between the pillars is the same and the width of the pillars is the same. Your function accepts three arguments:

// number of pillars (≥ 1);
// distance between pillars (10 - 30 meters);
// width of the pillar (10 - 50 centimeters).
// Calculate the distance between the first and the last pillar in centimeters (without the width of the first and last pillar).

function pillars(pills, x, w) {
  let distancesInBetween = pills -1;
  let totalDistance = (pills*w) + (distancesInBetween * x * 100)
  let distance = totalDistance - (2*w)
  return pills === 1 ? 0 :distance;  
}




// ====== 8kyu String cleaning ======//

// Your boss decided to save money by purchasing some cut-rate optical character recognition software for scanning in the text of old novels to your database. At first it seems to capture words okay, but you quickly notice that it throws in a lot of numbers at random places in the text.

// Examples (input -> output)
// '! !'                 -> '! !'
// '123456789'           -> ''
// 'This looks5 grea8t!' -> 'This looks great!'

function stringClean(s){
  return s.replace(/\d/g, "");
}



// ====== 8kyu Name Shuffler ======//

// Write a function that returns a string in which firstname is swapped with last name.

// nameShuffler('john McClane'); => "McClane john"

function nameShuffler(str){
  return str.split(' ').reverse().join(' ')
}



// ====== 8kyu Semi-Optional ======//

// We have implemented a function wrap(value) that takes a value of arbitrary type and wraps it in a new JavaScript Object or Python Dict setting the 'value' key on the new Object or Dict to the passed-in value.

function wrap(value) {
  return({value})
}

// ====== 8kyu Points of Reflection =======//

// "Point reflection" or "point symmetry" is a basic concept in geometry where a given point, P, at a given position relative to a mid-point, Q has a corresponding point, P1, which is the same distance from Q but in the opposite direction.

// Task
// Given two points P and Q, output the symmetric point of point P about Q. Each argument is a two-element array of integers representing the point's X and Y coordinates. Output should be in the same format, giving the X and Y coordinates of point P1. You do not have to validate the input.

function symmetricPoint([a,b],[c,d]) {
  return [c * 2 - a, d * 2 - b]
}

//======8kyu Is the date today ======// 


// Write a simple function that takes a Date as a parameter and returns a Boolean representing whether the date is today or not.

// Make sure that your function does not return a false positive by only checking the day.

function isToday(date) {
  return new Date().toDateString() === date.toDateString()
}


// ====== 8kyu A strange trip to the market ======//

// You're on your way to the market when you hear beautiful music coming from a nearby street performer. The notes come together like you wouln't believe as the musician puts together patterns of tunes. As you wonder what kind of algorithm you could use to shift octaves by 8 pitches or something silly like that, it dawns on you that you have been watching the musician for some 10 odd minutes. You ask, "how much do people normally tip for something like this?" The artist looks up. "It's always gonna be about tree fiddy."

// It was then that you realize the musician was a 400 foot tall beast from the paleolithic era! The Loch Ness Monster almost tricked you!

// There are only 2 guaranteed ways to tell if you are speaking to The Loch Ness Monster: A) it is a 400 foot tall beast from the paleolithic era; B) it will ask you for tree fiddy.

// Since Nessie is a master of disguise, the only way accurately tell is to look for the phrase "tree fiddy". Since you are tired of being grifted by this monster, the time has come to code a solution for finding The Loch Ness Monster. Note that the phrase can also be written as "3.50" or "three fifty".

function isLockNessMonster(s) {
  return s.includes("tree fiddy") || s.includes("3.50");
}

// ======= 8kyu Add new item (collections are passed by reference) ======//

// Add an item to the list:

// AddExtra method adds a new item to the list and returns the list. The new item can be any object, and it does not matter. (lets say you add an integer value, like 13)

// In our test case we check to assure that the returned list has one more item than the input list. However the method needs some modification to pass this test.

// P.S. You have to create a new list and add a new item to that. (This Kata is originally designed for C# language and it shows that adding a new item to the input list is not going to work, even though the parameter is passed by value, but the value is poining to the reference of list and any change on parameter will be seen by caller)

function addExtra( listOfNumbers ){
  return [...listOfNumbers,1]
}


// ====== Beginner Series #2 Clock ======//

// Clock shows h hours, m minutes and s seconds after midnight.

// Your task is to write a function which returns the time since midnight in milliseconds.

// Example:
// h = 0
// m = 1
// s = 1

// result = 61000


function past(h, m, s){
  return ((h*3600) + (m*60) + s)*1000
}



// ====== Beginner Series #1 School Paperwork =======//

// Your classmates asked you to copy some paperwork for them. You know that there are 'n' classmates and the paperwork has 'm' pages.

// Your task is to calculate how many blank pages do you need. If n < 0 or m < 0 return 0.

function paperwork(n, m) {
  if (n > 0 && m > 0){
    return n * m
  }else {
    return 0
  }
}

// ====== DNA to RNA Conversion ======//

function DNAtoRNA(dna) {
  return dna.split("T").join("U");
}

// ====== Swap Values ======//

// I would like to be able to pass an array with two elements to my swapValues function to swap the values. However it appears that the values aren't changing.

// Can you figure out what's wrong here?

function swapValues(arr) {
  return arr.reverse()
}


// ====== 8kyu Plural ======//

// We need a simple function that determines if a plural is needed or not. It should take a number, and return true if a plural should be used with that number or false if not. This would be useful when printing out a string such as 5 minutes, 14 apples, or 1 sun.

// You only need to worry about english grammar rules for this kata, where anything that isn't singular (one of something), it is plural (not one of something).

function plural(n) {
  if (n === 1){
    return false
  }else {
    return true
  }
}

// ====== 8kyu Suraface Area and Volume of a box ======//

// Write a function that returns the total surface area and volume of a box as an array: [area, volume]

function getSize(l,w,d){
  let area = 2*l*w + 2*l*d + 2*d*w
  let volume = l * w * d
  return[area, volume]
}


// ====== 8kyu Sleigh Authentication ======//

// Christmas is coming and many people dreamed of having a ride with Santa's sleigh. But, of course, only Santa himself is allowed to use this wonderful transportation. And in order to make sure, that only he can board the sleigh, there's an authentication mechanism.

// Your task is to implement the authenticate() method of the sleigh, which takes the name of the person, who wants to board the sleigh and a secret password. If, and only if, the name equals "Santa Claus" and the password is "Ho Ho Ho!" (yes, even Santa has a secret password with uppercase and lowercase letters and special characters :D), the return value must be true. Otherwise it should return false.


function Sleigh() {}

Sleigh.prototype.authenticate = function(name, password) {
  if (name === 'Santa Claus' && password === 'Ho Ho Ho!'){
    return true
  }else {
    return false
  }
};

// ======= L1: Bartender, drinks! =======//

// Complete the function that receives as input a string, and produces outputs according to the following table:

// Input	Output
// "Jabroni"	"Patron Tequila"
// "School Counselor"	"Anything with Alcohol"
// "Programmer"	"Hipster Craft Beer"
// "Bike Gang Member"	"Moonshine"
// "Politician"	"Your tax dollars"
// "Rapper"	"Cristal"
// anything else	"Beer"
// Note: anything else is the default case: if the input to the function is not any of the values in the table, then the return value should be "Beer".

// Make sure you cover the cases where certain words do not show up with correct capitalization. For example, the input "pOLitiCIaN" should still return "Your tax dollars".

function getDrinkByProfession(param) {
  param = param.toLowerCase();
  
  switch(param) {
    case "jabroni": return "Patron Tequila";
    case "school counselor": return "Anything with Alcohol";
    case "programmer": return "Hipster Craft Beer";
    case "bike gang member": return "Moonshine";
    case "politician": return "Your tax dollars";
    case "rapper": return "Cristal";
    default: return "Beer";
  }
}

//======8kyu SpeedCode #2 - Array Madness ======//

// Given two integer arrays a, b, both of length >= 1, create a program that returns true if the sum of the squares of each element in a is strictly greater than the sum of the cubes of each element in b.

function arrayMadness(a,b) {
  let squares = 0
  let cubes = 0
  
  for (let i =0; i<a.length; i++){
    squares +=Math.pow(a[i],2)
  } 
   for (let j =0; j<b.length; j++){
     cubes += Math.pow(b[j],3) 
   }
   if (squares > cubes){
    return true
  }else {
    return false
  }
 }

// ======8kyu Find the Difference in Age between Oldest and Youngest Family Members ======//

// At the annual family gathering, the family likes to find the oldest living family member’s age and the youngest family member’s age and calculate the difference between them.

// You will be given an array of all the family members' ages, in any order. The ages will be given in whole numbers, so a baby of 5 months, will have an ascribed ‘age’ of 0. Return a new array (a tuple in Python) with [youngest age, oldest age, difference between the youngest and oldest age].

 function differenceInAges(ages){
  return [Math.min(...ages),Math.max(...ages),Math.max(...ages)-Math.min(...ages)]
}