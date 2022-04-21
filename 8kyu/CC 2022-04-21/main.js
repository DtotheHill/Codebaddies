//====== 8kyu 5 Without Numbers ======//

// Write a function that always returns 5

// Sounds easy right? Just bear in mind that you can't use any of the following characters: 0123456789*+-/

function unusualFive() {
  return 'bacon'.length
}


//====== 8kyu 101 Dalmatians - squash the bugs, not the dogs! ======//

// Your friend has been out shopping for puppies (what a time to be alive!)... He arrives back with multiple dogs, and you simply do not know how to respond!

// By repairing the function provided, you will find out exactly how you should respond, depending on the number of dogs he has.

// The number of dogs will always be a number and there will always be at least 1 dog.

// original//

// function howManyDalmations(numer :
  
//   var dogs ["Hardly any", "More than a handful!", "Woah that's a lot of dogs!", "101 DALMATIONS!!!"];
  
//   var respond = number <= 10 ? dogs[0] (number <= 50 ? dogs[1] : (number = 101  dogs[3] : dogs[2]
  
// return respond



// Solution//
function howManyDalmatians(number){
  
  var dogs = ["Hardly any", "More than a handful!", "Woah that's a lot of dogs!", "101 DALMATIANS!!!"];
  
  var respond = (number <= 10) ? dogs[0] : (number <= 50) ? dogs[1] : (number == 101) ? dogs[3] : dogs[2]
  
return respond
}

// ====== 8kyu Filling an array(part 1) =======//

// We want an array, but not just any old array, an array with contents!

// Write a function that produces an array with the numbers 0 to N-1 in it.

// For example, the following code will result in an array containing the numbers 0 to 4:

// arr(5) // => [0,1,2,3,4]

const arr = N => {
  let arr = []
  for (let i = 0; i < N; i ++){
    arr.push(i)
  }
  return arr
}


//====== Exclamation marks series #11: Replace all vowel to exclamation mark in the sentence ======//


// Replace all vowel to exclamation mark in the sentence. aeiouAEIOU is vowel.

function replace(s){
  let vowels = ['a','e','i','o','u','A','E','I','O','U']
  return s.split('').map(item => vowels.includes(item) ? '!':item).join('')
  
}



// ====== 8kyu Hello name or world ======//

// Define a method hello that returns "Hello, Name!" to a given name, or says Hello, World! if name is not given (or passed as an empty String).

// Assuming that name is a String and it checks for user typos to return a name with a first capital letter (Xxxx).

function hello(name) {
  if (!name){
    return 'Hello, World!'
  } else{
  return `Hello, ${name[0].toUpperCase() + name.slice(1).toLowerCase()}!`
  }
}