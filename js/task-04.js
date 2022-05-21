const valueEl = document.querySelector("#value");
// console.log(valueEl);

const counterValue = {
    value: 0,
    increment() {
        this.value += 1;
    },
    decrement() {
        this.value -= 1;
    },

};
const incrementBtn = document.querySelector('[data-action="increment"]');
const decrementBtn = document.querySelector('[data-action="decrement"]');

incrementBtn.addEventListener('click', () => {
    counterValue.increment();
    valueEl.textContent = counterValue.value;
});

decrementBtn.addEventListener('click', () => {
    counterValue.decrement();
    valueEl.textContent = counterValue.value;
});