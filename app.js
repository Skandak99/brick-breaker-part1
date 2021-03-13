var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");

var radius = 10;
var x = canvas.width/2;
var y = canvas.height - 30;
var dx = 2;
var dy = -2;
var paddleHeight = 10;
var paddleWidth = 75;
var paddleX = (canvas.width - paddleWidth)/2;
var rightPressed = false;
var leftPressed = false;

document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);

function keyDownHandler(e){
    if (e.key== "Right" || e.key =="ArrowRight"){
        rightPressed = true;
    }
    else if(e.key== "Left" || e.key =="ArrowLeft"){
        leftPressed = true;
}
}

function keyUpHandler(e){
    if (e.key== "Right" || e.key =="ArrowRight"){
        rightPressed = false;
    }
    else if(e.key== "Left" || e.key =="ArrowLeft"){
        leftPressed = false;
}}

function drawBall(){
    context.beginPath();
context.arc(x,y,radius,0, Math.PI*2);
context.fillStyle = "orangered";
context.fill();
context.closePath();
}

function drawPaddle(){
    context.beginPath();
    context.rect(paddleX, canvas.height-paddleHeight, paddleWidth, paddleHeight);
    context.fillStyle = "orangered";
context.fill();
context.closePath();
}


function draw(){
context.clearRect(0,0,canvas.width,canvas.height)
drawBall();
drawPaddle();


if(y+dy < radius || y+dy > canvas.height-radius){
    dy = -dy;
}

if(x+dx < radius || x+dx > canvas.width-radius){
    dx = -dx;
}

if(rightPressed){
    paddleX +=10;
    if(paddleX+paddleWidth >canvas.width){
        paddleX = canvas.width - paddleWidth;
    }
}
else if(leftPressed){
    paddle-=10;
    if(paddleX < 0){
        paddleX = 0;
    }
}

x += dx;
y += dy;
}








setInterval(draw, 10);