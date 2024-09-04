const container = document.querySelector(".container");
const squares = document.querySelectorAll(".square");
const changeButton = document.querySelector(".changeButton");
const resetButton = document.querySelector(".resetButton");

let currentBoxSize = 16;
setBoxSize(currentBoxSize);

changeButton.addEventListener("click", () => {
    do {
        currentBoxSize = prompt("What size do you want the box to be (square) max of 100");
    } while(0 >= currentBoxSize || currentBoxSize > 100);

    const rows = document.querySelectorAll(".row");
    rows.forEach((row) => row.remove())
    setBoxSize(currentBoxSize);
})

resetButton.addEventListener("click", () => {
    const rows = document.querySelectorAll(".row");
    rows.forEach((row) => row.remove())
    setBoxSize(currentBoxSize); 
})


function setBoxSize (boxSize) {
    for (let i = 0; i < boxSize; i++) {
        const row = document.createElement("div");
        row.setAttribute("class", "row");
        for (let j = 0; j < boxSize; j++) {
            const square = document.createElement("div");
            square.setAttribute("class", "square");
            square.addEventListener("mouseover", () => square.setAttribute("class", "hoveredSquare"))
            row.appendChild(square);
        }
        container.appendChild(row);
    }
}