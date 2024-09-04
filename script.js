const container = document.querySelector(".container");
const squares = document.querySelectorAll(".square");
const button = document.querySelector("button");
setBoxSize(16);

button.addEventListener("click", () => {
    let boxSize = 0;
    do {
        boxSize = prompt("What size do you want the box to be (square) max of 100");
    } while(boxSize > 100);

    const rows = document.querySelectorAll(".row");
    rows.forEach((row) => row.remove());
    setBoxSize(boxSize);
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