var squares = 16;
totSquares = squares**2;

var divSq = document.createElement("div");
divSq.style.width = 

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
    div1.style.width = '${dimensions}%';
    div1.style.height = '${dimensions}%';

    document.getElementById("board").appendChild(div1);
}

function setSquares (totSquares) {
    for (let i = 0; i < totSquares; i++) {
        createSquares(squares);
    }
}
