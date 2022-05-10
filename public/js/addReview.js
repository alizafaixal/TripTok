let reviewForm = document.querySelector('.reviewForm');
let name = document.querySelector('#name');
let email = document.querySelector('#email');
let destination = document.querySelector('#destination');
let img = document.querySelector('#img');
let review = document.querySelector('#review');



reviewForm.addEventListener('submit', function(e){
    e.preventDefault();
    fetch('/reviews', {
        method: 'POST',
        headers:{
            'Content-type' : 'application/json'
        },
        body: JSON.stringify({
            name:name.value,
            email: email.value,
            review: review.value,
            destionation: destination.value,
            imgURL: img.value      
        })
    }).then((res) => res.text()).then(() => window.history.go());
})