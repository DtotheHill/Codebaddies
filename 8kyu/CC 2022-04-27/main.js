// ====== 7kyu Highest and lowest ======//

// In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

function highAndLow(numbers){
  let nums = numbers.split(' ')
  return `${Math.max(...nums)} ${Math.min(...nums)}`
}



// ====== 8kyu Remove exclamation marks ======//

function removeExclamationMarks(s) {
  return s.replace(/!/g,'')
}


// ====== 8kyu Get Planet Name By ID ======//

function getPlanetName(id){
  switch(id){
    case 1:
      return'Mercury'
    case 2:
      return'Venus'
    case 3:
      return'Earth'
    case 4:
      return'Mars'
    case 5:
      return'Jupiter'
    case 6:
      return 'Saturn'
    case 7:
     return 'Uranus'
    case 8:
      return'Neptune'
  }
}


// ====== 8kyu Double Char ======//

// Given a string, you have to return a string in which each character (case-sensitive) is repeated once.

function doubleChar(str) {
  return str.split('').map((letter)=> `${letter}${letter}`).join('')
}



// ====== 8kyu Parse nice int from char problem ======//

// You ask a small girl,"How old are you?" She always says, "x years old", where x is a random number between 0 and 9.

// Write a program that returns the girl's age (0-9) as an integer.

// Assume the test input string is always a valid string. For example, the test input may be "1 year old" or "5 years old". The first character in the string is always a number.

function getAge(inputString){
  return parseInt(inputString)
}
