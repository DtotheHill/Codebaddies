//======= 8kyu - Fundamentals: Return ======//

// Make multiple functions that will return the sum, difference, modulus, product, quotient, and the exponent respectively.

// Please use the following function names:

// addition = add

// multiply = multiply

// division = divide (both integer and float divisions are accepted)

// modulus = mod

// exponential = exponent

// subtraction = subt

// Note: All math operations will be: a (operation) b

const add = (a, b) => a + b;
const subt = (a, b) => a - b;
const divide = (a, b) => a / b;
const multiply = (a, b) => a * b;
const mod = (a, b) => a % b;
const exponent = (a, b) => a ** b;

//====== 8 kyu Cat years, Dog years ======//

// I have a cat and a dog.

// I got them at the same time as kitten/puppy. That was humanYears years ago.

// Return their respective ages now as [humanYears,catYears,dogYears]

// NOTES:

// humanYears >= 1
// humanYears are whole numbers only
// Cat Years
// 15 cat years for first year
// +9 cat years for second year
// +4 cat years for each year after that
// Dog Years
// 15 dog years for first year
// +9 dog years for second year
// +5 dog years for each year after that

let humanYearsCatYearsDogYears = function(humanYears) {
  if (humanYears == 1) return [1, 15, 15]
  if (humanYears == 2) return [2, 24, 24]
  return [humanYears, (humanYears - 2) * 4 + 24, (humanYears - 2 ) * 5 + 24 ]
}


//====== 8kyu Well of Ideas =====//
// For every good kata idea there seem to be quite a few bad ones!

// In this kata you need to check the provided array (x) for good ideas 'good' and bad ideas 'bad'. If there are one or two good ideas, return 'Publish!', if there are more than 2 return 'I smell a series!'. If there are no good ideas, as is often the case, return 'Fail!'.



function well(x){
  switch(x.filter(item => item == 'good').length) {
    case 0:
      return 'Fail!'; break;
    case 1:
    case 2:
      return 'Publish!'; break;
    default:
      return 'I smell a series!'; break;
  }
}