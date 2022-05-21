const inputTextEl = document.querySelector("#font-size-control");
const spanEl = document.querySelector("#text");
inputTextEl.addEventListener('input', onInputChange);
function onInputChange(event) {
    spanEl.style.fontSize = event.currentTarget.value + "px";

    console.log(event.currentTarget.value);
};
console.log(spanEl.fon);
