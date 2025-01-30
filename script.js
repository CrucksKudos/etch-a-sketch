function makeGrid(squaresPerSide) {
    for (let i = 0; i < squaresPerSide * squaresPerSide; i++) {

        const square = document.createElement("div");

        square.className = 'squares'
        
        square.dataset.opacity = 0;

        container.appendChild(square);
        
        square.style.height = (800/squaresPerSide) + "px"
        square.style.width = (800/squaresPerSide) + "px";

        square.addEventListener("mouseover", () => {
            
            let randomColors = []
            for (let j = 0; j < 3; j++) {
                randomColors[j] = Math.floor(Math.random() * (255 + 1));
            }
            let opacity = Number(square.dataset.opacity);
            
            if(opacity < 100) {
                opacity += 10;
                square.dataset.opacity = opacity;
            }
            console.log(opacity);
            
            square.style.backgroundColor = "rgba(" + randomColors[0] + " " + randomColors[1] + " " + randomColors[2] + " / " + opacity + "%)";
        })
}
}

function removeGrid() {
    while (container.hasChildNodes()) {
        container.removeChild(container.firstChild);
      }
}

function clearGrid() {
    const children = document.querySelectorAll(".squares");
    const arrayChildren = Array.from(children);
    arrayChildren.forEach(function(item){
        item.style.backgroundColor = "white"
    })
}

const container = document.querySelector(".container");

let squaresPerSide = 16;


makeGrid(squaresPerSide)

const buttonDefineSize = document.createElement("button");

document.body.appendChild(buttonDefineSize)

buttonDefineSize.textContent = "Click here to define Squares per Side"

buttonDefineSize.addEventListener("click", () => {
    do {
        squaresPerSide = prompt("Number of Squares per Side:")
    }
    while (squaresPerSide < 0 || squaresPerSide > 100 || squaresPerSide == "")
    removeGrid();
    makeGrid(squaresPerSide)
})

const buttonClean = document.createElement("button");

document.body.appendChild(buttonClean)

buttonClean.textContent = "Click here to clean"

buttonClean.addEventListener("click", () => {
    clearGrid();
})

