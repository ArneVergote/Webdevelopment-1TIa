const setup = () => {
    const button = document.querySelector('button');
    button.addEventListener("click", calculate)
}

const calculate = () => {
    let totaal = 0;
    const rows = document.querySelectorAll('tbody tr');

    for (let i = 0; i < rows.length - 1; i++) {
        const row = rows[i];
        const priceText = row.querySelector('.price')?.textContent;
        const amountInput = row.querySelector('.aantal input');
        const btwText = row.querySelector('.btw')?.textContent;
        const subtotalCell = row.querySelector('.subtotaal');

        if (priceText && amountInput && btwText && subtotalCell) {
            const price = parseFloat(priceText.replace(' Eur', '').replace(',', '.'));
            const amount = parseFloat(amountInput.value.replace(',', '.')) || 0;
            const btw = parseFloat(btwText.replace('%', '')) / 100;

            const subtotal = price * amount * (1 + btw);
            subtotalCell.textContent = subtotal.toFixed(2) + ' Eur';

            totaal += subtotal;
        }
    }

    document.getElementById('totaal').textContent = totaal.toFixed(2) + ' Eur';
}

window.addEventListener("load", setup);