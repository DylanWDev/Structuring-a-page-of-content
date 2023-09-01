// Get a reference to the image element
const bird = document.getElementById("bird");

// Set the initial position of the image
let posX = 0;
let posY = 0;

// Define a function to move the image
function moveImage(directionX, directionY) {
    posX += directionX;
    posY += directionY;
    bird.style.transform = `translate(${posX}px, ${posY}px)`;
}

// Listen for keydown events
document.addEventListener("keydown", (event) => {
    switch (event.key) {
        case "ArrowLeft":
            moveImage(-10, 0); // Move left
            break;
        case "ArrowRight":
            moveImage(10, 0); // Move right
            break;
        case "ArrowUp":
            moveImage(0, -10); // Move up
            break;
        case "ArrowDown":
            moveImage(0, 10); // Move down
            break;
    }
});

const audio = document.getElementById("myAudio");

function playAudio() {
    if (audio.paused) {
        audio.play();
    } else {
        audio.pause();
        audio.currentTime = 0;
    }
}

document.addEventListener("keydown", (event) => {
    if (event.key === " ") { // Check if the pressed key is the spacebar
        playAudio();
    }
});
