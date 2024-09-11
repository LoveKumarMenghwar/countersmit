let incrementBtn = document.querySelector(".increment");
let decrementBtn = document.querySelector(".decrement");
let counterField = document.querySelector(".counterinput");



let count = 0;


function increment() {
    count++;
    counterField.textContent = count;
  
}

function decrement() {
    count--;
    if (count < 0) {
        count = 0; 
    counterField.textContent = count;

    }
    counterField.textContent = count;
}

function reset() {
    count = 0;
    counterField.textContent = count;
    console.log("Counter reset");
}

incrementBtn.addEventListener("click", increment);
decrementBtn.addEventListener("click", decrement);