let personen = [];
let huidigeIndex = -1; // -1 betekent: nieuwe persoon

// Voeg toe aan setup()
const setup = () => {
    let btnBewaar = document.getElementById("btnBewaar");
    btnBewaar.addEventListener("click", bewaarBewerktePersoon);

    let btnNieuw = document.getElementById("btnNieuw");
    btnNieuw.addEventListener("click", bewerkNieuwePersoon);

    let lstPersonen = document.getElementById("lstPersonen");
    lstPersonen.addEventListener("change", toonGeselecteerdePersoon);
};

// Toon gegevens van geselecteerde persoon in form
const toonGeselecteerdePersoon = () => {
    const lst = document.getElementById("lstPersonen");
    huidigeIndex = parseInt(lst.options[lst.selectedIndex].value);
    const persoon = personen[huidigeIndex];

    document.getElementById("txtVoornaam").value = persoon.voornaam;
    document.getElementById("txtFamilienaam").value = persoon.familienaam;
    document.getElementById("txtGeboorteDatum").value = persoon.geboorteDatum;
    document.getElementById("txtEmail").value = persoon.email;
    document.getElementById("txtAantalKinderen").value = persoon.aantalKinderen;
    clearAllErrors();
};

const bewerkNieuwePersoon = () => {
    console.log("Klik op de knop nieuw");

    document.getElementById("txtVoornaam").value = "";
    document.getElementById("txtFamilienaam").value = "";
    document.getElementById("txtGeboorteDatum").value = "";
    document.getElementById("txtEmail").value = "";
    document.getElementById("txtAantalKinderen").value = "";
    huidigeIndex = -1;
    clearAllErrors();
};

const bewaarBewerktePersoon = () => {
    console.log("Klik op de knop bewaar");

    valideer();
    const fouten = document.querySelectorAll(".invalid");
    if (fouten.length > 0) {
        return; // stop als er validatiefouten zijn
    }

    const persoon = {
        voornaam: document.getElementById("txtVoornaam").value.trim(),
        familienaam: document.getElementById("txtFamilienaam").value.trim(),
        geboorteDatum: document.getElementById("txtGeboorteDatum").value.trim(),
        email: document.getElementById("txtEmail").value.trim(),
        aantalKinderen: parseInt(document.getElementById("txtAantalKinderen").value.trim(), 10)
    };

    if (huidigeIndex === -1) {
        personen.push(persoon);
        huidigeIndex = personen.length - 1;
    } else {
        personen[huidigeIndex] = persoon;
    }

    toonPersonenInLijst();
    document.getElementById("lstPersonen").value = huidigeIndex;
};

const toonPersonenInLijst = () => {
    const lst = document.getElementById("lstPersonen");
    lst.innerHTML = "";
    personen.forEach((persoon, index) => {
        let option = document.createElement("option");
        option.text = `${persoon.voornaam} ${persoon.familienaam}`;
        option.value = index; // gebruik value i.p.v. id
        lst.appendChild(option);
    });
};

window.addEventListener("load", setup);