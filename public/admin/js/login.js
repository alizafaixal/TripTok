let loginForm = document.querySelector('.loginForm');
let registerForm = document.querySelector('.registerForm');
let email = document.querySelector('#email');
let password = document.querySelector('#password');
let registerEmail = document.querySelector('#registerEmail');
let registerPassword = document.querySelector('#registerPassword');
let registerReEnterPassword = document.querySelector('#registerReEnterPassword');

loginForm.addEventListener('submit', function(e){
    e.preventDefault();
    fetch('/users/login', {
        method: 'POST',
        headers:{
            'Content-type' : 'application/json'
        },body: JSON.stringify({
           email: email.value,
           password: password.value 
        })
    }).then((res) => res.text()).then((data) =>alert(data));

})

registerForm.addEventListener('submit', function(e){
    e.preventDefault();
    if(registerPassword.value !== registerReEnterPassword.value){
        return;
    }
    fetch('/users/register', {
        method: 'POST',
        headers:{
            'Content-type': 'application/json'
        }, body : JSON.stringify({
            email: registerEmail.value,
            password: registerPassword.value
        })
    }).then((res) =>res.text()).then((data) => alert(data));
})