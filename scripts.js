let squares = 16;
let startSquares = squares**2;
let sqDimensions = 100/squares;

function getSquares() {
    var numIn = parseInt(prompt("Choose a board size between 1 & 100",""), 10);
    if (isNaN(numIn)) { 
        alert("Please enter a number");
        getSquares();
    }
    else if (numIn > 100 || numIn < 1) {
        alert("Please choose a number between 1 & 100")
        getSquares();
    }
    return numIn;
}

function createSquares(dimensions) {
    let div1 = document.createElement("div");
    div1.style.width = `${dimensions}%`;
    div1.style.height = `${dimensions}%`;
    div1.style.margin = "0";
    div1.style.border = "0";
    div1.style.display = "flex";
    div1.style.background = "ivory";
    div1.className = "checkers";
    div1.addEventListener('mouseover', function(e) {e.target.style.background = "black"});
    

    document.getElementById("board").appendChild(div1);
}

function setSquares (numSquares, dimensions) {
    for (let i = 0; i < numSquares; i++) {
        createSquares(dimensions);
    }
}

setSquares(startSquares, sqDimensions);
console.log(sqDimensions);

const resetBtn = document.querySelector('.resetBoard');
resetBtn.addEventListener('click', function(e) {
    var checkers = document.getElementsByClassName('checkers');
    for (var i = 0; i < checkers.length; i++) {
        checkers[i].style.background = "ivory";
    }
});

const setBtn = document.querySelector('.setBoard');
setBtn.addEventListener('click', function(e) {

    promptSquares = getSquares();
    totPrompt = promptSquares**2;
    promptDimensions = 100/promptSquares;
    document.querySelectorAll('.checkers').forEach(e => e.remove());
    setSquares(totPrompt, promptDimensions);
});
