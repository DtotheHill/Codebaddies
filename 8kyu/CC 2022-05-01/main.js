// ======= 8kyu Exclamation marks series #4: Remove all exclamation marks from sentence but ensure a exclamation mark at the end of string ======//

// Remove all exclamation marks from sentence but ensure a exclamation mark at the end of string. For a beginner kata, you can assume that the input data is always a non empty string, no need to verify it.

const remove = s => `${s.replace(/!+/g, '')}!`

// ====== 8kyu  Exclamation marks series #2: Remove all exclamation marks from the end of sentence =====//

// Remove all exclamation marks from the end of sentence.

function remove(s){
  return s.replace(/!*$/g,'')
}




// ====== 8kyu Enumerable Magic #1 - True for All? ======//

// Create a method all which takes two params:

// a sequence
// a function (function pointer in C)
// and returns true if the function in the params returns true for every element in the sequence. Otherwise, it should return false. If the sequence is empty, it should return true, since technically nothing failed the test.


function all( arr, fun ){
  return arr.every(fun)
}

// ====== 8kyu Multiple of index ======//

// Return a new array consisting of elements which are multiple of their own index in input array (length > 1).


function multipleOfIndex(array) {
  return array.filter((num,i)=> num % i === 0)
}
 

// ======8kyu Geometry Basics: Distance between points in 2D ======//

// This series of katas will introduce you to basics of doing geometry with computers.

// Point objects have x and y attributes (X and Y in C#) attributes.

// Write a function calculating distance between Point a and Point b.

// Tests round answers to 6 decimal places.

function distanceBetweenPoints(a, b) {
  return Math.hypot(a.x - b.x, a.y - b.y)
}

// ====== 8kyu pick a set of first elements ======//

// Write a function to get the first elements of asequence. Passing a parameter n (default=1) will return the first n elements of the sequence.

// If n == 0 return an empty sequence []

function first(arr, n=1) {
  return arr.slice(0,n)
}

//======8kyu Logical calculator ======//

// Your Task
// Given an array of Boolean values and a logical operator, return a Boolean result based on sequentially applying the operator to the values in the array.

const operations={
  AND: (a,b)=> a && b,
  OR: (a,b)=> a || b,
  XOR: (a,b)=> a !== b,
}

function logicalCalc(array, op){
  return array.reduce(operations[op])
}


// ======= 8kyu Total pressure calculation ======//



function solution(M1, M2, m1, m2, V, T) {
  M1 = m1 * 0.001/M1;
  M2 = m2 * 0.001/M2;
  T = T + 273.15;
var R = 0.082;

return (((M1 + M2) * R * T) / V) * 1000;
}

//=======8kyu UEFA EURO 2016 ======//

// Finish the uefaEuro2016() function so it return string just like in the examples below:

function uefaEuro2016([t1,t2],[s1,s2]){
  if(s1===s2){
    return `At match ${t1} - ${t2}, teams played draw.`
  }else if (s2>s1){
    return `At match ${t1} - ${t2}, ${t2} won!`
  }else {
    return `At match ${t1} - ${t2}, ${t1} won!`
  }
}

// ====== 8kyu Sum of differences in array ======//

// Your task is to sum the differences between consecutive pairs in the array in descending order.

// For example:

// sumOfDifferences([2, 1, 10])
// Returns 9

// Descending order: [10, 2, 1]

// Sum: (10 - 2) + (2 - 1) = 8 + 1 = 9

// If the array is empty or the array has only one element the result should be 0 (Nothing in Haskell).

function sumOfDifferences(arr) {
  return arr.length > 1 ? Math.max(...arr) - Math.min(...arr) : 0
}

// ====== 8kyu Classic Hello World ======//

// You are given a method called main, make it print the line Hello World!, (yes, that includes a new line character at the end) and don't return anything

// Note that for some languages, the function main is the entry point of the program.

// Here's how it will be tested:

//     Solution.main("parameter1","parameter2");
// Hints:

// Check your references
// Think about the scope of your method
// For prolog you can use write but there are better ways
// If you still don't get it probably you can define main as an attribute of the Solution class that accepts a single argument, and that only prints "Hello World!" without any return.

class Solution{
  static main(){
    console.log('Hello World!')
  }
}

//======8kyu Be ConsciseI - The ternary operator ======//

// Be Concise I - The Ternary Operator
// You are given a function describeAge / describe_age that takes a parameter age (which will always be a positive integer) and does the following:

// If the age is 12 or lower, it return "You're a(n) kid"
// If the age is anything between 13 and 17 (inclusive), it return "You're a(n) teenager"
// If the age is anything between 18 and 64 (inclusive), it return "You're a(n) adult"
// If the age is 65 or above, it return "You're a(n) elderly"
// Your task is to shorten the code as much as possible. Note that submitting the given code will not work because there is a character limit of 137.

// I'll give you a few hints:

// The title itself is a hint - if you're not sure what to do, always research any terminology in this description that you have not heard of!
// Don't you think the whole "You're a(n) <insert_something_here>" is very repetitive? ;) Perhaps we can shorten it?
// Write everything in one line, \n and other whitespaces counts.
// Whatever you do, do not change what the function does. Good luck :)

function describeAge(a) {
  return `You're a(n) ${
    a <= 12 ? 'kid' : a <= 17 ? 'teenager' : a <= 64 ? 'adult' : 'elderly'}`
}