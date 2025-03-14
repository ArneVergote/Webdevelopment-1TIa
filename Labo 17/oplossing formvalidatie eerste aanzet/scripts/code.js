const setup = () => {
	let btnValideer=document.getElementById("btnValideer");
	btnValideer.addEventListener("click", valideer);
};

const valideer = () => {
	valideerVoornaam();
	valideerAchternaam();
	valideerGeboortedatum();
	valideerEmail();
	valideerAantalKinderen();
};

const valideerVoornaam = () => {
	let txtVoornaam = document.getElementById("txtVoornaam");
	let errVoornaam = document.getElementById("errVoornaam");
	let voornaam = txtVoornaam.value.trim();

	if (voornaam.length > 30) {
		txtVoornaam.className="invalid"; // invalid class instellen
		errVoornaam.innerHTML = "max. 30 karakters";
	} else {
		txtVoornaam.className=""; // alle classes verwijderen
		errVoornaam.innerHTML = "";
	}
};

const valideerAchternaam = () => {
	let txtFamilienaam = document.getElementById("txtFamilienaam");
	let errFamilinaam = document.getElementById("errFamilienaam");
	let familieNaam = txtFamilienaam.value.trim();

	if (familieNaam.length > 50) {
		txtFamilienaam.className="invalid"; // invalid class instellen
		errFamilinaam.innerHTML = "max. 50 karakters";
	} else if (familieNaam.length === 0) {
		txtFamilienaam.className="invalid"; // invalid class instellen
		errFamilinaam.innerHTML = "min. 1 karakter";
	} else {
		txtFamilienaam.className=""; // alle classes verwijderen
		errFamilinaam.innerHTML = "";
	}
};

const valideerGeboortedatum = () => {
	let txtGeboortedatum = document.getElementById("txtGeboortedatum");
	let errGeboortedatum = document.getElementById("errGeboortedatum");
	let geboortedatum = txtGeboortedatum.value.trim();
	let jaartal = Number(geboortedatum.substring(0, 4));
	let maand = Number(geboortedatum.substring(5, 7));
	let dag = Number(geboortedatum.substring(8, 10));

	if (geboortedatum.length === 0) {
		txtGeboortedatum.className="invalid"; // invalid class instellen
		errGeboortedatum.innerHTML = "min. 1 karakter";
	} else if (geboortedatum.charAt(4) !== '-' || geboortedatum.charAt(7) !== '-') {
		txtGeboortedatum.className = "invalid";
		errGeboortedatum.innerHTML = "Streepjes moeten op positie 5 en 8 staan (YYYY-MM-DD)";
	} else if (isNaN(jaartal) || geboortedatum.substring(0,4).length !== 4 || jaartal < 1000 || jaartal > 9999) {
		txtGeboortedatum.className = "invalid";
		errGeboortedatum.innerHTML = "Jaartal moet 4 cijfers zijn";
	}  else if (isNaN(maand) || isNaN(dag) || geboortedatum.substring(5,7).length !== 2 || geboortedatum.substring(8,10).length !== 2 || dag < 1 || dag > 31 || maand < 1 || maand > 12) {
		txtGeboortedatum.className = "invalid";
		errGeboortedatum.innerHTML = "Maand moet tussen 01 en 12 zijn";
	} else {
		txtGeboortedatum.className=""; // alle classes verwijderen
		errGeboortedatum.innerHTML = "";
	}
};

const valideerEmail = () => {
	let txtEmail = document.getElementById("txtEmail");
	let errEmail = document.getElementById("errEmail");
	let email = txtEmail.value.trim();
	let atIndex = email.indexOf("@");

	if (email.length === 0) {
		txtEmail.className="invalid"; // invalid class instellen
		errEmail.innerHTML = "min. 1 karakter";
	} else if (atIndex === -1 || atIndex === 0 || atIndex === email.length - 1) {
		txtEmail.className = "invalid";
		errEmail.innerHTML = "Geen geldig e-mailadres";
	} else {
		txtEmail.className=""; // alle classes verwijderen
		errEmail.innerHTML = "";
	}
};

const valideerAantalKinderen = () => {
	let aantalKinderen = document.getElementById("aantalKinderen");
	let errAantalKinderen = document.getElementById("errAantalKinderen");
	let aantal = Number(aantalKinderen.value.trim());

	if (isNaN(aantal) || aantal < 0) {
		aantalKinderen.className="invalid"; // invalid class instellen
		errAantalKinderen.innerHTML = "is geen positief getal";
	} else if (aantal >= 99) {
		aantalKinderen.className="invalid"; // invalid class instellen
		errAantalKinderen.innerHTML = "is te vruchtbaar";
	} else {
		aantalKinderen.className=""; // alle classes verwijderen
		errAantalKinderen.innerHTML = "";
	}
};

window.addEventListener("load", setup);