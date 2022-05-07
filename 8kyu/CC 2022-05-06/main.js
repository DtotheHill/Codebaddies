//=======8kyu Online RPG: player to qualifying stage? ======//

// Let's imagine we have a popular online RPG. A player begins with a score of 0 in class E5. A1 is the highest level a player can achieve.

// Now let's say the players wants to rank up to class E4. To do so the player needs to achieve at least 100 points to enter the qualifying stage.

// Write a script that will check to see if the player has achieved at least 100 points in his class. If so, he enters the qualifying stage.

// In that case, we return, "Well done! You have advanced to the qualifying stage. Win 2 out of your next 3 games to rank up.".

// Otherwise return, False/false (according to the language n use).

// NOTE
// : Remember, in C# you have to cast your output value to Object type!


function playerRankUp (points) {
    if (points>=100) return "Well done! You have advanced to the qualifying stage. Win 2 out of your next 3 games to rank up."
  return false
  }


  // ====== 8kyu Are there any arrows left? ======//

//   Check your arrows
// You have a quiver of arrows, but some have been damaged. The quiver contains arrows with an optional range information (different types of targets are positioned at different ranges), so each item is an arrow.
// You need to verify that you have some good ones left, in order to prepare for battle:

// anyArrows([{range: 5}, {range: 10, damaged: true}, {damaged: true}])
// If an arrow in the quiver does not have a damaged status, it means it's new.

// The expected result is a boolean, indicating whether you have any good arrows left.


function anyArrows(arrows){
    // arrow it
    return arrows.some(arrow =>!arrow.damaged);
  }