const container = document.querySelector(".container");

let squaresPerSide = 16

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