

function getRandomRGB() {
    const randRed = Math.floor(Math.random() * 256);
    const randGreen = Math.floor(Math.random() * 256);
    const randBlue = Math.floor(Math.random() * 256);
    return `rgb(${randRed},${randGreen}, ${randBlue})`
}

/*
params: row and column values
returns: a drawn grid
*/
function drawGrid(rows, cols) {
    gridContainer.style.setProperty('--grid-rows', rows);
    gridContainer.style.setProperty('--grid-cols', cols);

    for (let i = 0; i < (rows * cols); i++) {
        let cell = document.createElement('div');
        cell.style.border = 'solid black 1px';
        gridContainer.appendChild(cell).className = 'grid-item';
    }
}

const gridContainer = document.getElementById('grid-container');
drawGrid(5,5);