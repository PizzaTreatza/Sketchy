let squares = 16;
totSquares = squares**2;

let divSq = document.createElement("div");
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
    div1.style.width = '16%';
    div1.style.height = '16%';
    div1.style.margin = "0";
    div1.style.border = "0";
    div1.style.display = "flex";
    div1.style.background = "red";
    div1.className = "checkers";
    div1.addEventListener('mouseover', function(e) {e.target.style.background = "black"});
    

    document.getElementById("board").appendChild(div1);
}

function setSquares () {
    for (let i = 0; i < totSquares; i++) {
        createSquares(16);
    }
}

setSquares();
