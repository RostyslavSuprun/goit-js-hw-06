const inputTextEl = document.querySelector("#font-size-control");
const spanEl = document.querySelector("#text");
spanEl.style.fontSize = inputTextEl.value + "px";
inputTextEl.addEventListener('input', onInputChange);
function onInputChange(event) {
    spanEl.style.fontSize = event.currentTarget.value + "px";

    console.log(event.currentTarget.value);
};
console.log(spanEl.fon);
