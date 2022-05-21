function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};
const widget = document.querySelector(".widget");
const btn = document.querySelector(".change-color");
const colorName = document.querySelector(".color");

btn.addEventListener('click', onclick);
function onclick() {

  const color = getRandomHexColor();
  document.body.style.backgroundColor = color;
  colorName.textContent = color;
  console.log(getRandomHexColor());

};
