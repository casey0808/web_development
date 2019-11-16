var numSquares = 6;
var colors = [];
var pickedColor;

var squares = document.querySelectorAll(".square");
var colorDisplay = document.querySelector("#colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1")
var resetButton = document.querySelector("#reset");
var modeBtn = document.querySelectorAll(".mode")

init();

function init(){
    setUpModeBtn();
    setUpSquares();
    reset();
}

function setUpModeBtn(){
    for(var i = 0; i < modeBtn.length; i++){
        modeBtn[i].addEventListener("click", function(){
            modeBtn[0].classList.remove("selected");
            modeBtn[1].classList.remove("selected");
            this.classList.add("selected");
            this.textContent === "easy" ? numSquares = 3: numSquares = 6;
            reset();
        })
    }
}

function setUpSquares(){
    for(var i = 0; i < squares.length; i++){
        // squares[i].style.background = colors[i];
        squares[i].addEventListener("click", function(){
            var clickedColor = this.style.background;
            if(clickedColor === pickedColor){
                messageDisplay.textContent = "Correct!";
                changeColors(clickedColor);
                resetButton.textContent = "Play Again?";
                h1.style.background = pickedColor;
            }
            else{
                this.style.background = "#232323";
                messageDisplay.textContent = "Try Again";
            }
        });
    }
}

// easyBtn.addEventListener("click", function(){
//     easyBtn.classList.add("selected");
//     hardBtn.classList.remove("selected");
//     numSquares = 3
//     colors = generateRandomColors(numSquares);
//     pickedColor = pickColor();
//     colorDisplay.textContent = pickedColor;
//     for(var i = 0; i < squares.length; i++){
//         if(colors[i]){
//             squares[i].style.background = colors[i];
//         }
//         else{
//             squares[i].style.display = "none";
//         }
//     }
// })

// hardBtn.addEventListener("click", function(){
//     hardBtn.classList.add("selected");
//     easyBtn.classList.remove("selected");
//     numSquares = 6;
//     colors = generateRandomColors(numSquares);
//     pickedColor = pickColor();
//     colorDisplay.textContent = pickedColor;
//     for(var i = 0; i < squares.length; i++){
//         squares[i].style.display = "block";
//         squares[i].style.background = colors[i];
//     }
// })

resetButton.addEventListener("click", function(){
    reset();
})

function changeColors(color){
    for(var i = 0; i < squares.length; i++){
        squares[i].style.background = color;
    }
}

function pickColor(){
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateRandomColors(num){
    var arr = []
    for(var i = 0; i < num; i++){
        arr.push(randomColors());
    }
    return arr;
}

function randomColors(){
    var r = Math.floor(Math.random() * 256 + 1);
    var g = Math.floor(Math.random() * 256 + 1);
    var b = Math.floor(Math.random() * 256 + 1);
    return "rgb(" + r + ", " + g + ", " + b + ")"
}

function reset(){
        colors = generateRandomColors(numSquares);
        pickedColor = pickColor();
        resetButton.textContent = "New Colors";
        messageDisplay.textContent = "";
        colorDisplay.textContent = pickedColor;
        for(var i = 0; i < squares.length; i++){
            if(colors[i]){
                squares[i].style.display = "block";
                squares[i].style.background = colors[i];
            }
            else{
                squares[i].style.display = "none";
            }

        }
        h1.style.background = "steelblue";
}