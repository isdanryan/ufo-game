let startGameBtn = document.getElementById("start-game");
let title = document.getElementById("title");
let instructionHeading = document.getElementById("instruction-heading");
let controlsHeading = document.getElementById("controls-heading");
let opacity = 1;
let interval = 100;

window.onload = function() {
    startGameBtn.onclick = function() {
        location.href = "game.html";
    };
    setTimeout(fadeOutTitle, 1200);
}

function changeFont() {
    
}

function fadeOutTitle() {
    var fadeInterval = setInterval(() => {
        if (opacity > 0){
        opacity += -0.1;
        title.style.opacity = opacity;
        console.log(opacity);
        } else {
        clearInterval(fadeInterval);
        fadeInTitle();
        }
    }, interval);
}

function fadeInTitle() {
    title.style.fontFamily = "Montserrat, sans-serif";
    title.style.fontSize = "1.8rem";
    var fadeInterval = setInterval(() => {
        if (opacity < 1){
            opacity += 0.1;
            title.style.opacity = opacity;
            console.log(opacity);
        } else {
            clearInterval(fadeInterval);
        }
    }, interval);
}

// function fadeInInstructions() {
//     title.style.fontFamily = "Montserrat, sans-serif";
//     title.style.fontSize = "1.8rem";
//     const fade
// }
// function fadeInTitle() {
//     if (opacity < 1) {
//         opacity += 0.1;
//         title.style.opacity = opacity;
//         setTimeout(fadeInTitle, 100);
//         console.log(opacity);
//     };
// }