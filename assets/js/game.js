// game area variables
let gamearea;
let gameareaHeight = 300;
let gameareaWidth = 700;
let context;
let gameover = false;
let score = 0;


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
let asteroidX = 700;
let asteroidY;
let asteroidImage;
let asteroidHeight = 50;
let asteroidWidth = 50;
let moveSpeed = -4; // set speed asteroids move accross screen right to left

// stars for background

let starArray = [];

let star1Width = 10;
let star1Height = 10;
let star2Width = 20;
let star2Height = 20;
let star3Width = 30;
let star3Height = 30;

let starX = 700;
let starY;

let star1Image;
let star2Image;
let star3Image;

let starSpeed = -2;


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

    // draw background stars
    star1Image = new Image();
    star1Image.src = "./assets/img/star1.png";

    star2Image = new Image();
    star2Image.src = "./assets/img/star2.png";

    star3Image = new Image();
    star3Image.src = "./assets/img/star3.png";

    requestAnimationFrame(update);
    setInterval(addAsteroid, 1000); // frequency asteroids are drawn
    setInterval(addStar, 500); // frequency stars are drawn
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
    for (let s = 0; s < starArray.length; s++){
        let star = starArray[s];
        star.x += starSpeed;
        context.drawImage(star.img, star.x, star.y, star.width, star.height);
    }
    context.drawImage(ufoImage, ufo.x, ufo.y, ufo.width, ufo.height);
    for (let i = 0; i < asteroidArray.length; i++){
        let asteroid = asteroidArray[i];
        asteroid.x += moveSpeed;
        context.drawImage(asteroidImage, asteroid.x, asteroid.y, asteroid.width, asteroid.height);
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
    if (asteroidChance > 0.30) { // check chance isn't to often or not enough
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
            a.y + a.height > b.y //a's bottom right corner passes b's top left corner
}

function addStar() {
    if (gameover) {
        return;
    };
    let star = {
        x: starX,
        y: starY,
        height: null,
        width: null,
        img: null
    }

    //create chance to spawn asteroid
    let starChance = Math.random();
    if (starChance > 0.80) { // check chance isn't to often or not enough
        star.img = star3Image;
        star.y = Math.floor(Math.random() * 270);
        star.width = star3Width;
        star.height = star3Height;
        starArray.push(star); // add asteroid to array to track accross screen on redraws
    } else if (starChance > 0.40) { // check chance isn't to often or not enough
        star.img = star2Image
        star.y = Math.floor(Math.random() * 270);
        star.width = star2Width;
        star.height = star2Height;
        starArray.push(star); // add asteroid to array to track accross screen on redraws
    } else if (starChance > 0.10) { // check chance isn't to often or not enough
        star.img = star1Image;
        star.y = Math.floor(Math.random() * 270);
        star.width = star1Width;
        star.height = star1Height;
        starArray.push(star); // add asteroid to array to track accross screen on redraws
    }

    // remove asteroids from array once off screen to prevent taking too much memory over time
    if (starArray.length > 20) {
        starArray.shift();
    }
}