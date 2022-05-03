// ====== 8kyu Broken Counter ======//

// Our counter prototype is broken. Can you spot, what's wrong here?

class Counter {
  constructor() {
    this.value = 0;
  }
  
  increase() {
    this.value++;
  };

  getValue() {
    return this.value;
  };

  reset() {
    this.value = 0;
  };
}


// ====== 8kyu Training JS #18: Methods of String object--concat() split() and its good friend join() ======//

// Implement a function which accepts 2 arguments: string and separator.

// The expected algorithm: split the string into words by spaces, split each word into separate characters and join them back with the specified separator, join all the resulting "words" back into a sentence with spaces.


function splitAndMerge(str, sp) {
  return str.split(" ").map(word => word.split("").join(sp)).join(" ");
}