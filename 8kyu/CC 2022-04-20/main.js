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


