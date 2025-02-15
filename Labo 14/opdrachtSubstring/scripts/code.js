const substring = () => {
    let pElement=document.getElementById("txtOutput");
    let txtInput = document.getElementById("Word");
    let sub1 = document.getElementById("Subs1");
    let sub2 = document.getElementById("Subs2");
    let tekst = txtInput.value;
    let start = parseInt(sub1.value);
    let end = parseInt(sub2.value);

    let result = tekst.substring(start,end);
    pElement.innerHTML = ") = " + result;
}

let btnSubstring = document.getElementById("btnSubstring");
btnSubstring.addEventListener("click", substring);