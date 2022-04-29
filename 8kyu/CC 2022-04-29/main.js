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