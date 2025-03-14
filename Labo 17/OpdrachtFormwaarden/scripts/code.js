const setup = () => {
    let button = document.getElementById("toonResultaat");
    button.addEventListener("click", toonResultaat);
};

const toonResultaat = () => {
    let roker = document.getElementById("roker").checked ? "is een roker" : "is geen roker";
    let moedertaal = document.querySelector('input[name="moedertaal"]:checked');
    let moedertaalText = moedertaal ? `moedertaal is ${moedertaal.value}` : "moedertaal is niet geselecteerd";
    let buurland = `favoriete buurland is ${document.getElementById("buurland").value}`;
    let bestelling = Array.from(document.getElementById("bestelling").selectedOptions).map(option => option.value);
    let bestellingText = bestelling.length > 0 ? `bestelling bestaat uit ${bestelling.join(" ")}` : "geen bestelling geselecteerd";

    console.log(roker);
    console.log(moedertaalText);
    console.log(buurland);
    console.log(bestellingText);
};

window.addEventListener("load", setup);