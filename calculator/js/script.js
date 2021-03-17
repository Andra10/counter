//declaring selectors
let value = document.querySelector("#value");
let decrement = document.querySelector("#decrease");
let increment = document.querySelector("#increase");
let reset = document.querySelector("#reset");

let count = 0; //initial value

function decrementFunc() {
  count--; //decrementing value
  value.innerHTML = count; // printing new value
  if (value.innerHTML > 0) {
    value.style.color = "#58bd1b";
  } else if (value.innerHTML == 0) {
    value.style.color = "#333f50";
  } else {
    value.style.color = "#b60a16";  //printing the decrementing value in red
  }
}

function incrementFunc() {
  count++; // incrementing value
  value.innerHTML = count; // printing new value
  if (value.innerHTML > 0) {  //printing the incrementing value in green
    value.style.color = "#58bd1b";
  } else if (value.innerHTML == 0) {   
    value.style.color = "#333f50";
  } else {
    value.style.color = "#b60a16";
  }
}

function resetFunc() {
  count = 0; //resetting value
  value.innerHTML = count; //printing the initial value
  value.style.color = "#333f50";
}

// Events onclick
decrement.addEventListener("click", decrementFunc);
increment.addEventListener("click", incrementFunc);
reset.addEventListener("click", resetFunc);
