// =======8kyu Invalid Login - Bug Fixing #11 =======//

// Invalid Login - Bug Fixing #11
// Oh NO! Timmy has moved divisions... but now he's in the field of security. Timmy, being the top coder he is, has allowed some bad code through. You must help Timmy and filter out any injected code!

// Task
// Your task is simple, search the password string for any injected code (Injected code is any thing that would be used to exploit flaws in the current code, so basically anything that contains || or //) if you find any you must return "Wrong username or password!" because no one likes someone trying to cheat their way in!

// Preloaded
// You will be given a preloaded class called Database with a method login this takes two parameters username and password. This is a generic login function which will check the database for the user it will return either 'Successfully Logged in!' if it passes the test or 'Wrong username or password!' if either the password is wrong or username does not exist.


function validate(username, password){
  if (password.includes('||') || password.includes('//'))
    return 'Wrong username or password!'
  var database = new Database();
  return database.login(username, password);
}



// ======8kyu A bugs trilogy: Episode 1 - "Let Math.Random(); decide your future" ======//

// Our friend Pac has finally decided to pursue a career in the coding industry.
// He is a newbie, he needs to learn properly.
// Therefore, Pac wants to apply for the worldwide famous -and very demanding-
// 'C0d3r 1ns1d3' Academy for beginners.
// In order to join, Pac is required to solve a series of 3 exercises about 'Bug Fixes'.
// He has been sent an email from the Academy with the following instructions,

// Dear Pac,  
// This is the first exercise. Find out what's wrong and fix the code.  
// You have 15 minutes to send a solution.  
// Good Luck.
// This code is a mess! Would you help Pac to fix the code in time?

// (This might be helpful -> Math.random();)



function yourFutureCareer(){
	var career = Math.random()
		if (career <= 0.32) return 'FrontEnd Developer'
		if (career <= 0.65) return 'BackEnd Developer'
		return 'Full-Stack Developer'
    }