{
    let createBtn = document.querySelector('#v-pills-create-tab');
let addBtn = document.querySelector('.addBlogBtn');
let createForm = document.querySelector('.createForm');
let title = document.querySelector('#name');
let location = document.querySelector('#country');
let imgURL = document.querySelector('#image');
let text = document.querySelector('#text');
let price = document.querySelector('#price');
let days = document.querySelector('#days');
let nights = document.querySelector('#nights');
// let description;
// if(text.indexOf('.') === -1){
//     description = text;
// }else{
//     description = text.subString(0, text.indexOf('.')+1)
// }

addBtn.addEventListener('click', () =>{
    createBtn.click();
});

createForm.addEventListener('submit', function(e){
    e.preventDefault();
  
    fetch('/destinations' , {
        method: 'POST',
        headers:{
            'Content-type' : 'application/json'
        },
        body: JSON.stringify({
            title: title.value,
            location: location.value,
            imgURL: imgURL.value,
            text: text.value,
            price: price.value,
            days: days.value,
            nights: nights.value
        })
    }).then((res) => res.text()).then(() => window.history.go())

})


}