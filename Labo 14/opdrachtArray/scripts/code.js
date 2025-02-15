// Maak een array met minimaal vijf namen van familieleden
let familieleden = ["Jan", "Lisa", "Peter", "Sophie", "Tom"];

// Schrijf naar de console hoeveel elementen de array bevat
console.log("Aantal elementen in de array:", familieleden.length);

// Schrijf het eerste, derde en vijfde element uit de array naar de console
console.log("Eerste element:", familieleden[0]);
console.log("Derde element:", familieleden[2]);
console.log("Vijfde element:", familieleden[4]);

// Functie om een naam toe te voegen aan de array via pass-by-reference
function VoegNaamToe(array) {
    let nieuweNaam = prompt("Voer een extra naam in:");
    if (nieuweNaam) {
        array.push(nieuweNaam);
    }
}

// Roep de functie aan en voeg een naam toe
VoegNaamToe(familieleden);

// Schrijf het resultaat naar de console
console.log("Nieuwe lijst met familieleden:", familieleden);

// Converteer de array naar een string en toon deze op de console
console.log("Familieleden als string:", familieleden.join(", "));