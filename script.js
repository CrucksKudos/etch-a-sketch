const container = document.querySelector(".container");

function makeGrid(squaresPerSide) {
    for (let i = 0; i < squaresPerSide * squaresPerSide; i++) {

        const square = document.createElement("div");

        square.className = 'squares'

        container.appendChild(square);
        
        square.style.height = (800/squaresPerSide) + "px"
        square.style.width = (800/squaresPerSide) + "px";

        square.dataset.opacity = 0;

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

//Beginning of the Code 
let squaresPerSide = 16;
makeGrid(squaresPerSide);

const buttonDefineSize = document.createElement("button");
const buttonClean = document.createElement("button");

document.body.appendChild(buttonDefineSize)
document.body.appendChild(buttonClean)

buttonDefineSize.textContent = "Click here to define Squares per Side"
buttonClean.textContent = "Click here to clean"

buttonDefineSize.addEventListener("click", () => {
    let newSize;
    do {
        newSize = prompt("Number of Squares per Side:")
        if (newSize === null) return;
    }
    while (isNaN(newSize) || newSize < 1 || newSize > 100);
    removeGrid();
    makeGrid(newSize)
})

buttonClean.addEventListener("click", clearGrid)


