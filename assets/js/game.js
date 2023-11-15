// game area variables
let gamearea;
let gameareaHeight = 800;
let gameareaWidth = 300;
let context;

// ufo variables
let ufoHeight = 50;
let ufoWidth = 80;
let ufoX = 45;
let ufoY = gameareaHeight - ufoHeight;
let ufoImage;
let ufo = {
    x : ufoX,
    y : ufoY,
    height: ufoHeight,
    width: ufoWidth
}