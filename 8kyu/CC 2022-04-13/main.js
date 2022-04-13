//======8kyu - Removing Elements ======//

// Take an array and remove every second element from the array. Always keep the first element and start removing with the next element.

// Example:

// ["Keep", "Remove", "Keep", "Remove", "Keep", ...] --> ["Keep", "Keep", "Keep", ...]

// None of the arrays will be empty, so you don't have to worry about that!

//P: No arrays will be empty. Doesnt matter if they are special character or not since they may be removed, etc. 
//R: Return an array with every other element starting with number 1. That means that it will be all odd numbers.
//E: if given [1,3, 'fish', 'fishsticks', 3] => [1, 'fish', 3]
// if given [9,9,99,999,3] => [9, 99, 3]
// if given [10,14,6,5,19] => [10,6,19]

//P: Make a function that take in an array
function removeEveryOther(arr){
  return arr.filter((elem, index) => {
    return index % 2 === 0;
  });
}






