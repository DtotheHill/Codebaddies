//  ====== Numerical Palindrome #1 - 7kyu ======//

// A palindrome is a word, phrase, number, or other sequence of characters which reads the same backward as forward. Examples of numerical palindromes are:

// 2332
// 110011
// 54322345

// For a given number num, write a function to test if it's a numerical palindrome or not and return a boolean (true if it is and false if not).

// Return "Not valid" if the input is not an integer or less than 0.

function palindrome(num) { 
    let numReverse = num.toString().split('').reverse().join('')
    if (num < 0 || typeof num !== 'number'){
      return 'Not valid' 
    }else if (num === Number(numReverse)){
      return true
    }else {
      return false
    }
  } 


  //shortend best practice//

  const palindrome = n => {
    if (typeof n !== 'number' || n < 0) return "Not valid"
    return String(n).split('').reverse().join('') === String(n)
  }