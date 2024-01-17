// Instance Variables
const decreaseBtn = document.getElementById("decreaseBtn");
const increaseBtn = document.getElementById("increaseBtn");
const resetBtn = document.getElementById("resetBtn");
const countLabel = document.getElementById("countLabel");
let count = 0;

// Increase count
increaseBtn.onclick = function(){
    count++;
    countLabel.textContent = count;
}

// Decrease count
decreaseBtn.onclick = function(){
    count--;
    countLabel.textContent = count;
}

// Reset count
resetBtn.onclick = function(){
    count = 0;
    countLabel.textContent = count;
}