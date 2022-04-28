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