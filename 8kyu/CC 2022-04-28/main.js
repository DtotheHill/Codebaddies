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