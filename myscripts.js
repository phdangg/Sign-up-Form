const btnCreateAccount = document.querySelector('#btn-create-account');
const passwordInput = document.getElementById('password')
const currentPasswordInput = document.getElementById('current-password')
const passwordDiv = document.querySelector('#password-div')
function isTheSamePassword(){
    if(passwordInput.value != currentPasswordInput.value){
        const invalid = document.createElement('p');
        invalid.className = "invalid-notice"
        invalid.textContent = "*Password do not match";
        invalid.style.color = 'red';
        invalid.style.fontSize = '0.6em';

        passwordInput.style.border = '1px solid red'
        currentPasswordInput.style.border = '1px solid red'
        if (passwordDiv.querySelector(".invalid-notice") == null)
            passwordDiv.appendChild(invalid)
    }else{
        passwordInput.style.border = '1px solid green'
        currentPasswordInput.style.border = '1px solid green'
        const invalid = passwordDiv.querySelector(".invalid-notice");
        if ( invalid != null)
            passwordDiv.removeChild(invalid)
    }
}