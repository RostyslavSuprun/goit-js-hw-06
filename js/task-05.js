const inputTextEl = document.querySelector("#name-input");
const outputTextEl = document.querySelector("#name-output");
// console.log(inputTextEl);
// const outputText = [];
// inputTextEl.addEventListener("keydown", event => {
    // console.log("key: ", event.key);
    // outputText.push(event.key);
    // outputTextEl.textContent = outputText.join("");
    // console.log(...outputText);
// });

inputTextEl.addEventListener('input', onInputChange);
function onInputChange(event) {
     if (event.currentTarget.value !== "") {
         
         outputTextEl.textContent = event.currentTarget.value;
        
    }
   
    else {
        outputTextEl.textContent = "Anonymous";
    };
    console.log(event.currentTarget.value);
    console.log(event.currentTarget.value.length);
};



//    inputTextEl.oninput = handleInput;

// function handleInput(event) {

//      if (inputTextEl.textContent.length === 0) {
//         outputTextEl.textContent = "Anonymous";
      
//     };
//     console.log(event.currentTarget.value);
//     console.log(event.currentTarget.value.length);
//     outputTextEl.textContent = event.currentTarget.value;
   
// }


   