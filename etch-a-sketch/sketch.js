const gridContainer = document.querySelector("#gridContainer");
const resetButton = document.querySelector("#reset-button");
const clearButton = document.querySelector("#clear-button");

window.addEventListener("load", setDefaultGrid);
resetButton.addEventListener("click", changeSize);
clearButton.addEventListener("click", resetGrid);

let currentSize = 16;



function setDefaultGrid() {
    setGridSize(currentSize);
    fillGrid(currentSize);
}

function setGridSize(size) {
    gridContainer.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
}

function fillGrid(size) {
    for(let i = 0; i < size * size; i++) {
        const gridElement = document.createElement("div");
        gridElement.classList = "grid-div";
        gridElement.addEventListener("mouseover", changeColor);
        gridContainer.appendChild(gridElement);
    }
}

function changeColor(e) {
    e.target.style.backgroundColor = "black";
}

function changeSize() {
    let newSize = prompt("Enter new size.")

    if(newSize !== null) {
        currentSize = parseInt(newSize);
        if(currentSize < 1 || currentSize > 64 || Number.isNaN(currentSize)) {
            alert("Please enter a number from 1 - 64 range.");
            changeSize();
        } else {
            clearGrid();
            setGridSize(currentSize);
            fillGrid(currentSize);
        }
    }
}

function clearGrid() { //Utility function for change size
    const gridArray = Array.from(gridContainer.childNodes);
    gridArray.forEach((element) => {
        gridContainer.removeChild(element);
    });
}

function resetGrid() { //Bound to "Clear Grid" HTML button
    clearGrid();
    fillGrid(currentSize);
}