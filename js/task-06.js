const inputTextEl = document.querySelector("#validation-input")
inputTextEl.addEventListener('blur', blur);
function blur(event) {
     if (event.currentTarget.value.length === Number(event.currentTarget.dataset.length)) {
        // outputTextEl.textContent = "Anonymous";
         inputTextEl.className = "valid";

    }
    else {
        inputTextEl.className = "invalid";
    };
    
   
    // console.log(event.currentTarget.value);
    // outputTextEl.textContent = event.currentTarget.value;
    console.log(event.currentTarget.value.length);
    console.log(event.currentTarget.value);
    
    console.log(event.currentTarget.dataset.length);
};


console.log(inputTextEl.data-length);
console.log(6);