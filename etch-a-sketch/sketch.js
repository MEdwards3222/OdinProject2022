const gridContainer = document.querySelector("#gridContainer");
const resetButton = document.querySelector("#reset-button");

window.addEventListener("load", setDefaultGrid);
resetButton.addEventListener("click", changeSize);



function setDefaultGrid() {
    setGridSize(16);
    fillGrid(16);
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
        newSize = parseInt(newSize);
        if(newSize < 1 || newSize > 64 || Number.isNaN(newSize)) {
            alert("Please enter a number from 1 - 64 range.");
            changeSize();
        } else {
            clearGrid();
            setGridSize(newSize);
            fillGrid(newSize);
        }
    }
}

function clearGrid() {
    const gridArray = Array.from(gridContainer.childNodes);
    gridArray.forEach((element) => {
        gridContainer.removeChild(element);
    });
}