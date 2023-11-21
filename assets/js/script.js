let startGameBtn = document.getElementById("start-game");
let title = document.getElementById("title");
let opacity = 1;
let interval = 100;

window.onload = function() {
    startGameBtn.onclick = function() {
        location.href = "game.html";
    };
    setTimeout(fadeTitle, 1200);
}

function changeFont() {
    
}

function fadeTitle() {
        const fadeOutInterval = setInterval(() => {
            if (opacity > 0){
            opacity += -0.1;
            title.style.opacity = opacity;
            console.log(opacity);
            } else {
            clearInterval(fadeOutInterval);
            fadeInTitle();
            }
        }, interval);
}

function fadeInTitle() {
    title.style.fontFamily = "Montserrat, sans-serif";
    title.style.fontSize = "1.8rem";
    const fadeInInterval = setInterval(() => {
        if (opacity < 1){
            opacity += 0.1;
            title.style.opacity = opacity;
            console.log(opacity);
        } else {
            clearInterval(fadeInInterval);
        }
    }, interval);
}
// function fadeInTitle() {
//     if (opacity < 1) {
//         opacity += 0.1;
//         title.style.opacity = opacity;
//         setTimeout(fadeInTitle, 100);
//         console.log(opacity);
//     };
// }