// ====== 8kyu Vowel Count ======//

// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// The input string will only consist of lower case letters and/or spaces.

function getCount(str) {
  let vowelsCount = 0;
  let vowels = ['a', 'e', 'i', 'o', 'u'];
  for(let char of str) {
    if(vowels.includes(char)) {
      vowelsCount++;
    }
  }
  return vowelsCount;
}


// ======8kyu Disemvowel Trolls ======//

// Trolls are attacking your comment section!

// A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.

// Your task is to write a function that takes a string and return a new string with all vowels removed.

// For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

// Note: for this kata y isn't considered a vowel.

function disemvowel(str) {
  let vowels = ['a','e','i','o','u']
  return str.split('').filter((el)=> vowels.indexOf(el.toLowerCase())==-1).join('')
}



