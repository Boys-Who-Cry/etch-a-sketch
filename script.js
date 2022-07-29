const container = document.querySelector("#container");

const editGridButton = document.querySelector("#editGridButton");

const askForGridSize = () => {
    let getGridSize = prompt("How many squares per side should the grid be? Must be less than 100.");
    drawGrid(getGridSize);
    console.log(container);
}
const drawGrid = (gridSize) => {
    //container.style.width = `${gridSize}px`;
    if(gridSize > 100){
        askForGridSize();
    }
    container.style.width = `${10 * gridSize}px`;
    container.innerHTML = "";
    gridSize *= gridSize;
    for(let i = 0; i < gridSize; i++){
        let cell = document.createElement("div");
        cell.classList.add("cell");
        container.appendChild(cell);
    }
}
editGridButton.addEventListener("click", askForGridSize);

for(let i = 0; i < 100; i++){
    let cell = document.createElement("div");
    cell.classList.add("cell");
    container.appendChild(cell);
}