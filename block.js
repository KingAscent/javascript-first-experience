const canvas = document.getElementById("gameArea");
const ctx = canvas.getContext("2d");

let x = 100;
let y = 100;
let upPressed = false;
let downPressed = false;
let leftPressed = false;
let rightPressed = false;
let speed = 10;
let blockColor = "#ffbb00";

// Game Loop
function drawGame(){
    requestAnimationFrame(drawGame)
    clearScreen();
    inputs();
    boundaryCheck();
    drawBlock();
}

function boundaryCheck(){
    boundary = false;
    // Top boundary
    if(y < 0){
        y = 0;
        boundary = true;
    }
    
    // Bottom boundary
    if(canvas.height - 100 < y){
        y = canvas.height - 100;
        boundary = true;
    }
    
    // Left boundary
    if(x < 0){
        x = 0;
        boundary = true;
    }
    
    // Right boundary
    if(canvas.width - 150 < x){
        x = canvas.width - 150
        boundary = true;
    }
    
    if(boundary)
        blockColor = "#" + ((1<<24)*Math.random() | 0).toString(16);
}

function inputs(){
    if(upPressed){
        y -= speed;
    }
    if(downPressed){
        y += speed;
    }
    if(leftPressed){
        x -= speed;
    }
    if(rightPressed){
        x += speed;
    }
}

function drawBlock(){
    ctx.fillStyle = blockColor;
    ctx.beginPath();
    ctx.fillRect(x, y, 150, 100); /* Starting x, y, width, height */
    ctx.fill();
}

function clearScreen(){
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, canvas.clientWidth, canvas.height);
}

document.body.addEventListener('keydown', keydown);
document.body.addEventListener('keyup', keyup);

function keydown(event){
    // Up
    if(event.keyCode == 38)
        upPressed = true;

    // Down
    if(event.keyCode == 40)
        downPressed = true;
    
    // Left
    if(event.keyCode == 37)
        leftPressed = true;

    // Right
    if(event.keyCode == 39)
        rightPressed = true;
}

function keyup(event){
    // Up
    if(event.keyCode == 38)
        upPressed = false;

    // Down
    if(event.keyCode == 40)
        downPressed = false;
    
    // Left
    if(event.keyCode == 37)
        leftPressed = false;
        
    // Right
    if(event.keyCode == 39)
        rightPressed = false;
}

drawGame();