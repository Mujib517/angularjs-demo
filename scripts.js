var canvas = document.getElementById('cvs');
var ctx = canvas.getContext('2d');
var x = canvas.width / 2;
var y = canvas.height - 20;
var dx = 2;
var dy = -2;
var br = 10;

function drawBall() {
 
  //br-650-br
  if (x + dx > canvas.width-br || x + dx < br) dx = -dx;

  //br-500-br
  if (y + dy > canvas.height-br || y + dy < br) dy = -dy;

  x += dx;
  y += dy;
  ctx.arc(x, y, br, 0, Math.PI * 2);
  ctx.fillStyle = "#0095DD";
  ctx.fill();
}


function draw() {
  ctx.clearRect(0, 0, 650, 500);
  drawBall();
}

setInterval(draw, 10);
