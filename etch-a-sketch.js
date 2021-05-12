
/*
params: current hover count
return: random rgb value that reduces in tone by 10% 
        for each call after first until black.
*/
function getRandomRGB(currentHoverCount) {
    const maxValue = Math.floor(256 * (1 - currentHoverCount/10));
    const randRed = Math.floor(Math.random() * maxValue);
    const randGreen = Math.floor(Math.random() * maxValue);
    const randBlue = Math.floor(Math.random() * maxValue);
    return `rgb(${randRed},${randGreen}, ${randBlue})`;
}

function alterCellColor() {
    this.style.setProperty('background-color', getRandomRGB(this.getHoverCount()));
}

function setHoverCount() {
    this.hoverCount++;
}

function drawGrid(rows, cols) {
    gridContainer.style.setProperty('--grid-rows', rows);
    gridContainer.style.setProperty('--grid-cols', cols);

    for (let i = 0; i < (rows * cols); i++) {
        const cell = document.createElement('div');
        cell.style.border = 'solid black 1px';
        gridContainer.appendChild(cell).className = 'grid-item';
    }
}

function refreshPage() {
    window.location.reload();
}

// returns: user number if input <= 100
function validateGridSize() {
    const userNum = Number(prompt('Enter a single value n for grid size n x n (n must be <= 100): '));
    while (userNum > 100) {
        userNum = Number(prompt('Enter a single value n for grid size n x n (n must be <= 100): '));
    }
    return userNum;
}

const userNum = validateGridSize();

const gridContainer = document.getElementById('grid-container');
drawGrid(userNum,userNum);

const allCells = document.querySelectorAll('.grid-item');
allCells.forEach((cell) => {
    cell.hoverCount = 0;
    cell.addEventListener('mouseover', alterCellColor);
    cell.addEventListener('mouseover', setHoverCount);
    cell.getHoverCount = () => cell.hoverCount;
})

const button = document.getElementById('clear-button');
button.addEventListener('click', refreshPage);