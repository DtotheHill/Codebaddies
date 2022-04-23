// ====== 8kyu Aspect Ratio Cropping - Part 1 ======//

// The aspect ratio of an image describes the proportional relationship between its width and its height. Most video shown on the internet uses a 16:9 aspect ratio, which means that for every pixel in the Y, there are roughly 1.77 pixels in the X (where 1.77 ~= 16/9). As an example, 1080p video with an aspect ratio of 16:9 would have an X resolution of 1920, however 1080p video with an aspect ratio of 4:3 would have an X resolution of 1440.

// Write a function that accepts arbitrary X and Y resolutions and converts them into resolutions with a 16:9 aspect ratio that maintain equal height. Round your answers up to the nearest integer.

function aspectRatio(x,y){
  let newX = Math.ceil((16/9) * y)
  return [newX,y] 
}


//====== 8kyu Bin to Decimal ======//

// Complete the function which converts a binary number (given as a string) to a decimal number.



function binToDec(bin){
  return parseInt(bin, 2)
}



// ====== 8kyu Remove First and Last Character ======//

// It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string. You don't have to worry with strings with less than two characters.

function removeChar(str){
  return str.slice(1,-1)
}


// ====== 8kyu Find the smallest ineger in an array ======//

// Given an array of integers your solution should find the smallest integer.

class SmallestIntegerFinder {
  findSmallestInt(args) {
    return Math.min(...args)
  }
}


//===== 8kyu Convert a string to a number ======//

// convert string to number

var stringToNumber = function(str){
  return +str
}



// ====== 8kyu Convert a Boolean to a String ======//

// Implement a function which convert the given boolean value into its string representation.

function booleanToString(b){
  return b.toString()
}


// ====== 8kyu You can't code under pressure #1 ======//

// Code as fast as you can! You need to double the integer and return it

function doubleInteger(i) {
  return i*2;
}