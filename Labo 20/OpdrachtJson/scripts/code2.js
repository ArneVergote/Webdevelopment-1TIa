const jsonString = '{"naam":"Lotte","leeftijd":21,"richting":"Toegepaste informatica","scores":[15,18,17],"ingeschreven":"2023-09-15T08:30:00.000Z"}';

const student2 = JSON.parse(jsonString);
console.log("Naam van student:", student2.naam);
console.log("Ingeschreven:", student2.ingeschreven);
console.log("Type van 'ingeschreven':", typeof student2.ingeschreven);