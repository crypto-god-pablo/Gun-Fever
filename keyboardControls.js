var CONTROLS = {
  firstPlayer : {
    up : false,
    down : false,
    fire : false,
    lastFireTime : 0
  },
  secondPlayer : {
    up : false,
    down : false,
    fire : false,
    lastFireTime : 0
  }
};

document.addEventListener('keydown', function(event) {
  switch (event.key) {
    case "w":
      CONTROLS.firstPlayer.up = true;
      break;
    case "s":
      CONTROLS.firstPlayer.down = true;
      break;
    case " ":
      CONTROLS.firstPlayer.fire = true;
      break;
    case "ArrowUp":
      CONTROLS.secondPlayer.up = true;
      break;
    case "ArrowDown":
      CONTROLS.secondPlayer.down = true;
      break;
    case "shift":
      CONTROLS.secondPlayer.fire = true;
      break;
    default:
      break;
  }
});
document.addEventListener('keyup', function(event) {
  switch (event.key) {
    case "w":
      CONTROLS.firstPlayer.up = false;
      break;
    case "s":
      CONTROLS.firstPlayer.down = false;
      break;
    case " ":
      CONTROLS.firstPlayer.fire = false;
      break;
    case "ArrowUp":
      CONTROLS.secondPlayer.up = false;
      break;
    case "ArrowDown":
      CONTROLS.secondPlayer.down = false;
      break;
    case "shift":
      CONTROLS.secondPlayer.fire = false;
      break;
    default:
      break;
  }
});
