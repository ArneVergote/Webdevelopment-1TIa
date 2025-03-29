let global = {
    AANTAL_HORIZONTAAL: 6,
    AANTAL_VERTICAAL: 3,
    AANTAL_KAARTEN: 6,
    kaarten: [],
    geselecteerdeKaarten: [],
    gevondenPairs: 0
};

const setup = () => {
    let container = document.createElement("div");
    container.classList.add("memory-game");
    document.body.appendChild(container);


    let images = [];
    for (let i = 1; i <= global.AANTAL_KAARTEN; i++) {
        images.push(`images/kaart${i}.jpg`);
        images.push(`images/kaart${i}.jpg`);
        images.push(`images/kaart${i}.jpg`);
    }

    shuffleArray(images);

    images.forEach((imgSrc, index) => {
        let kaart = document.createElement("div");
        kaart.classList.add("kaart");
        kaart.dataset.index = index;
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

        global.kaarten.push(kaart);
    });
};

const flipKaart = (event) => {
    let kaart = event.currentTarget;

    if (global.geselecteerdeKaarten.length < 3 && !kaart.classList.contains("flipped")) {
        kaart.classList.add("flipped");
        global.geselecteerdeKaarten.push(kaart);
    }

    if (global.geselecteerdeKaarten.length === 3) {
        setTimeout(checkMatch, 1000);
    }
};

const checkMatch = () => {
    let [kaart1, kaart2, kaart3] = global.geselecteerdeKaarten;

    if (kaart1.dataset.image === kaart2.dataset.image && kaart1.dataset.image === kaart3.dataset.image) {
        setTimeout(() => {
            kaart1.style.visibility = "hidden";
            kaart2.style.visibility = "hidden";
            kaart3.style.visibility = "hidden";
            global.gevondenPairs++;

            if (global.gevondenPairs === global.AANTAL_KAARTEN) {
                alert("Gefeliciteerd! Je hebt gewonnen!");
            }
        }, 500);
    } else {
        // Terug omdraaien als ze geen match zijn
        kaart1.classList.remove("flipped");
        kaart2.classList.remove("flipped");
        kaart3.classList.remove("flipped");
    }

    global.geselecteerdeKaarten = [];
};

const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
};

window.addEventListener("load", setup);