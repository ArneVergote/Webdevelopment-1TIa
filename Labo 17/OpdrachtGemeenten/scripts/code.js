const setup = () => {
    let gemeenten = [];
    let invoer;

    while (true) {
        invoer = prompt("Voer een gemeente in (of typ 'stop' om te stoppen):");
        if (invoer === null || invoer.toLowerCase() === "stop") break;
        if (invoer.trim() !== "") {
            gemeenten.push(invoer.trim());
        }
    }

    gemeenten.sort();

    const selectElement = document.getElementById("gemeenteSelect");

    // Gebruik een for-loop om de opties toe te voegen
    for (let i = 0; i < gemeenten.length; i++) {
        let option = document.createElement("option");
        option.textContent = gemeenten[i];
        option.value = gemeenten[i];
        selectElement.appendChild(option);
    }
}

window.addEventListener("load", setup);