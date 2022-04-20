// ====== 8kyu Get Nth Even Numner ======//

//Return the Nth even number 

// Example(Input --> Output)

// 1 --> 0 (the first even number is 0)
// 3 --> 4 (the 3rd even number is 4 (0, 2, 4))
// 100 --> 198
// 1298734 --> 2597466


function nthEven(n){
  return (n*2) -2
}


// ====== 8kkyu Generate range of integers ======//

// Implement a function named generateRange(min, max, step), which takes three arguments and generates a range of integers from min to max, with the step. The first integer is the minimum value, the second is the maximum of the range and the third is the step. (min < max)

// Task
// Implement a function named

// generateRange(2, 10, 2) // should return array of [2,4,6,8,10]
// generateRange(1, 10, 3) // should return array of [1,4,7,10]
// Note
// min < max
// step > 0
// the range does not HAVE to include max (depending on the step)


function generateRange(min, max, step){
  let arr = [];
  for (let i=min; i<=max; i += step) {
    arr.push(i);
  }
  return arr;
}


//====== 8kyu What's the real floor ======//

// Americans are odd people: in their buildings, the first floor is actually the ground floor and there is no 13th floor (due to superstition).

// Write a function that given a floor in the american system returns the floor in the european system.

// With the 1st floor being replaced by the ground floor and the 13th floor being removed, the numbers move down to take their place. In case of above 13, they move down by two because there are two omitted numbers below them.

// Basements (negatives) stay the same as the universal level.

// More information here

// Examples
// 1  =>  0 
// 0  =>  0
// 5  =>  4
// 15  =>  13
// -3  =>  -3


function getRealFloor(n) {
  if (n >= 13) { return n - 2;}
  else if ( n > 0 ) { return n - 1;}
  else {return n;}
  }

let getRealFloor = n => (n >= 13 ) ? n-2 : (n > 0) ? n-1 : n


// ====== 8 kyu Super Duper Easy ======//

// Make a function that returns the value multiplied by 50 and increased by 6. If the value entered is a string it should return "Error".


function problem(x){
  return typeof x == 'string' ? 'Error' : (x * 50 + 6);
}

// ====== 8 kyu Training JS #7: if..else and ternary operator ======//


// Task:
// Complete function saleHotdogs/SaleHotDogs/sale_hotdogs, function accept 1 parameters:n, n is the number of customers to buy hotdogs, different numbers have different prices (refer to the following table), return a number that the customer need to pay how much money.

// number	price (cents)
// n < 5	100
// n >= 5 and n < 10	95
// n >= 10	90
// You can use if..else or ternary operator to complete it.

let saleHotdogs = n => (n < 5) ? n * 100 : (n >=5 && n < 10) ? n * 95 : n * 90


//====== 8kyu Simple Fun #1: Seats in Theater ======//

// Task
// Your friend advised you to see a new performance in the most popular theater in the city. He knows a lot about art and his advice is usually good, but not this time: the performance turned out to be awfully dull. It's so bad you want to sneak out, which is quite simple, especially since the exit is located right behind your row to the left. All you need to do is climb over your seat and make your way to the exit.

// The main problem is your shyness: you're afraid that you'll end up blocking the view (even if only for a couple of seconds) of all the people who sit behind you and in your column or the columns to your left. To gain some courage, you decide to calculate the number of such people and see if you can possibly make it to the exit without disturbing too many people.

// Given the total number of rows and columns in the theater (nRows and nCols, respectively), and the row and column you're sitting in, return the number of people who sit strictly behind you and in your column or to the left, assuming all seats are occupied.

// Example
// For nCols = 16, nRows = 11, col = 5 and row = 3, the output should be

// seatsInTheater(nCols, nRows, col, row) === 96

function seatsInTheater(nCols, nRows, col, row) {
  return (nCols-col+1) * (nRows - row);  
}

let seatsInTheater = (nCols, nRows, col, row) => (nCols-col+1) * (nRows - row);  


//====== 8kyu What is between ======//

// Complete the function that takes two integers (a, b, where a < b) and return an array of all integers between the input parameters, including them.

function between(a, b) {
  let arr = []
  for (let i = a; i <= b; i++)
    arr.push(i)
  return arr
}

//======== 8kyu Grasshopper - Debug sayHello ======//

// The starship Enterprise has run into some problem when creating a program to greet everyone as they come aboard. It is your job to fix the code and get the program working again!

// Example output:
// Hello, Mr. Spock

function sayHello(name) {
  return `Hello, ${name}`
}

let sayHello = name => `Hello, ${name}`


//====== 8kyu Grasshopper - Grade Book ======//

// Grade book
// Complete the function so that it finds the average of the three scores passed to it and returns the letter value associated with that grade.

// Numerical Score	Letter Grade
// 90 <= score <= 100	'A'
// 80 <= score < 90	'B'
// 70 <= score < 80	'C'
// 60 <= score < 70	'D'
// 0 <= score < 60	'F'

function getGrade (s1, s2, s3) {
  const avg = (s1 + s2 + s3) / 3

 if (avg >= 90) {
    return 'A';
  } else if (avg >= 80) {
    return 'B';
  } else if (avg >= 70) {
    return 'C';
  } else if (avg >= 60) {
    return 'D';
  } else {
    return 'F';
  }
}


//======8kyu Summation======//

// Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0.

var summation = function (num) {
  let result = 0;
  for (var i = 1; i <= num; i++) {
    result += i;
  }
  
  return result;
}

