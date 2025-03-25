"use strict"
//get the form for what i don't know yet
const form= document.querySelector("form");
// create the login, password, check, submitButton constants
const login= document.querySelector('form .mb-3 #login');
const password= document.querySelector('form .mb-3 #password');
const check= document.querySelector('form .mb-3.form-check #acceptPolicy');
const submitButton= document.querySelector('form .text-center button')

// check if they work
// console.log(login);
// console.log(password);
// console.log(check);
// console.log(form.innerHTML);
// console.log(submitButton)
// document.querySelector('form .mb-3 .invalid-feedback').style.display="block"

//  document.querySelector('form .mb-3:nth-child(2) .invalid-feedback').style.display="block"
// document.querySelector('form .mb-3.form-check .invalid-feedback').style.display="block"
// End of the check

function checkLogin(){
    if(login.value.length > 2 && login.value.length < 10){
        console.log(login.value)
    } else{
        const errorMessage= document.querySelector('form .mb-3 .invalid-feedback')
        errorMessage.style.display= "block"
    }
}
function checkPassword(){
    if(password.value.length>6 && password.value.length<20){
        console.log(password.value);
    } else{
        const errorMessage= document.querySelector('form .mb-3:nth-child(2) .invalid-feedback');
        errorMessage.style.display="block";
    }
}
function checkConfidentiality(){
    if(check.checked == true){
        console.log(check.checked);
    } else{
         const errorMessage= document.querySelector('form .mb-3.form-check .invalid-feedback')
        errorMessage.style.display= "block"
    }
}

function callFunctions(e){
    e.preventDefault();
    checkLogin();
    checkPassword();
    checkConfidentiality();
}
form.addEventListener('submit',callFunctions);