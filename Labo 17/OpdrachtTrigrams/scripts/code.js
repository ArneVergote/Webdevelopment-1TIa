const setup = () => {
    button = document.querySelector("button")
    button.addEventListener("click",trigrams)
}

const trigrams = () => {
    const tekstInput = document.getElementById("tekst");
    const text = tekstInput.value;
    let result = [];

    for (let i = 0; i <= text.length - 3; i++) {
        result.push(text.substring(i, i + 3));
    }
    console.log(result.join("\n"));
}

window.addEventListener("load", setup);