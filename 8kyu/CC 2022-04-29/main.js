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

// ======8kyu Closest elevator =====//

// Given 2 elevators (named "left" and "right") in a building with 3 floors (numbered 0 to 2), write a function elevator accepting 3 arguments (in order):

// left - The current floor of the left elevator
// right - The current floor of the right elevator
// call - The floor that called an elevator
// It should return the name of the elevator closest to the called floor ("left"/"right").

// In the case where both elevators are equally distant from the called floor, choose the elevator to the right.

// You can assume that the inputs will always be valid integers between 0-2.

const elevator = (left, right, call) => Math.abs(call-left) < Math.abs(call-right) ? 'left' : 'right'



// ======8kyu Classy classes ======//

// Basic Classes, this kata is mainly aimed at the new JS ES6 Update introducing classes

// Task
// Your task is to complete this Class, the Person class has been created. You must fill in the Constructor method to accept a name as string and an age as number, complete the get Info property and getInfo method/Info getter which should return johns age is 34

class Person {
  constructor(name, age) {
    this.name = name
    this.age = age
  }
   get info(){
    return `${this.name}s age is ${this.age}` 
  }
}

// ======8kyu Remove the time ======//

// You're re-designing a blog and the blog's posts have the following format for showing the date and time a post was made:

// Weekday Month Day, time e.g., Friday May 2, 7pm

// You're running out of screen real estate, and on some pages you want to display a shorter format, Weekday Month Day that omits the time.

// Write a function, shortenToDate, that takes the Website date/time in its original string format, and returns the shortened format.

// Assume shortenToDate's input will always be a string, e.g. "Friday May 2, 7pm". Assume shortenToDate's output will be the shortened string, e.g., "Friday May 2".

function shortenToDate(longDate) {
  return longDate.split(',')[0]
}

// ======8kyu Basic: making six toast ======//

// You forgot to count the number of toast you put into there, you don't know if you put exactly six pieces of toast into the toasters.

// Define a function that counts how many more (or less) pieces of toast you need in the toasters. Even though you need more or less, the number will still be positive, not negative.


function sixToast(num) {
  let needed = 6
  
  if(num < needed){
    return needed - num
  }else if (num > needed){
    return num - needed
  }else if (num === needed){
   return 0
  }else {
    return num
  }
}