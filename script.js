function makeGrid(squaresPerSide) {
    for (let i = 0; i < squaresPerSide * squaresPerSide; i++) {

        const square = document.createElement("div");
        
        container.appendChild(square);
        
        square.style.height = (800/squaresPerSide) + "px"
        square.style.width = (800/squaresPerSide) + "px";

        square.addEventListener("mouseover", () => {
            
            let randomColors = []
            for (let j = 0; j < 3; j++) {
                randomColors[j] = Math.random() * (255 + 1);
            }
            square.style.backgroundColor = "rgb(" + randomColors[0] + "," + randomColors[1] + "," + randomColors[2] + ")"


        })
}
}

function removeGrid() {
    while (container.hasChildNodes()) {
        container.removeChild(container.firstChild);
      }
}



const container = document.querySelector(".container");

let squaresPerSide = 16;

makeGrid(squaresPerSide)

console.log(squaresPerSide)

const button = document.createElement("button");

document.body.appendChild(button)

button.textContent = "Click here to define Squares per Side"

button.addEventListener("click", () => {
    do {
        squaresPerSide = prompt("Number of Squares per Side:")
    }
    while (squaresPerSide < 0 || squaresPerSide > 100)
    removeGrid();
    makeGrid(squaresPerSide)
})

