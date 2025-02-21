const setup = () => {
    tellen();
}

const tellen = () => {
    let tekst = document.getElementById("tekst").textContent;
    tekst = tekst.toLowerCase();
    let an = tekst.trim().split("an")
    let anCount = an.length - 1;
    document.getElementById("output").innerHTML = anCount;
}

window.addEventListener("load", setup);