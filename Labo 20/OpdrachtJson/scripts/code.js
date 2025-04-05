const student1 = {
    naam: "Lotte",
    leeftijd: 21,
    richting: "Toegepaste informatica",
    scores: [15, 18, 17],
    ingeschreven: new Date("2023-09-15T08:30:00")
};

const jsonString = JSON.stringify(student1);
console.log("JSON String:", jsonString);