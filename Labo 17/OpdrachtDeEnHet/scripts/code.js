const setup = () => {
    let button = document.querySelector("button")
    button.addEventListener("click",vervang)
}

const vervang = () => {
    let tekstElement = document.getElementById("tekst");
    let tekst = tekstElement.value;

    let nieuweTekst = tekst.replace(/\bde\b/gi, "het");

    document.getElementById("output").innerHTML = nieuweTekst;
}

window.addEventListener("load", setup);