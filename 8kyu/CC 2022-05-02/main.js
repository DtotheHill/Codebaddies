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