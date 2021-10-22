const flip = (e) => e.currentTarget.classList.toggle('flip');
const mapToAlphabet = (number) => ['A', 'B', 'C', 'D'][number];

const addClick = () => {
    const cards = document.getElementsByClassName('card');
    Array.prototype.map.call(cards, (card) => card.addEventListener('click', flip));
}

const replaceText = (element, front) => {
    const temp = element.textContent;
    element.innerHTML = `
<div class="side front">${front()}</div>
<div class="side back" contenteditable="true">${temp}</div>
    `;
}

const generateFinals = () => {
    const finals = document.getElementById('finals').getElementsByClassName('card');
    Array.prototype.map.call(finals, (final, index) => {
        replaceText(final, () => `Final ${index + 1}`);
    });
};

const generateGrid = () => {
    const collections = document.getElementById('grid').getElementsByClassName('wordcollection');

    Array.prototype.map.call(collections, (collection, colIndex) => {
        const cards = collection.getElementsByClassName('card');

        Array.prototype.map.call(cards, (wordNode, wordIndex) => {
            const number = (wordIndex === cards.length - 1) ? '' : wordIndex + 1;
            replaceText(wordNode, () => mapToAlphabet(colIndex) + number);
        });
    });
}

const main = () => {
    console.log(`main`);
    generateGrid();
    generateFinals();
    addClick();
};

document.addEventListener("DOMContentLoaded", main);
