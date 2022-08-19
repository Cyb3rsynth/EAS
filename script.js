const container = document.getElementById("container");
const smallSize = document.querySelector(".sizebtn1");
const medSize = document.querySelector(".sizebtn2");
const largeSize = document.querySelector(".sizebtn3");
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
        container.appendChild(cell).className = 'grid-cell';
    }
}

makeRows(16);

function removeAllGridCells() {
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
}

 //functions to change size of the grid
  document.querySelector(".sizebtn1").onclick = () => {
    makeRows(12, 12); 
  }
  document.querySelector(".sizebtn2").onclick = () => {
     makeRows(24, 24); 
  }
  document.querySelector(".sizebtn3").onclick = () => {
     makeRows(48, 48);
  }

//Functions to change the pixel color of the grid
  document.querySelector(".modergb").onclick = () => {
    function getRandomColor (target) {
        target.style.backgroundColor = getRandomColor(target);
    }
    container.addEventListener("mouseover", function (e) {
    let container = document.querySelector("container");
        target = e.target;
    
        if (target.matches("div")) {
            getRandomColor(target);
        }
    }); 
  }

//function to highlight the divs as you move over them with your mouse
function changeColor (target) {
    target.style.backgroundColor = 'black';
}

container.addEventListener("mouseover", function (e) {
let container = document.querySelector("container");
    target = e.target;

    if (target.matches("div")) {
        changeColor(target);
    }
});

//reset button - erase and clean paper
const reset = document.querySelector('.eraseBtn');
reset.addEventListener('click', function(){
     window.location.reload();
});

//Get a random color
function getRandomColor() {
    const r = Math.floor(Math.random() * 256)
    const g = Math.floor(Math.random() * 256)
    const b = Math.floor(Math.random() * 256)
    return `rgb(${r}, ${g}, ${b})`
}
