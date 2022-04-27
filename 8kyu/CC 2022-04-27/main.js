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


// ====== 8kyu The feast of Many Beasts ======//

// All of the animals are having a feast! Each animal is bringing one dish. There is just one rule: the dish must start and end with the same letters as the animal's name. For example, the great blue heron is bringing garlic naan and the chickadee is bringing chocolate cake.

// Write a function feast that takes the animal's name and dish as arguments and returns true or false to indicate whether the beast is allowed to bring the dish to the feast.

// Assume that beast and dish are always lowercase strings, and that each has at least two letters. beast and dish may contain hyphens and spaces, but these will not appear at the beginning or end of the string. They will not contain numerals.


function feast(beast, dish) {
  return beast[0] === dish[0] && beast[beast.length - 1] === dish[dish.length - 1]
}



//======8kyu Short long short ======//

// Given 2 strings, a and b, return a string of the form short+long+short, with the shorter string on the outside and the longer string on the inside. The strings will not be the same length, but they may be empty ( zero length ).

function solution(a, b) {
  return a.length < b.length ? a + b + a : b + a + b
}