const setup = () =>{
    berekenDagen();
}

const berekenDagen = () =>{
    let verjaardag = new Date("2004-11-10");
    let vandaag = new Date();

    let verschil = vandaag - verjaardag;
    let aantalDagen = Math.floor(verschil / (1000 * 60 * 60 * 24));

    console.log("Ik het verschil tussen mijn verjaardag en vandaag is: " + aantalDagen);
}

window.addEventListener("load", setup);