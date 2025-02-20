const setup = () => {
    const buttons = document.getElementsByClassName("button");

    buttons[0].addEventListener("click", () => changeButton(0));
    buttons[1].addEventListener("click", () => changeButton(1));
    buttons[2].addEventListener("click", () => changeButton(2));
}
const changeButton = (index) => {
    const buttons = document.getElementsByClassName("button");
    const button = buttons[index];

    // Toggle colors
    if (button.style.backgroundColor === 'blue') {
        button.style.backgroundColor = 'white';
        button.style.color = 'black';
    } else {
        button.style.backgroundColor = 'blue';
        button.style.color = 'white';
    }
}

window.addEventListener("load", setup);