// ======= 8kyu Remove first and last character part two ======//

// This is a spin off of my first kata.

// You are given a string containing a sequence of character sequences separated by commas.

// Write a function which returns a new string containing the same character sequences except the first and the last ones but this time separated by spaces.

// If the input string is empty or the removal of the first and last items would cause the resulting string to be empty, return an empty value (represented as a generic value NULL in the examples below).

function array(arr){
  return arr.split(',').slice(1,-1).join(' ') || null
}


// ======8kyu Smallest unused ID ======//

// Hey awesome programmer!

// You've got much data to manage and of course you use zero-based and non-negative ID's to make each data item unique!

// Therefore you need a method, which returns the smallest unused ID for your next new data item...

// Note: The given array of used IDs may be unsorted. For test reasons there may be duplicate IDs, but you don't have to find or remove them!

// Go on and code some pure awesomeness!


function nextId(ids){
  const used = new Set(ids)
  
  for (let i=0; i<=ids.length; i++){
    if (!used.has(i)){
      return i
    }
  }
  return ids
}


// ====== 8kyu Training JS #5: Basic data types--Object ======//

// Give you a function animal, accept 1 parameter:obj like this:

// {name:"dog",legs:4,color:"white"}
// and return a string like this:

// "This white dog has 4 legs."
// When you have finished the work, click "Run Tests" to see if your code is working properly.

// In the end, click "Submit" to submit your code pass this kata.

function animal(obj){
  return `This ${obj.color} ${obj.name} has ${obj.legs} legs.`
}


// ====== 8kyu Leonardo Dicaprio and Oscars ======//

// if oscar was (integer) 88, you have to return "Leo finally won the oscar! Leo is happy".
// if oscar was 86, you have to return "Not even for Wolf of wallstreet?!"
// if it was not 88 or 86 (and below 88) you should return "When will you give Leo an Oscar?"
// if it was over 88 you should return "Leo got one already!"

function leo(o){
  if (o==88) return "Leo finally won the oscar! Leo is happy"
  if (o<88&&o!==86) return "When will you give Leo an Oscar?"
  if (o==86) return "Not even for Wolf of wallstreet?!"
  if (o>=88) return "Leo got one already!"
}