let startGameBtn = document.getElementById("start-game");
let title = document.getElementById("title");
let changeTitle = true;
let changeInstructionHeading = true;
let changeControlsHeading = true;
let instructionHeading = document.getElementById("instruction-heading");
let controlsHeading = document.getElementById("controls-heading");
let opacity = 1;
let interval = 70;

window.onload = function() {
    startGameBtn.onclick = function() {
        location.href = "game.html";
    };
    setTimeout(() => {fadeOutTitle(title)}, 1000);
}

function fadeOutTitle(str) {
    var fadeInterval = setInterval(() => {
        if (opacity > 0){
        opacity += -0.1;
        str.style.opacity = opacity;
        console.log(opacity);
        } else {
        clearInterval(fadeInterval);
        fadeInTitle(str);
        }
    }, interval);
}

function fadeInTitle(str) {
    str.style.fontFamily = "Montserrat, sans-serif";
    str.style.fontSize = "1.8rem";
    var fadeInterval = setInterval(() => {
        if (opacity < 1){
            opacity += 0.1;
            str.style.opacity = opacity;
            console.log(opacity);
        } else {
            clearInterval(fadeInterval);
            changeInstructionHeading ? (fadeOutTitle(instructionHeading), changeInstructionHeading = false)
                : changeControlsHeading ? (fadeOutTitle(controlsHeading), changeControlsHeading = false) : console.log("All changed");
        };
    }, interval);
}