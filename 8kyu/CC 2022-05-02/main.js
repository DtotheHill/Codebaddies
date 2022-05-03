// ====== 8kyu Training JS #8: Conditional statement--switch ======//

// Complete function howManydays, function accept 1 parameters:month, means the month of year, different month has different days (refer to the following table), return a number that how many days in this month(month is always greater than 0, less than or equal to 12).

function howManydays(month){
  switch (month){
  case 1:return 31;
  case 2:return 28;
  case 3:return 31;
  case 4:return 30;
  case 5:return 31;
  case 6:return 30;
  case 7:return 31;
  case 8:return 31;
  case 9:return 30;
  case 10:return 31;
  case 11:return 30;
  case 12:return 31;
  
  }
  return month;
}



// ====== 8kyu Enumerable Magic #4 - True for None? ======//

// Create a method none? (JS none) that accepts an array and a block (JS: a function), and returns true if the block (/function) returns true for none of the items in the array. An empty list should return true.
function none(arr, fun){
  return !arr.some(fun);
}


// ====== 8kyu Enumerable Magic #2 - True for Any? ======//

// Create an any? (JS: any) function that accepts an array and a block (JS: function), and returns true if the block (/function) returns true for any item in the array. If the array is empty, the function should return false.


function any(arr, fun){
  return arr.some(fun)
}

// ======8kyu Training JS #32: methods of Math---round() ceil() and floor() ======//

// Coding in function roundIt. function accept 1 parameter n. It's a number with a decimal point. Please use different methods based on the location of the decimal point, turn the number into an integer.

// If the decimal point is on the left side of the number (that is, the count of digits on the left of the decimal point is less than that on the right), Using ceil() method.

// roundIt(3.45) should return 4
// If the decimal point is on the right side of the number (that is, the count of digits on the left of the decimal point is more than that on the right), Using floor() method.

// roundIt(34.5) should return 34
// If the decimal point is on the middle of the number (that is, the count of digits on the left of the decimal point is equals that on the right), Using round() method.

// roundIt(34.56) should return 35

function roundIt (n) {
    
  let [left, right] = n.toString().split('.').map(x => x.length),
      dx = left - right,
      fn = dx < 0 ? Math.ceil : dx > 0 ? Math.floor : Math.round
      
  return fn(n)
}