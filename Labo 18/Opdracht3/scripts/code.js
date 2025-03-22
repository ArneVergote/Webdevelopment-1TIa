const setup = () => {
    appendElement();
}

const appendElement = () => {
    const p = document.createElement('p');

    p.textContent = 'This is a new paragraph added to the DIV!';
    const myDIV = document.getElementById('myDIV');
    myDIV.appendChild(p);
}

window.addEventListener("load", setup);