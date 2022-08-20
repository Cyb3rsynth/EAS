const container = document.getElementById("container");
const smallSize = document.querySelector(".sizebtn1");
const medSize = document.querySelector(".sizebtn2");
const largeSize = document.querySelector(".sizebtn3");
const modergb = document.querySelector(".modergb");
const modeerase = document.querySelector(".modeerase");
let cell;
let target; 
let gridSize;


//create grid function//
  function makeRows(gridSize = 16) {
    removeAllGridCells();
    container.style.setProperty('--grid-rows', gridSize);
    container.style.setProperty('--grid-cols', gridSize);
    for (i = 0; i < (gridSize * gridSize); i++) {
        let cell = document.createElement('div');
        container.appendChild(cell).className = 'gridCell';
    }
}

makeRows(16);

function removeAllGridCells() {
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
}

 //functions to change size of the grid which calls our makeRow function within (normal grid)
  document.querySelector(".sizebtn1").onclick = () => {
    makeRows(64, 64); 
  }
  document.querySelector(".sizebtn2").onclick = () => {
     makeRows(32, 32); 
  }
  document.querySelector(".sizebtn3").onclick = () => {
    makeRows(8, 8); 
 }

//function to highlight the divs as you move over them with your mouse - Regular color 'Black'
function changeColor (target) {
    target.style.backgroundColor = 'black';
}

//Event listener for changing the divs to black as the mouse moves over them
container.addEventListener("mouseover", function (e) {
let container = document.querySelector("container");
    target = e.target;
    if (target.matches("div")) {
        changeColor(target);
    }
});

//reset button - Clean grid slate
const reset = document.querySelector('.eraseBtn');
reset.addEventListener('click', function(){
     window.location.reload();
});

//Event listeners for clicking on erase or RGB buttons
modergb.addEventListener("click", () => {
    let color = "rainbow";
    setColor(color);
  });

modeerase.addEventListener("click", () => {
    let color = "erase";
    setColor(color);
  });

//Function for generating a random number
function randomNum(min, max) {
    const num = Math.floor(Math.random() * (max - min)) + min;
    return num;
  }
  
//Function for getting a random color based on the randomNum generated from the previous function
function randomColor() {
    return (
      "rgb(" +
      randomNum(0, 255) +
      ", " +
      randomNum(0, 255) +
      ", " +
      randomNum(0, 255) +
      ")"
    );
  }

//Function to set a color either to rainbow or white(blank)
function setColor(color) {
    const container = document.querySelectorAll("#container");
    for (let i = 0; i < container.length; i++) {
      container[i].addEventListener("mouseover", function (e) {
         if (color == "rainbow") {
          e.target.style.backgroundColor = randomColor();
         }
         else {
            e.target.style.backgroundColor = "rgba(255, 255, 246, 0.877)";
         }
      });
    }
  }