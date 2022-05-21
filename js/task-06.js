const inputTextEl = document.querySelector("#validation-input")
inputTextEl.addEventListener('blur', blur);
function blur(event) {
     if (event.currentTarget.value.length === 6) {
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
};


console.log(inputTextEl.data-length);
console.log(6);