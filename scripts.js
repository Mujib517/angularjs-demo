var canvas = document.getElementById('cvs');
var ctx = canvas.getContext('2d');
var x = canvas.width / 2;
var y = canvas.height - 20;
var dx = 2;
var dy = -2;
var br = 10;
var bh = 15;
var bw = 100;
var rightKey = false;
var leftKey = false;
var bx = 0;

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
  if (y + dy > canvas.height - br || y + dy < br) dy = -dy;

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

  ctx.rect(bx, canvas.height - bh, bw, bh);
  ctx.fillStyle = "#0095DD";
  ctx.fill();
}

function draw() {
  ctx.clearRect(0, 0, 650, 500);
  drawBall();
  drawBat();
}

setInterval(draw, 10);
