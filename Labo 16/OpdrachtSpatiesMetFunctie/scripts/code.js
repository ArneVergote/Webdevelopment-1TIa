const setup = () => {
    button = document.querySelector("button")
    button.addEventListener("click",spaties)
}

const spaties = () => {
    const tekstInput = document.getElementById("tekst");
    const spacedText = tekstInput.value.split("").join(" ").replace(/\s+/g, ' ');
    document.getElementById("output").innerHTML = spacedText;
}

window.addEventListener("load", setup);