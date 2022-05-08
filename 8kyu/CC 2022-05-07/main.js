// ======8kyu Lexical this ======// 

// Lexical this
// Complete the Person object, by completing the FillFriends function to fill the _friends Array for the person object.
// Output
// Return the person object with the Name, Friends and FillFriends function filled out which will fill the input into the Friends property.


var Person = function(){
  var person = {
    _name: "Leroy",
    _friends: [],
    fillFriends(f) { 
    this._friends.push(...f)}
  }
  return person;
}


// ======8kyu Swtich Case: Bug fixing #6 ======//

// Oh no! Timmy's evalObject function doesn't work. He uses Switch/Cases to evaluate the given properties of an object, can you fix timmy's function?

function evalObject(value){
  switch(value.operation){
    case'+': return value.a + value.b;
    case'-': return value.a - value.b;
    case'/': return value.a / value.b;
    case'*': return value.a * value.b;
    case'%': return value.a % value.b;
    case'^': return Math.pow(value.a, value.b);
  }
}