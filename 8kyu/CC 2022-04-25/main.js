// ====== 8kyu Return the day ======//

// Complete the function which returns the weekday according to the input number:

// 1 returns "Sunday"
// 2 returns "Monday"
// 3 returns "Tuesday"
// 4 returns "Wednesday"
// 5 returns "Thursday"
// 6 returns "Friday"
// 7 returns "Saturday"
// Otherwise returns "Wrong, please enter a number between 1 and 7"


let whatday = num => num === 1 ? 'Sunday' : num === 2 ? 'Monday' : num === 3 ? 'Tuesday' : num === 4 ? 'Wednesday' : num === 5 ? 'Thursday' : num === 6 ? 'Friday' : num === 7 ? 'Saturday' : 'Wrong, please enter a number between 1 and 7'


// ====== 8kyu For UFC Fans (Total beginners)

// This is a beginner friendly kata especially for UFC/MMA fans.

// It's a fight between the two legends: Conor McGregor vs George Saint Pierre in Madison Square Garden. Only one fighter will remain standing, and after the fight in an interview with Joe Rogan the winner will make his legendary statement. It's your job to return the right statement depending on the winner!

// If the winner is George Saint Pierre he will obviously say:

// "I am not impressed by your performance."
// If the winner is Conor McGregor he will most undoubtedly say:

// "I'd like to take this chance to apologize.. To absolutely NOBODY!"

let quote = function(fighter) {
  return fighter.toLowerCase() == 'george saint pierre' ? "I am not impressed by your performance." : "I'd like to take this chance to apologize.. To absolutely NOBODY!";
};

// ====== 8kyu simple calculator =====//

// You are required to create a simple calculator that returns the result of addition, subtraction, multiplication or division of two numbers.

// Your function will accept three arguments:
// The first and second argument should be numbers.
// The third argument should represent a sign indicating the operation to perform on these two numbers.

// if the variables are not numbers or the sign does not belong to the list above a message "unknown value" must be returned.

function calculator(a,b,sign){
  if (sign === '+'){
    return a + b
  }else if (sign === '-'){
    return a - b
  }else if (sign === '*'){
    return a * b
  }else if (sign === '/'){
    return a / b
  }else {
    return 'unknown value'
  }
}

// ====== 8kyu No Loops 2 You only need one ======// 

// *** No Loops Allowed ***

// You will be given an array (a) and a value (x). All you need to do is check whether the provided array contains the value, without using a loop.

// Array can contain numbers or strings. X can be either. Return true if the array contains the value, false if not. With strings you will need to account for case.

function check(a,x){
  return a.includes(x)
};