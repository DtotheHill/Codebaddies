// ====== 8kyu Mr.Freeze ======//

// There is an object/class already created called MrFreeze. Mark this object as frozen so that no other changes can be made to it.
Object.freeze(MrFreeze)


// ====== 8kyu Formatting decimal places #0 ======//

// Each number should be formatted that it is rounded to two decimal places. You don't need to check whether the input is a valid number because only valid numbers are used in the tests.



function twoDecimalPlaces(n) {
  return (+(n.toFixed(2)))
}


// ====== 8kyu Incorrect division method ======//

// fix the error 


// original 
// const solve = (x, y) => x // y

// solution 
const solve = (x, y) => x / y


// ====== 8kyu Training JS#3: Basic data types -String

// use key to fill in values

var a1="A",a2="a",b1="B",b2="b",c1="C",c2="c",d1="D",d2="d",e1="E",e2="e",n1="N",n2="n"
function Dad(){
  //select some variable to combine "Dad"
  return d1+a2+d2
}
function Bee(){
  //select some variable to combine "Bee"
  return b1+e2+e2
}
function banana(){
  //select some variable to combine "banana"
  return b2+a2+n2+a2+n2+a2
}

//answer some questions if you finished works above
function answer1(){
  //the answer should be "yes" or "no"
  return 'no'
}
function answer2(){
  //the answer should be "yes" or "no"
  return 'no'
}
function answer3(){
  //the answer should be "yes" or "no"
  return 'yes'
}