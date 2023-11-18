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

// asteroid variables
let asteroidArray = [];
let asteroidX = 790;
let asteroidY;
let asteroidImage;
let asteroidHeight = 50;
let asteroidWidth = 50;

//draw game area
window.onload = function() {
    gamearea = document.getElementById("game-area");
    gamearea.height = gameareaHeight;
    gamearea.width = gameareaWidth;
    

    //draw ufo
    context = gamearea.getContext("2d");
    ufoImage = new Image();
    ufoImage.src = "./assets/img/ufo.jpg"
    ufoImage.onload = function () {
        context.drawImage(ufoImage, ufo.x, ufo.y, ufo.width, ufo.height);
    }

    

    requestAnimationFrame(update);
    setInterval(addAsteroid, 1000); // amount of time to place an asteroid omn canvas
}

document.addEventListener("keydown", function(event){
    if (event.code === "ArrowUp") {
        if (ufo.y > 0) {
            moveUFOUp();
        } else {
            return;
        }
    } else if (event.code === "ArrowDown"){
        if (ufo.y+50 < gameareaHeight){
            moveUFODown();
        } else {
            return;
        }
        
}}
)

function update(){
    requestAnimationFrame(update);
    context.clearRect(0, 0, gamearea.height, gamearea.width);
    context.drawImage(ufoImage, ufo.x, ufo.y, ufo.width, ufo.height);
    for (let i = 0; i < asteroidArray.length; i++){
        let asteroid = asteroidArray[i];
        context.drawImage(asteroidImage, asteroid.x, asteroid.y, asteroid.width, asteroid.height)
    }
    
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

function addAsteroid() {
    let asteroid = {
        x: asteroidX,
        y: asteroidY,
        height: 50,
        width: 50
    }

    //create chance to spawn asteroid
    let asteroidChance = Math.random();
    if (asteroidChance > 0.70) { // check chance isn't to often or not enough
        //draw asteroid
        asteroidImage = new Image();
        asteroidImage.src = "./assets/img/asteroid-a.png";
        asteroid.y = Math.floor(Math.random() * 250);
        asteroidArray.push(asteroid); // add asteroid to array to track accross screen
    }
}