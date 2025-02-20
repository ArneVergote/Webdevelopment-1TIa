const setup = () => {
    let sliders = document.getElementsByClassName("slider");

    sliders[0].addEventListener("change", update);
    sliders[0].addEventListener("input", update);
    sliders[1].addEventListener("change", update);
    sliders[1].addEventListener("input", update);
    sliders[2].addEventListener("change", update);
    sliders[2].addEventListener("input", update);

    update();
}

const update = () => {
    let sliders = document.getElementsByClassName("slider");
    let red = sliders[0].value;
    let green = sliders[1].value;
    let blue = sliders[2].value;
    document.querySelector(".red").innerHTML = red;
    document.querySelector(".green").innerHTML = green;
    document.querySelector(".blue").innerHTML = blue;

    let colorDemos = document.getElementsByClassName("colorDemo");
    colorDemos[0].style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
}

window.addEventListener("load", setup);