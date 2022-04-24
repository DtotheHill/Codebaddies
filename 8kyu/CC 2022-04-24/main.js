// ====== 8kyu Mr.Freeze ======//

// There is an object/class already created called MrFreeze. Mark this object as frozen so that no other changes can be made to it.
Object.freeze(MrFreeze)


// ====== 8kyu Formatting decimal places #0 ======//

// Each number should be formatted that it is rounded to two decimal places. You don't need to check whether the input is a valid number because only valid numbers are used in the tests.



function twoDecimalPlaces(n) {
  return (+(n.toFixed(2)))
}


// ====== 8kyu Incorrect division method ======//

// fix the error 


// original 
// const solve = (x, y) => x // y

// solution 
const solve = (x, y) => x / y