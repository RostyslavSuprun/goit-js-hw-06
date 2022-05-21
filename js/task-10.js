function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const input = document.querySelector("input");
const createBtn = document.querySelector('[data-create]');
const destroyBtn = document.querySelector('[data-destroy]');
const boxList = [];
const boxListEl = document.querySelector("#boxes");
// console.log(boxListEl);
// console.log(destroyBtn);



createBtn.addEventListener('click', createBoxes);
destroyBtn.addEventListener('click', destroyBoxes);
function createBoxes(amount) {
  amount = input.value;
  for (let i = 1; i <= amount; i += 1) {
  const boxEl = document.createElement("div");
  boxEl.style.width = 30 + i*10 + "px";
  boxEl.style.height = 30 + i*10 + "px";
  boxEl.style.backgroundColor = getRandomHexColor();
  console.log(boxEl);
    boxList.push(boxEl);
    boxListEl.append(boxEl);

    console.log(boxListEl.children.length);
  };

  // boxListEl.append(...boxList);
  // const markup = boxList.map((box) => `<div><div>`)
  // .join("");
  // console.log(markup);
  // boxListEl.insertAdjacentHTML("beforeend", markup);
};
function destroyBoxes() {
  for (let i = 0; i < boxListEl.children.length;) {
    boxListEl.firstChild.remove();
  };
  // console.log(boxListEl.children.length);
}
