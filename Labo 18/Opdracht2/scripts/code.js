const setup = () => {
    update();
}

const update = () => {
    const listItems = document.querySelectorAll('li');
    for (let i = 0; i < listItems.length; i++) {
        listItems[i].classList.add('listitem');
    }

    const img = document.createElement('img');
    img.src = 'https://via.placeholder.com/150'; // Replace with your picture URL
    img.alt = 'Picture of me';
    document.body.appendChild(img);
}

window.addEventListener("load", setup)