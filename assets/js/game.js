// game area variables
let gamearea;
let gameareaHeight = 300;
let gameareaWidth = 800;
let context;


// ufo variables
let ufoHeight = 50;
let ufoWidth = 80;
let ufoX = 45;
let ufoY = (gameareaHeight / 2) - (ufoHeight / 2);
let ufoImage;
let ufo = {
    x : ufoX,
    y : ufoY,
    height: ufoHeight,
    width: ufoWidth
}

// astroids
let astroidArray = [];
let astroidX = 700;
let astroidY;
let astroidImage;
let astroid = {
    x: astroidX,
    y: astroidY,
    height: 50,
    width: 50
}

window.onload = function() {
    gamearea = document.getElementById("game-area");
    gamearea.height = gameareaHeight;
    gamearea.width = gameareaWidth;
    

//draw ufo on game area
context = gamearea.getContext("2d");
ufoImage = new Image();
ufoImage.src = "./assets/img/ufo.jpg"
ufoImage.onload = function () {
    context.drawImage(ufoImage, ufo.x, ufo.y, ufo.width, ufo.height);
}

//draw astroid
astroidImage = new Image();
astroidImage.src = "./assets/img/asteroid-a.png";
astroidImage.onload = function () {
    astroid.y = Math.floor(Math.random() * 250);
    //context.drawImage(astroidImage, astroid.x, astroid.y, astroid.width, astroid.height);
}

requestAnimationFrame(update);
}

document.addEventListener("keydown", function(event){
    if (event.code === "ArrowUp") {
        moveUFOUp();
    } else if (event.code === "ArrowDown"){
        moveUFODown();
}}
)

function update(){
    requestAnimationFrame(update);
    context.clearRect(0, 0, gamearea.height, gamearea.width);
    context.drawImage(ufoImage, ufo.x, ufo.y, ufo.width, ufo.height);
    context.drawImage(astroidImage, astroid.x, astroid.y, astroid.width, astroid.height)
}

function moveUFOUp() {
    ufo.y += -5;
    console.log("move-up");
    requestAnimationFrame(update);
}

function moveUFODown() {
    ufo.y += 5;
    console.log("move-down");
    requestAnimationFrame(update);
}