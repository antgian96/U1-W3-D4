
let extractedNumbers = []; 

const createTombolaCells = function () {
    const tombolaSection = document.getElementById('tombola');

    if (!tombolaSection) {
        console.error('Elemento con id "tombola" non trovato nel DOM!');
        return;
    }

    const maxNumber = 76;

    
    for (let i = 0; i < maxNumber; i++) {
        const cell = document.createElement('div');
        
        cell.classList.add('tombola-cell');
        
        cell.innerText = i + 1;

        
        cell.id = 'cell-' + (i + 1); 

        tombolaSection.appendChild(cell);
    }
};


const extractNumber = function (event) {
    event.preventDefault();

    if (extractedNumbers.length >= 76) {
        alert('Tutti i numeri sono stati estratti!');
        return;
    }

    let randomNumber;

    
    while (true) {
        randomNumber = Math.floor(Math.random() * 76) + 1;
        if (!extractedNumbers.includes(randomNumber)) {
            break; 
        }
    }

    
    extractedNumbers.push(randomNumber);

    
    const extractedCell = document.getElementById('cell-' + randomNumber);
    if (extractedCell) {
        extractedCell.classList.add('highlight');
    }

    
    console.log('Numero estratto:', randomNumber);
};


const resetGame = function () {
    extractedNumbers = []; 

    
    const tombolaCells = document.querySelectorAll('.tombola-cell');
    tombolaCells.forEach(cell => {
        cell.classList.remove('highlight');
    });

    console.log('Il gioco è stato resettato!');
};


document.addEventListener('DOMContentLoaded', function () {
    createTombolaCells(); 

    
    const extractButton = document.getElementById('extract-button');
    const resetButton = document.getElementById('reset-button'); 

    if (extractButton) {
       
        extractButton.addEventListener('click', extractNumber);
    } else {
        console.error('Bottone con id "extract-button" non trovato nel DOM!');
    }

    if (resetButton) {
        
        resetButton.addEventListener('click', resetGame);
    } else {
        console.error('Bottone con id "reset-button" non trovato nel DOM!');
    }
});