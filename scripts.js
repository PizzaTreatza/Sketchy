//Initial stats
let squares = 16;
let startSquares = squares**2;
let sqDimensions = 100/squares;

//Functions
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

function createSquares(dimensions, color) {
    let div1 = document.createElement("div");
    div1.style.width = `${dimensions}%`;
    div1.style.height = `${dimensions}%`;
    div1.style.margin = "0";
    div1.style.border = "0";
    div1.style.display = "flex";
    div1.style.background = "ivory";
    div1.className = "checkers";
    div1.addEventListener('mouseover', function(e) {e.target.style.background = color});
    

    document.getElementById("board").appendChild(div1);
}

function setSquares (numSquares, dimensions, color) {
    for (let i = 0; i < numSquares; i++) {
        createSquares(dimensions, color);
    }
}

function randomColor() {
    let color = [];
    for (var i = 0; i < 3; i++) {
        color.push(Math.floor(Math.random() * 256));
    }
    return 'rgb(' +color.join(',') + ')';
}

//buttons
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
    setSquares(totPrompt, promptDimensions, "black");
    blackBtn.style.boxShadow = "4px 4px 6px #29da6a";
    rainbowBtn.style.boxShadow = "-4px -4px 6px #000021 inset";
});

const rainbowBtn = document.querySelector('.rainbow');
const blackBtn = document.querySelector('.original');
const greyBtn = document.querySelector('.fade');
rainbowBtn.addEventListener('click', function(e) {
    rainbowBtn.style.boxShadow = "4px 4px 6px #29da6a";
    blackBtn.style.boxShadow = "-4px -4px 6px #000021 inset";
    greyBtn.style.boxShadow = "-4px -4px 6px #000021 inset";
    var checkers = document.getElementsByClassName('checkers');
    for (var i = 0; i < checkers.length; i++) {
        checkers[i].replaceWith(checkers[i].cloneNode(true));
        checkers[i].style.opacity = 1;
        checkers[i].addEventListener('mouseover', function(e)  {e.target.style.background = randomColor()});
    }
});

blackBtn.addEventListener('click', function(e) {
    blackBtn.style.boxShadow = "4px 4px 6px #29da6a";
    rainbowBtn.style.boxShadow = "-4px -4px 6px #000021 inset";
    greyBtn.style.boxShadow = "-4px -4px 6px #000021 inset";
    var checkers = document.getElementsByClassName('checkers');
    for (var i = 0; i < checkers.length; i++) {
        checkers[i].replaceWith(checkers[i].cloneNode(true));
        checkers[i].style.opacity = 1;
        checkers[i].addEventListener('mouseover', function(e)  {e.target.style.background = "black"});
    }
});

greyBtn.addEventListener('click', function(e) {
    greyBtn.style.boxShadow = "4px 4px 6px #29da6a";
    rainbowBtn.style.boxShadow = "-4px -4px 6px #000021 inset";
    blackBtn.style.boxShadow = "-4px -4px 6px #000021 inset";
    var checkers = document.getElementsByClassName('checkers');
    for (var i = 0; i < checkers.length; i++) {
        checkers[i].replaceWith(checkers[i].cloneNode(true));
        checkers[i].style.opacity = 0;
        checkers[i].style.background = "black";
        checkers[i].addEventListener('mouseover', function(e)  {
            var target = e.target;
            var opNow = parseFloat(getComputedStyle(target).getPropertyValue('opacity'));
            var newOp = opNow + 0.1;
            newOp = Math.min(newOp, 1);
            e.target.style.opacity = newOp;
        });
    }
});

//Initialize board
setSquares(startSquares, sqDimensions, "black");