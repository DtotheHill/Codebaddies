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