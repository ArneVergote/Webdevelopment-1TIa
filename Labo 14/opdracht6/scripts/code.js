const kopieer = () => {
    let pElement=document.getElementById("txtOutput");
    let txtInput = document.getElementById("txtInput");
    let tekst = txtInput.value;
    pElement.innerHTML = tekst;
}

let btnKopieer = document.getElementById("btnKopieer");
btnKopieer.addEventListener("click", kopieer);