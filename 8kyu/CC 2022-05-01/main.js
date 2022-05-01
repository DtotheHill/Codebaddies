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
 