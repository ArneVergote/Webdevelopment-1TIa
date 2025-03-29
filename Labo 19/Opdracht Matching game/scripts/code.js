let global = {
    AANTAL_HORIZONTAAL: 6,
    AANTAL_VERTICAAL: 3,
    AANTAL_KAARTEN: 6, 
    AANTAL_GELIJK: 3,
    KAARTEN: [],
    GESELECTEERDE_KAARTEN: [],
    GEVONDEN_PAIRS: 0
};

const setup = () => {
    let container = document.createElement("div");
    container.classList.add("memory-game");
    document.body.appendChild(container);

    container.style.display = "grid";
    container.style.gridTemplateColumns = `repeat(${global.AANTAL_HORIZONTAAL}, 200px)`;
    container.style.gap = "15px";
    container.style.justifyContent = "center";

    let images = [];
    for (let i = 1; i <= global.AANTAL_KAARTEN; i++) {
        for (let j = 0; j < global.AANTAL_GELIJK; j++) {
            images.push(`images/kaart${i}.jpg`);
        }
    }

    shuffleArray(images);

    images.forEach((imgSrc, index) => {
        let kaart = document.createElement("div");
        kaart.classList.add("kaart");
        kaart.dataset.image = imgSrc;

        let front = document.createElement("img");
        front.src = imgSrc;
        front.classList.add("front");

        let back = document.createElement("div");
        back.classList.add("back");

        kaart.appendChild(front);
        kaart.appendChild(back);
        kaart.addEventListener("click", flipKaart);
        container.appendChild(kaart);

        global.KAARTEN.push(kaart);
    });
};

const flipKaart = (event) => {
    let kaart = event.currentTarget;

    if (global.GESELECTEERDE_KAARTEN.length < global.AANTAL_GELIJK && !kaart.classList.contains("flipped")) {
        kaart.classList.add("flipped");
        global.GESELECTEERDE_KAARTEN.push(kaart);
    }

    if (global.GESELECTEERDE_KAARTEN.length === global.AANTAL_GELIJK) {
        setTimeout(checkMatch, 1000);
    }
};

const checkMatch = () => {
    if (global.GESELECTEERDE_KAARTEN.length !== global.AANTAL_GELIJK) {
        return;
    }

    let eersteKaart = global.GESELECTEERDE_KAARTEN[0];
    let isMatch = global.GESELECTEERDE_KAARTEN.every(kaart => kaart.dataset.image === eersteKaart.dataset.image);

    if (isMatch) {
        global.GESELECTEERDE_KAARTEN.forEach(kaart => kaart.style.visibility = "hidden"); // 🔹 Kaarten blijven op hun plek
        global.GEVONDEN_PAIRS++;

        if (global.GEVONDEN_PAIRS === global.AANTAL_KAARTEN) {
            setTimeout(() => alert("Gefeliciteerd! Je hebt gewonnen!"), 500);
        }
    } else {
        global.GESELECTEERDE_KAARTEN.forEach(kaart => kaart.classList.remove("flipped"));
    }

    global.GESELECTEERDE_KAARTEN = [];
};

const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
};

window.addEventListener("load", setup);