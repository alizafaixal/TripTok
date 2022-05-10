let contactForm = document.querySelector('.contactForm');
let fname = document.querySelector('#fname');
let lname = document.querySelector('#lname');
let emailAddress = document.querySelector('#emailAddress');
let phone = document.querySelector('#phone');
let msg = document.querySelector('#msg');

contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    fetch('/contacts', {
        method: 'POST',
        headers :{
            'Content-type' : 'application/json'
        },body: JSON.stringify({
            fname: fname.value,
            lame: lname.value,
            email: emailAddress.value,
            number: phone.value,
            msg: msg.value
        })
    }).then((res) => res.text()).then(() => window.history.go());
})