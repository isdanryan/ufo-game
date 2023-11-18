// game area variables
let gamearea;
let gameareaHeight = 300;
let gameareaWidth = 800;
let context;
let gameover = false;


// ufo variables
let ufoHeight = 40;
let ufoWidth = 86;
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
let moveSpeed = -4; // set speed asteroids move accross screen right to left

//draw game area
window.onload = function() {
    gamearea = document.getElementById("game-area");
    gamearea.height = gameareaHeight;
    gamearea.width = gameareaWidth;
    context = gamearea.getContext("2d");
    context.fillStyle = "black";
    context.fillRect(0, 0, gamearea.width, gamearea.height);
    

    //draw ufo
    
    ufoImage = new Image();
    ufoImage.src = "./assets/img/ufo-4.jpg"
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

// update canvas for each frame
function update(){
    requestAnimationFrame(update);
    if (gameover) {
        return;
    };
    context.clearRect(0, 0, gamearea.width, gamearea.height);
    context.drawImage(ufoImage, ufo.x, ufo.y, ufo.width, ufo.height);
    for (let i = 0; i < asteroidArray.length; i++){
        let asteroid = asteroidArray[i];
        asteroid.x += moveSpeed;
        context.drawImage(asteroidImage, asteroid.x, asteroid.y, asteroid.width, asteroid.height)
        if (detectColision(ufo, asteroid)) {
            gameover = true;
            console.log("gameover");
        }
    }
    
}

function moveUFOUp() {
    ufo.y += -8;
    console.log("move-up");
}

function moveUFODown() {
    ufo.y += 8;
    console.log("move-down");
}

function addAsteroid() {
    if (gameover) {
        return;
    };
    let asteroid = {
        x: asteroidX,
        y: asteroidY,
        height: asteroidHeight,
        width: asteroidWidth
    }

    //create chance to spawn asteroid
    let asteroidChance = Math.random();
    if (asteroidChance > 0.40) { // check chance isn't to often or not enough
        //draw asteroid
        asteroidImage = new Image();
        asteroidImage.src = "./assets/img/asteroid-1.jpg";
        asteroid.y = Math.floor(Math.random() * 250);
        asteroidArray.push(asteroid); // add asteroid to array to track accross screen on redraws
    }

    // remove asteroids from array once off screen to prevent taking too much memory over time
    if (asteroidArray.length > 6) {
        asteroidArray.shift();
    }
}

function detectColision(a, b) {
    return a.x < b.x + b.width && //a's top left corner dosen't reach b's top right corner
            a.x + a.width > b.x && //a's top right corner passes b's top left corner
            a.y < b.y + b.height && //a's top left corner dosen't reach b's bottom left corner
            a.y + a.height > b.y //a's bottom left corner passes b's top left corner
}