// ====== 7kyu Highest and lowest ======//

// In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

function highAndLow(numbers){
  let nums = numbers.split(' ')
  return `${Math.max(...nums)} ${Math.min(...nums)}`
}



// ====== 8kyu Remove exclamation marks ======//

function removeExclamationMarks(s) {
  return s.replace(/!/g,'')
}


// ====== 8kyu Get Planet Name By ID ======//

function getPlanetName(id){
  switch(id){
    case 1:
      return'Mercury'
    case 2:
      return'Venus'
    case 3:
      return'Earth'
    case 4:
      return'Mars'
    case 5:
      return'Jupiter'
    case 6:
      return 'Saturn'
    case 7:
     return 'Uranus'
    case 8:
      return'Neptune'
  }
  

}