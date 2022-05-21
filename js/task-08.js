const form = document.querySelector(".login-form");
// const inputEmail = document.querySelector("#email");
// const inputPassword = document.querySelector("#password");
// const submitBtn = document.querySelector("#submit");
// console.log(inputPassword);
// console.log(inputEmail);
// console.log(submitBtn);
console.log(form);
form.addEventListener("submit", onSubmit);
function onSubmit(event) {
    event.preventDefault();
    const formElements = this.elements;
    const email = formElements.email.value;
    const password = formElements.password.value;
    const profile = {
        email,
        password
    };
    if (email === "" || password === "") {
    alert("Всі поля повинні бути заповнені");
  } else {
     console.log(profile);
   this.reset();
    }
};
   




