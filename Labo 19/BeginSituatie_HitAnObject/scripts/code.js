const UPDATE_DELAY = 1000;
let score = 0;
let images;
let currentImg;
let isWaiting = false;
let scoreDisplay;

const setup = () => {
    initializeGame();
    setupScoreDisplay();
    addImageClickHandlers();
    startAutoChange();
};

const initializeGame = () => {
    let speelveld = document.getElementById("playField");
    images = Array.from(document.querySelectorAll("img"));
    images.forEach(img => img.style.display = "none");
    updateSize();
    showRandomImage();
};

const setupScoreDisplay = () => {
    scoreDisplay = document.createElement("div");
    scoreDisplay.id = "scoreDisplay";
    scoreDisplay.innerHTML = "Score: 0";
    document.body.appendChild(scoreDisplay);
};

const addImageClickHandlers = () => {
    images.forEach((img, index) => {
        img.addEventListener("click", () => handleImageClick(index));
    });
};

const handleImageClick = (index) => {
    if (isWaiting) return;

    isWaiting = true;

    if (index === 0) {
        alert("Game Over! Your score: " + score);
        score = 0;
        updateScore();
    } else {
        score++;
        updateScore();
    }

    currentImg.style.display = "none";
    setTimeout(() => {
        isWaiting = false;
        showRandomImage();
    }, UPDATE_DELAY);
};

const showRandomImage = () => {
    let speelveld = document.getElementById("playField");
    let randomIndex = Math.floor(Math.random() * images.length);
    currentImg = images[randomIndex];

    let maxLeft = speelveld.clientWidth - currentImg.offsetWidth;
    let maxTop = speelveld.clientHeight - currentImg.offsetHeight;

    let left = Math.floor(Math.random() * maxLeft);
    let top = Math.floor(Math.random() * maxTop);

    currentImg.style.position = "absolute";
    currentImg.style.left = left + "px";
    currentImg.style.top = top + "px";
    currentImg.style.display = "block";
};

const startAutoChange = () => {
    setInterval(() => {
        if (!isWaiting) {
            isWaiting = true;
            if (currentImg) currentImg.style.display = "none";
            setTimeout(() => {
                isWaiting = false;
                showRandomImage();
            }, UPDATE_DELAY);
        }
    }, UPDATE_DELAY);
};

const updateSize = () => {
    let speelveld = document.getElementById("playField");
    speelveld.style.width = window.innerWidth + "px";
    speelveld.style.height = window.innerHeight + "px";
};

const updateScore = () => {
    scoreDisplay.innerHTML = "Score: " + score;
};

window.addEventListener("load", setup);