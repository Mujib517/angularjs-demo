var canvas = document.getElementById('cvs');
var ctx = canvas.getContext('2d');
var x = canvas.width / 2;
var y = canvas.height - 20;
var dx = 1;
var dy = -1;
var br = 10;
var bh = 15;
var bw = 100;
var rightKey = false;
var leftKey = false;
var bx = 0;
var lives = 3;
var interval;

updateLives();

function updateLives() {
  var h3 = document.getElementById("lives");
  h3.innerText = lives;
}

document.addEventListener('keyup', keyUp);
document.addEventListener('keydown', keyDown);

function keyDown(e) {
  if (e.keyCode === 37) leftKey = true;
  if (e.keyCode === 39) rightKey = true;
}

function keyUp(e) {
  if (e.keyCode === 37) leftKey = false;
  if (e.keyCode === 39) rightKey = false;
}

function drawBall() {

  //br-650-br
  if (x + dx > canvas.width - br || x + dx < br) dx = -dx;

  //br-500-br
  if (y + dy < br) dy = -dy;

  else if (y + dy > canvas.height - br) {
    if (x > bx && x < bx + bw) dy = -dy;
    else {
      --lives;
      clearInterval(interval);
      reset();
      if (lives === 0) {
        alert("GAME OVER");
        document.location.reload();
      }
      updateLives();
      setTimeout(function () {
        interval = setInterval(draw, 10);
      }, 1000);
      //clearInterval(interval);
    }
  }

  // if (y + dy > canvas.height - br || y + dy < br) dy = -dy;

  x += dx;
  y += dy;
  ctx.beginPath();
  ctx.arc(x, y, br, 0, Math.PI * 2);
  ctx.fillStyle = "#0095DD";
  ctx.fill();
  ctx.closePath();
}

function drawBat() {

  if (rightKey && bx + 7 <= canvas.width - bw) bx = bx + 7;
  if (leftKey && bx > 0) bx = bx - 7;
  ctx.beginPath();
  ctx.rect(bx, canvas.height - bh, bw, bh);
  ctx.fillStyle = "#0095DD";
  ctx.fill();
  ctx.closePath();
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawBall();
  drawBat();
}

interval = setInterval(draw, 10);

function reset() {
  x = canvas.width / 2;
  y = br;
}

function changeSize(e) {
  var val = e.target.value;

  switch (val) {
    case 's':
      canvas.width = 500;
      canvas.height = 400;
      break;
    case 'm':
      canvas.width = 650;
      canvas.height = 500;
      break;
    case 'l':
      canvas.width = 750;
      canvas.height = 600;
      break;
    default:
      canvas.width = 650;
      canvas.height = 500;
      break;
  }
}