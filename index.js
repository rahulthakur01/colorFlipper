const button = document.querySelector("#btn");
const span = document.querySelector(".span");
// const container = document.querySelector(".container")

const array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

let hexColor;
button.addEventListener("click", () => {
  hexColor = "#";
  for (let i = 0; i < 6; i++) {
    hexColor += array[getRandomNumber()];
  }
  span.textContent = hexColor;
  document.body.style.backgroundColor = hexColor;
  //   container.style.backgroundColor = hexColor;
});

function getRandomNumber() {
  return Math.floor(Math.random() * array.length);
}
const searchIcon = document.querySelector("#searchIcon");
const input = document.querySelector("input");

searchIcon.addEventListener("click", () => {
  checkAndUpdateColor();
});

function checkAndUpdateColor() {
  const searchColor = input.value;
  if (searchColor) {
    span.textContent = searchColor;
    document.body.style.backgroundColor = searchColor;
  } else {
    alert("Enter valid color code");
  }
  input.value = "";
}
