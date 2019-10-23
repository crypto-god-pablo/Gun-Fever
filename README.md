
DESCRIPTION

  The game would be a 2d gun game in which two players are at opposite sides of the canvas (left and right) and can move up and down
  vertically. The view of the game would be from the sky looking down on the battlefield, so the player is looking at the heads of the characters from above, and the bullets fire from left and right to the other side.

  For single player mode, the player would face a computer player unit that gets more accurate and faster with each level. To shoot, the player
  uses W and S controls and spacebar to shoot, plus the mouse to point gun. Each gun that gets introduced from a kill has a new strength that is either stronger or weaker depending on the strength of the gun in real life. The bullet speed has to be fast enough so that players can’t easily dodge everytime. The player and the CPU start with a pistol, which takes three shots to kill the other player, and whoever kills the other player first upgrades to two pistols that shoot at twice the rate. Each player has a health bar and unlimited ammo, but there is a regeneration time for the gun to reload. Then, it upgrades to a shotgun, then an automatic rifle with shots released faster, then three round burst ar, then rifle, then sniper, then the final weapon is throwing stars. The objectives would be that if you beat the computer in gun game, the computer gets faster the next time you play so it gets harder. The screen shows how many times you and the computer have died. There is unlimited lives. Multiplayer mode would just be both players are involved with player 2 using the up and down arrows, shift to shoot. Because there is only one mouse, player 2 can’t point the gun so it is just pointed horizontally across, but can move much faster than player 1.


TECHSPEC

  Pretty much all aspects of the game can be implemented as described. I have written pseudocode for nearly the whole program. The only thing that might be kinda iffy is drawing images and rotating them (I personally don't know how to do that, but I'm sure it is possible), and the CPU AI, which will be weird. The simplest way of controlling the CPU is by having it stationary and having its gun's aim be a function of the player's position, speed, and also a random factor, so that the CPU does not snipe you 100% of the time. The random factor, or the CPU's aim inaccuracy, will decrease as CPU_DIFFICULTY increases. Increasing CPU_DIFFICULTY will also increase the CPU's gun's fire rate and bullet damage.

  The program is object oriented and has a main method in main.js which will run when the program starts. The main method shows a menu screen by default, but if one of the two buttons in the menu screen (one for Singleplayer and one for Multiplayer) is pressed, then a game begins. Singleplayer and Multiplayer are both object classes which inherit many attributes from the Game class. The main method runs a Game instance by calling its update() and draw() method.

  Here is an overview of the object orientation of the program and the most notable/difficult parts of the program:

    Game: an abstract class for any higher-level video-gaming-related code
      ~ Its highest-level methods are update() and draw(), which are used by the main method as just explained
      ~ Every Game has two Players, player1 and player2, and an array of Bullets, which contains all the Bullets flying around at a given time
      ~ Games can be paused and resumed and can be carried on after a player dies.
      ~ All Games have methods for checking if bullets collide with players, for dealing damage, for handling user input, for handling game pauses, for handling new rounds, for updating the positions of all their components, and for doing any other higher-level tasks

      Multiplayer: less complicated, has two user controlled players

      Singleplayer: more complicated, has one CPU (player2) and one user controlled player (player1)
        ~ Has an array of guns with different attributes and names. Each time player1 kills the CPU and its score increases, its Gun object is
          set to the next gun in this array
        ~ As player1's score increases, the CPU's difficulty (CPU_DIFFICULTY) increases
        ~ the CPU will be controlled by the method ControlCPU(), and will function as described earlier

    Component: an abstract class for all objects which are moving or colliding during Games
      ~ each Component has variables for position, velocity, size, rotation, and color/image
      ~ the abstract Component class contains the general function for checking if a Component is colliding with another Component
      ~ each Component has a method for updating its variables/positions, update(), and for rendering it, draw()

      Bullet: a bullet object, pretty simple
        ~ a bullet's velocity is constant

      Gun: a gun object, which creates a new Bullet object each time it is fired (when fire() is called)
        ~ has variables for fire rate (reload time) and bullet damage
        ~ after a Gun is fired, it cannot fire again until its reload time has passed

      Player: a player object, which has a Gun object tied to it
        ~ updates the position of its Gun with its own position so that they do not separate
        ~ has variables for health (HP), score (# of kills), and whether the player is alive


12-DAY PLAN

  Note: All of the pseudocode currently in these files IS pseudocode and is written in a mix of Java syntax and English.
  As you start coding and filling out the methods that are outlined here, you should try to use proper JavaScript syntax,
  and there will also be a whole day dedicated to debugging any errors and fixing syntax later. Also, I did not bother
  with following any coding conventions in pseudocode such as making all variable names all-caps.
  ALSO, there are a bunch of places where you would need to put in values for health or damage etc. Right now, I left
  blank spaces (____) and did not assign any values. When you come across thsi when coding, just write an arbitrary value
  that you think would be okay. These values will be tuned later.

  Day 1: Code the methods in main.js (i.e. drawMenu(), singleplayerClicked(), multiplayerClicked() and maybe mouseClick())
  Day 2: Code userInput() methods in both multiplayer.js and singleplayer.js
  Day 3: Write draw() in component.js and drawScore() and drawHealthBar() in player.js
  Day 4: Write collidesWith() and finish writing the Component class in component.js (including the constructor)
  Day 5: Write the Bullet class in bullet.js and the Gun class in gun.js (including the constructors, actuallyFire(), fire(), and update())
  Day 6: Finish writing everything in the Player class in player.js (including the constructor and all the other methods)
  Day 7: Finish writing half of the methods in the Game class in game.js
  Day 8: Finish writing the Game class in game.js and all of the methods you did not get to during Day 7
  Day 9: Finish wriiting the Multiplayer class in multiplayer.js
  Day 10: Finish writing main.js, but comment-out anything having to do with singleplayer, and comment-out the whole Singleplayer class in singleplayer.js.
  Day 11 and 12: You should now be able to start and test a multiplayer game. Debug any errors. Test and tune values for player health, gun damage, etc. so that the multiplayer mode is solid. If you have time, move onto the experimental features in Day 13-15.

  Day 13: Once the multiplayer mode is good, you can start working on singleplayer. Write the best AI (in the method controlCPU() in singplayer.js) that you can write in this time.
  Day 14: Finish writing the Singleplayer class in singleplayer.js. You will need to code the array of guns that the player will get as his/her score increases.
  Day 15: Finish up anything else in singleplayer.js. Then add all the singleplayer stuff back into main.js, so that you can select the singleplayer mode. You should now be able to test the singleplayer mode. Debug any errors, and test and tune values for gun damages, CPU difficulty, etc.
