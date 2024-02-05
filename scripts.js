var divSq = document.createElement("div");
var squares = 16**2;

function setSquares() {
    var numIn = parseInt(prompt("Choose a board size between 1 & 100",""), 10);
    if (isNaN(numIn)) { 
        alert("Please enter a number");
        setSquares();
    }
    else if (numIn > 100 || numIn < 1) {
        alert("Please choose a number between 1 & 100")
        setSquares();
    }
        return numIn;
}
console.log(setSquares());