/*the game which is currently running (or was running, but is now over); this is
null at the beginning of the program*/
//Canvas and basic variables of canvas
var cvs = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
var width = cvs.getAttribute('width');
var height = cvs.getAttribute('height');
ctx.scale(1,1);

var GAME = {
  active : false,
  paused : false,
  bullets : [],
  multiplayer : false
};
var PLAYER1 = {
  hp : 100,
  score : 0,
  alive : true,
  deathCount : 0,
  x : 20,
  y : height/2
};
var PLAYER2 = {
  hp : 100,
  score : 0,
  alive : true,
  deathCount : 0,
  x : width - 65,
  y : height/2
};


//draws the menu screen
function drawMenu(){
  var bgImage = new Image(); //background
  var titleImage = new Image(); //title
  var singleplayerImage = new Image(); //singleplayer
  var multiplayerImage = new Image(); //multiplayer

  bgImage.src = "sprites/Background.png"; //image for background
  titleImage.src = "sprites/Title.png"; //image for title
  singleplayerImage.src = "sprites/singleplayerButton.png"; //image for singleplayer button
  multiplayerImage.src = "sprites/multiplayerButton.png"; //image for multiplayer button

  var BUTTON1 = {
    x : width/2 - singleplayerImage.width/2,
    y : 200,
    w : singleplayerImage.width,
    h : singleplayerImage.height
  };
  var BUTTON2 = {
    x : width/2 - multiplayerImage.width/2,
    y : 300,
    w : multiplayerImage.width,
    h : multiplayerImage.height
  };

  ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height); //clears canvas
  bgImage.onload = function(){
    ctx.drawImage(bgImage, 0, 0, width, height); //draws background
  }
  titleImage.onload = function(){
    ctx.drawImage(titleImage, width/2 - titleImage.width/2, 70); //draws title
  }
  singleplayerImage.onload = function(){
    ctx.drawImage(singleplayerImage, BUTTON1.x, BUTTON1.y);
  }
  multiplayerImage.onload = function(){
      ctx.drawImage(multiplayerImage, BUTTON2.x, BUTTON2.y);
  }


  cvs.addEventListener("click", onCanvasClick, false);

  function onCanvasClick(e) {
    if(getCursorPosition(e)[0] >= BUTTON1.x && getCursorPosition(e)[0] <= BUTTON1.x + BUTTON1.w)
    {
      if(getCursorPosition(e)[1] >= BUTTON1.y && getCursorPosition(e)[1] <= BUTTON1.y + BUTTON1.h)
      {
        alert("singleplayer");
        GAME.active = true;
        GAME.multiplayer = false;
        drawGame();
      }
    }
    if(getCursorPosition(e)[0] >= BUTTON2.x && getCursorPosition(e)[0] <= BUTTON2.x + BUTTON2.w)
    {
      if(getCursorPosition(e)[1] >= BUTTON2.y && getCursorPosition(e)[1] <= BUTTON2.y + BUTTON2.h)
      {
        alert("multiplayer");
        GAME.active = true;
        GAME.multiplayer = true;
        drawGame();
      }
    }
  }
}

function getCursorPosition(e) {
    var x;
    var y;
    if (e.pageX != undefined && e.pageY != undefined) {
        x = e.pageX;
        y = e.pageY;
    }
    else {
        x = e.clientX + document.body.scrollLeft +
                  document.documentElement.scrollLeft;
        y = e.clientY + document.body.scrollTop +
                  document.documentElement.scrollTop;
    }
    x -= canvas.offsetLeft;
    y -= canvas.offsetTop;

  return [x,y];
}


//the main method which will loop continuously
function main() {
  /*
  while (GAME.active && GAME != null) {
      GAME.updateGame(); //updates the game
      GAME.drawGame(); //renders the game
  }*/
  //if no game is running
  drawMenu(); //renders the menu screen

}

window.requestAnimationFrame(drawMenu);
